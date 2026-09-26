import React, { useEffect, useState } from 'react'
import Header from '../components/ExpireTracker/Header/Header'
import Filters from '../components/ExpireTracker/Header/Filters'
import KpiMainCards from '../components/ExpireTracker/KPICards/KpiMainCards'
import ExpiryTable from '../components/ExpireTracker/ExpireTable/ExpiryTable'
import Pagination from '../components/ExpireTracker/ExpireTable/Pagination'
import type { LocationResponseModel } from '../types'
import { getLocations } from '../api/expiryReportApi'
import { data } from 'react-router-dom'

function ExpiryTrackerPage() {
    const [locations, setLocations] = useState<LocationResponseModel[]>([]);
    const [selectedLocation, setSelectedLocation] = useState("All");

    useEffect(() => {
        const loadLocations = async () => {
            try {
                const data = await getLocations();
                if(data !=null){
                    setLocations(data);
                    console.log(data)
                }
                
            } catch (error) {
                console.error(
                    "Failed to load locations:",
                    error
                );

            }

        };

        loadLocations();

    }, []);

  return (
     <div className="min-h-screen bg-slate-100 p-4">

            <Header />
            <Filters
                 locations={locations}
                selectedLocation={selectedLocation}
                onLocationChange={setSelectedLocation}
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
