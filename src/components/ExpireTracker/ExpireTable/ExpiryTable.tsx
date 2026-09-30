import React from 'react'
import type {ExpiryItemModel} from '../../../types'
import {itemsDemoData} from '../../../helper/demoData'
import ExpiryTableRow from './ExpiryTableRow';

function ExpiryTable({items}) {
  //const items = itemsDemoData;
  return (
    <div className="mt-4 overflow-hidden rounded-xl bg-white shadow-sm">

            {/* Table Header */}
            <div className="flex items-center justify-between border-b px-4 py-3">
                <h2 className="text-lg font-semibold text-gray-800">
                    Expiry Details
                </h2>

                <button
                    type="button"
                    className="rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
                >
                    Excel Export
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">

                <table className="min-w-[1800px] w-full text-left text-sm">

                    <thead className="bg-slate-900 text-xs uppercase text-white">
                        <tr>

                            <th className="px-3 py-3">
                                Shelf Control
                            </th>

                            <th className="px-3 py-3">
                                LOC_CODE
                            </th>

                            <th className="px-3 py-3">
                                LOCATION
                            </th>

                            <th className="px-3 py-3">
                                DOC_NO
                            </th>

                            <th className="px-3 py-3">
                                BARCODE
                            </th>

                            <th className="px-3 py-3">
                                GOLD_CODE
                            </th>

                            <th className="px-3 py-3">
                                GOLD_SU
                            </th>

                            <th className="min-w-[220px] px-3 py-3">
                                SU_DESCRIPTION
                            </th>

                            <th className="px-3 py-3">
                                PHY_STOCK
                            </th>

                            <th className="px-3 py-3">
                                SHELF_NO
                            </th>

                            <th className="px-3 py-3">
                                CRE_BY
                            </th>

                            <th className="px-3 py-3">
                                CRE_TIME
                            </th>

                            <th className="px-3 py-3">
                                GRN_DATE
                            </th>

                            <th className="px-3 py-3">
                                EXP_DATE
                            </th>

                            <th className="px-3 py-3">
                                EXP_DAYS
                            </th>

                            <th className="px-3 py-3">
                                SOLD_QTY
                            </th>

                            <th className="px-3 py-3">
                                RISK_QTY
                            </th>

                            <th className="px-3 py-3">
                                STATUS
                            </th>

                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">

                        {items.map((item) => (
                            <ExpiryTableRow
                                key={`${item.locCode}-${item.docNo}`}
                                item={item}
                            />
                        ))}

                    </tbody>

                </table>

            </div>
        </div>
  )
}

export default ExpiryTable
