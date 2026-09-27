import React from 'react'
import type {CategoryResponseModel, LocationResponseModel,} from '../../../types'

interface FiltersProps {
    locations: LocationResponseModel[];
    selectedLocation: string;
    onLocationChange: (location: string) => void;
    categories : CategoryResponseModel[]
    selectedCategory: string
    onCategoryChange: (category:string)=> void;
    removeStatus:string
    onRemoveStatusChange:(status:string|null)=>void
}

function Filters({locations,selectedLocation,onLocationChange,categories,
                selectedCategory,onCategoryChange,removeStatus,onRemoveStatusChange}: FiltersProps) {
  return (
   <div className="mt-4 rounded-xl bg-white p-4 shadow-sm">

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Location
                    </label>

                  <select
                      value={selectedLocation}
                      onChange={(e) => onLocationChange(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                  >
                      <option value="All">
                          All Location
                      </option>

                      {locations.map((location) => (
                          <option
                              key={location.locCode}
                              value={location.locCode}
                          >
                              {location.locName}
                          </option>
                      ))}
                  </select>
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Exp Month
                    </label>

                    <select className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                        <option>Sep-2026</option>
                        <option>Aug-2026</option>
                        <option>Jul-2026</option>
                    </select>
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Cre Date From
                    </label>

                    <input
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Cre Date To
                    </label>

                    <input
                        type="date"
                        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Category
                    </label>

                    <select value={selectedCategory}
                        onChange={(e)=>onCategoryChange(e.target.value)}
                        className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                        <option value={"All"}
                        >All Categories</option>
                        {
                            categories.map((cate)=>
                                <option
                                key={cate.categoriesCode}
                                value={cate.categoriesCode}>
                                    {cate.categoriesName}
                                </option>
                            )
                        }
                        {/* <option>GROCERY</option>
                        <option>BEVERAGES</option> */}
                    </select>
                </div>

              
                <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">
                        Removed Status
                    </label>

                    <select value={removeStatus}
                    onChange={(e)=>onRemoveStatusChange(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200">
                        <option value={"All"}
                        >All (Actived & Removed)</option>
                        <option value={"N"}
                        >Active</option>
                        <option value={"Y"}
                        >Removed</option>
                    </select>
                </div>
                <div className="flex items-end">
                    <button
                        type="button"
                        className="w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-600"
                    >
                        View
                    </button>
                </div>

            </div>
        </div>
  )
}

export default Filters
