import React, { useEffect, useState } from 'react'
import type { PaginationPropsModel } from '../../../types'

interface PageCountButtonModel{
    pageNo : number | string
}

function Pagination({currentPage,totalPages,totalRecords,pageSize,onPageChange,}: PaginationPropsModel) {
    if (totalRecords === 0) {
        return null;
    }
    const startRecord =(currentPage - 1) * pageSize + 1;
    const endRecord =Math.min(currentPage * pageSize,totalRecords);
    const [countPagination, setCountPagination] = useState<PageCountButtonModel[]>([]);
    const onPaginationCountButton = ()=>{
        const pages: PageCountButtonModel[] = [];

        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push({ pageNo: i });
            }

            setCountPagination(pages);
            return;
        }
        if (currentPage <= 4) {
            for (let i = 1; i <= 5; i++) {
                pages.push({ pageNo: i });
            }

            pages.push({ pageNo: "..." });
            pages.push({ pageNo: totalPages });
        }
        else if (currentPage >= totalPages - 3) {
            pages.push({ pageNo: 1 });
            pages.push({ pageNo: "..." });

            for (let i = totalPages - 4; i <= totalPages; i++) {
                pages.push({ pageNo: i });
            }
        }
        else{
            pages.push({pageNo:1})
            pages.push({pageNo:"..."})

            pages.push({pageNo:currentPage -1})
            pages.push({pageNo:currentPage})
            pages.push({pageNo:currentPage + 1})

            pages.push({pageNo:"..."})
            pages.push({pageNo:totalPages})

        }

        setCountPagination(pages);
    }
    useEffect(()=>{
        onPaginationCountButton()
    },[currentPage,totalPages])

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
                {
                    countPagination.map((page)=>(
                        <button
                            disabled={page.pageNo === "..."}
                            onClick={() => onPageChange(page.pageNo)}
                            type="button"
                            className={`rounded-md px-3 py-1.5 text-sm font-semibold ${page.pageNo === "..."
                                    ? "cursor-default bg-transparent text-gray-500"
                                    : page.pageNo === currentPage
                                        ? "bg-blue-600 text-white"
                                        : "bg-gray-400 text-white hover:bg-gray-500"
                                }`}
                        >
                            {page.pageNo}
                        </button>
                    ))
                }
                

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
