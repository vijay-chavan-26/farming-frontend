import React from 'react'
import DealRequestTable from '../../components/partner/deal-requests/DealRequestTable'

const DealRequest = () => {
  return (
    <div className="p-4">
      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-xl text-theme">Deal Request</h1>

        </div>
        <DealRequestTable />
      </div>
    </div>
  )
}

export default DealRequest