import React, { useEffect, useState } from 'react'
import Header from '../components/ExpireTracker/Header/Header'
import Filters from '../components/ExpireTracker/Header/Filters'
import KpiMainCards from '../components/ExpireTracker/KPICards/KpiMainCards'
import ExpiryTable from '../components/ExpireTracker/ExpireTable/ExpiryTable'
import Pagination from '../components/ExpireTracker/ExpireTable/Pagination'
import type{ CategoryResponseModel, ExpiryReportFilterModel, LocationResponseModel } from '../types'
import { getLocations,getCategories } from '../api/expiryReportApi'

function ExpiryTrackerPage() {
    const [locations, setLocations] = useState<LocationResponseModel[]>([]);
    const [categories,setCategories] = useState<CategoryResponseModel[]>([]);
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [selectedCategory,setSelectedCategory] = useState("All");
    const [selectedRemoveStatus,setSelectedRemoveStatus] = useState("All")
    const [selectedMonth,setSelectedMonth] = useState("All")
    const [filters, setFilters] = useState<ExpiryReportFilterModel>({
    location: "All",
    month: "All",
    creationDateFrom: null,
    creationDateTo: null,
    category: "All",
    removedStatus: "All",
});
    const [creDateFrom,setCreDateFrom] = useState(Date.now)
    const date = new Date()

    const getRemoveStatusFilter = (data:string)=>{
        setSelectedRemoveStatus(data);
        console.log("removestatus :: "+data)
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
        console.log("Today is : "+ date.getDate())
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
          />

          <KpiMainCards />
          <ExpiryTable />
          <Pagination
              currentPage={1}
              totalPages={129}
              totalRecords={3217}
              pageSize={3}
              onPageChange={(page) => console.log(page)}
          />
      </div>
  )
}

export default ExpiryTrackerPage
