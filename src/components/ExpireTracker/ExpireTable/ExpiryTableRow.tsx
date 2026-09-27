import React from 'react'
import type { ExpiryItemModel } from '../../../types';

interface ExpiryTableRowProps {
    item: ExpiryItemModel;
}

function ExpiryTableRow({ item }: ExpiryTableRowProps) {
      const getRowClass = () => {

        if (item.status === "EXPIRED") {
            return "bg-red-50";
        }

        if (item.status === "EXPIRY RISK") {
            return "bg-yellow-50";
        }

        return "bg-white";
    };
    return (
        <tr
            className={`${getRowClass()} transition hover:bg-gray-50`}
        >
            <td className="whitespace-nowrap px-3 py-3">
                <button
                    type="button"
                    className="rounded-md bg-red-500 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-600"
                >
                    Remove
                </button>
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.locCode}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.location}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.docNo}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.barcode}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.goldCode}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.goldSu}
            </td>

            <td className="max-w-[250px] px-3 py-3">
                {item.suDescription}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.phyStock}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.shelfNo}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.creBy}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.creTime}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.grnDate}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.expDate}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.expDays}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.soldQty}
            </td>

            <td className="whitespace-nowrap px-3 py-3">
                {item.riskQty}
            </td>

            <td className="whitespace-nowrap px-3 py-3 font-semibold">
                {item.status}
            </td>

        </tr>
    )
}

export default ExpiryTableRow
