import React from 'react'
import KpiCard from './KpiCard';

function KpiMainCards() {
      const kpi = {
        total: 3217,
        expired: 2502,
        warning: 715,
        safe: 0,
    };
  return (
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

            <KpiCard
                title="Total Items"
                value={kpi.total}
                type="total"
            />

            <KpiCard
                title="Expired"
                value={kpi.expired}
                type="expired"
            />

            <KpiCard
                title="Near Expiry"
                value={kpi.warning}
                type="warning"
            />

            <KpiCard
                title="Safe Stock"
                value={kpi.safe}
                type="safe"
            />

        </div>
  )
}

export default KpiMainCards
