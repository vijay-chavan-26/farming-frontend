import React from 'react'
import EquipmentsTable from '../../components/partner/equipment/EquipmentsTable'
import { Link } from 'react-router-dom'

const Equipments = () => {
  return (
    <div className="p-4">
      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-xl text-theme">Equipments</h1>

          <Link to={'/partner/add-equipment'} className='px-4 py-2 bg-theme text-white rounded-sm'>Add Equipment</Link>

        </div>
        <EquipmentsTable />
      </div>
    </div>
  )
}
export default Equipments