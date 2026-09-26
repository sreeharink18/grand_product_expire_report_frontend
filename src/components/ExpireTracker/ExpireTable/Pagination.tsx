import React from 'react'
import type { PaginationPropsModel } from '../../../types'

function Pagination({currentPage,totalPages,totalRecords,pageSize,onPageChange,}: PaginationPropsModel) {
    if (totalRecords === 0) {
        return null;
    }
    const startRecord =(currentPage - 1) * pageSize + 1;
    const endRecord =Math.min(currentPage * pageSize,totalRecords);

    return (
        <div className="flex flex-col gap-3 border-t bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">

            {/* Record information */}
            <div className="text-sm text-gray-600">
                Showing{" "}
                <span className="font-semibold">
                    {startRecord}
                </span>
                {" "}to{" "}
                <span className="font-semibold">
                    {endRecord}
                </span>
                {" "}of{" "}
                <span className="font-semibold">
                    {totalRecords}
                </span>
                {" "}entries
            </div>

            {/* Pagination buttons */}
            <div className="flex items-center gap-1">

                {/* Previous */}
                <button
                    type="button"
                    disabled={currentPage === 1}
                    onClick={() => onPageChange(currentPage - 1)}
                    className="rounded-md border px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100"
                >
                    Previous
                </button>

                {/* Current page */}
                <button
                    type="button"
                    className="rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white"
                >
                    {currentPage}
                </button>

                {/* Next */}
                <button
                    type="button"
                    disabled={currentPage === totalPages}
                    onClick={() => onPageChange(currentPage + 1)}
                    className="rounded-md border px-3 py-1.5 text-sm disabled:cursor-not-allowed disabled:opacity-40 hover:bg-gray-100"
                >
                    Next
                </button>

            </div>

        </div>

    )
}

export default Pagination
