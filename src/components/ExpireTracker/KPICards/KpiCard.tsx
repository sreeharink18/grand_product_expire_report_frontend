import React from 'react'
import type{ KpiCardPropsModel } from '../../../types'

const KpiCard = ({title,value,type,}: KpiCardPropsModel) => {
     const styles = {
        total: {
            background: "bg-blue-600",
        },
        expired: {
            background: "bg-red-600",
        },
        warning: {
            background: "bg-amber-500",
        },
        safe: {
            background: "bg-emerald-600",
        },
    };
    return (
        <div className={`${styles[type].background} rounded-xl p-5 text-white shadow-sm`}>
            <div className="text-3xl font-bold">
                {value}
            </div>

            <div className="mt-1 text-sm font-medium">
                {title}
            </div>
        </div>
    )
}

export default KpiCard
