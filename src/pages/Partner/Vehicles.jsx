import React from 'react'
import VehiclesTable from '../../components/partner/equipment/VehiclesTable'
import { Link } from 'react-router-dom'

const Vehicles = () => {
  return (
    <div className="p-4">
      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-xl text-theme">Vehicles</h1>

          <Link to={'/partner/add-equipment'} className='px-4 py-2 bg-theme text-white rounded-sm'>Add Vehicles</Link>

        </div>
        <VehiclesTable />
      </div>
    </div>
  )
}
export default Vehicles 