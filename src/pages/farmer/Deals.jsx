import React from 'react'
import DealsTable from '../../components/farmer/utils/DealsTable'
import { FarmerData } from '../../language-data/FarmerData'
import { useSelector } from 'react-redux';

const Deals = () => {
  const lang = useSelector((state) => state.lang.lang);
  return (
    <div className='px-10 my-10'>

<h1 className="text-3xl font-semibold text-center mb-10">
{FarmerData[lang].your} <span className="text-theme3">{FarmerData[lang].deal}</span>
      </h1>


<DealsTable />
    </div>
  )
}

export default Deals