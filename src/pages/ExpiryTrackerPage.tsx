import React, { useEffect, useState } from 'react'
import Header from '../components/ExpireTracker/Header/Header'
import Filters from '../components/ExpireTracker/Header/Filters'
import KpiMainCards from '../components/ExpireTracker/KPICards/KpiMainCards'
import ExpiryTable from '../components/ExpireTracker/ExpireTable/ExpiryTable'
import Pagination from '../components/ExpireTracker/ExpireTable/Pagination'
import type{ CategoryResponseModel, ExpiryCountKpiModel, ExpiryItemModel, ExpiryItemsRequestModel, ExpiryReportFilterModel, LocationResponseModel } from '../types'
import { getLocations,getCategories, getKpi, getItems } from '../api/expiryReportApi'

function ExpiryTrackerPage() {
    const [locations, setLocations] = useState<LocationResponseModel[]>([]);
    const [categories,setCategories] = useState<CategoryResponseModel[]>([]);
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [selectedCategory,setSelectedCategory] = useState("All");
    const [selectedRemoveStatus,setSelectedRemoveStatus] = useState("All")
    const [selectedMonth,setSelectedMonth] = useState("All")
    const [kpi, setKpi] = useState<ExpiryCountKpiModel | null>(null);
    const [kpiLoading, setKpiLoading] = useState(false);

    const [items, setItems] = useState<ExpiryItemModel[]>([]);
    const [itemsLoading, setItemsLoading] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(25);

    const [totalRecords, setTotalRecords] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [filters, setFilters] = useState<ExpiryReportFilterModel>({
        location: "All",
        month: "All",
        creationDateFrom: null,
        creationDateTo: null,
        category: "All",
        removedStatus: "All",
    });
    const [creationDateFrom, setCreationDateFrom] = useState<string | null>(null);

    const [creationDateTo, setCreationDateTo] = useState<string | null>(null);

    const getRemoveStatusFilter = (data: string) => {
        setSelectedRemoveStatus(data);
    }
    const getExpireMonth = (month) => {
        setSelectedMonth(month)
    }
    const getCreDateFrom = (date) => {
        setCreationDateFrom(date);
    }
    const getCreDateTo = (date) => {
        setCreationDateTo(date)
    }
    useEffect(() => {
        const loadLocations = async () => {
            try {
                const locdata = await getLocations();
                if(locdata !=null){
                    setLocations(locdata);
                    console.log(locdata)
                }
                
            } catch (error) {
                console.error(
                    "Failed to load locations:",
                    error
                );
            }
        };
        const loadCategories = async ()=>{
            try{
                const categoryData  = await getCategories(selectedLocation)
                if(categoryData != null){
                    setCategories(categoryData)
                    console.log(categoryData)
                }
            }catch(error){
                console.error("failed to load category:",error)
            }
        }
        loadLocations();
        loadCategories();
        //console.log("Today is : "+ date.getDate())
    }, []);
    useEffect(()=>{
        const loadCategories = async ()=>{
            console.log(selectedLocation)
            try{
                const categoryData  = await getCategories(selectedLocation)
                if(categoryData != null){
                    setCategories(categoryData)
                    console.log(categoryData)
                }
            }catch(error){
                console.error("failed to load category:",error)
            }
        }
        loadCategories();
    },[selectedLocation])
    useEffect(()=>{
        console.log(selectedCategory)
    },[selectedCategory])

    //call the api for kpicount
    // const handleView = async () => {
    //     const request = {
    //         location: selectedLocation,
    //         month: selectedMonth,
    //         creationDateFrom: creationDateFrom,
    //         creationDateTo: creationDateTo,
    //         category: selectedCategory,
    //         removedStatus: selectedRemoveStatus
    //     };
    //     console.log(request)

    //     try {
    //         setKpiLoading(true);

    //         const data = await getKpi(request);

    //         setKpi(data);

    //     } catch (error) {
    //         console.error("Failed to load KPI:", error);
    //     } finally {
    //         setKpiLoading(false);
    //     }
    // };
    const getFilterRequest = () => {
        return {
            location: selectedLocation,
            month: selectedMonth,
            creationDateFrom: creationDateFrom,
            creationDateTo: creationDateTo,
            category: selectedCategory,
            removedStatus: selectedRemoveStatus
        };
    };
    const handleView = async () => {
        const filters = getFilterRequest();

        try {
            setKpiLoading(true);
            setItemsLoading(true);

            setKpi(null);
            setItems([]);

            setCurrentPage(1);

            const [kpiData, itemsData] = await Promise.all([
                getKpi(filters),

                getItems({
                    ...filters,
                    page: 1,
                    pageSize: 25
                })
            ]);

            setKpi(kpiData);

            setItems(itemsData.items);
            setTotalRecords(itemsData.totalRecords);
            setTotalPages(itemsData.totalPages);

        } catch (error) {
            console.error("Failed to load expiry report:", error);
        } finally {
            setKpiLoading(false);
            setItemsLoading(false);
        }
    };
    const handlePageChange = async (page: number) => {
        const filters = getFilterRequest();

        try {
            setItemsLoading(true);

            const data = await getItems({
                ...filters,
                page,
                pageSize
            });

            setItems(data.items);
            setCurrentPage(data.page);
            setTotalRecords(data.totalRecords);
            setTotalPages(data.totalPages);

        } catch (error) {
            console.error("Failed to load page:", error);
        } finally {
            setItemsLoading(false);
        }
    };

  return (
      <div className="min-h-screen bg-slate-100 p-4">

          <Header />
          <Filters
              locations={locations}
              selectedLocation={selectedLocation}
              onLocationChange={setSelectedLocation}
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              removeStatus = {selectedRemoveStatus}
              onRemoveStatusChange= {getRemoveStatusFilter}
              month = {selectedMonth}
              onExpireMonth = {getExpireMonth}
              creDataFrom = {creationDateFrom}
              onCreDateFrom = {getCreDateFrom}
              creDateTo = {creationDateTo}
              onCreDateTo = {getCreDateTo}
              onView={handleView}
          />

          {kpiLoading ? (
              <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
              </div>
          ) : kpi ? (
              <KpiMainCards kpi={kpi} />
          ) : null}
          {itemsLoading ? (
              <div className="flex justify-center py-8">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600" />
              </div>
          ) : items.length > 0 ? (
              <>
                  <ExpiryTable items={items} />

                  <Pagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      totalRecords={totalRecords}
                      pageSize={pageSize}
                      onPageChange={handlePageChange}
                  />
              </>
          ) : null}
      </div>
  )
}

export default ExpiryTrackerPage
