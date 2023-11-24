import React, { useEffect, useState } from 'react'
import { get_request } from '../../components/utils/ApiRequests';
import API_URL from '../../components/utils/ApiRequests';
import { message } from 'antd';
import { Link } from 'react-router-dom';

const Vehicle = () => {
    const [data, setData] = useState([])

    const fetchData = async() =>{
        try {
            const res = await get_request(`${API_URL}/partner/get-equipments/all`);
            console.log(res)
            if(res){
                setData(res)
                return
            } else {
              message.error("Something went wrong!");
              return;
            }
          } catch (error) {
            console.log(error);
            message.error("Something went wrong!");
            return;
          }
    }

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div>
      <div>
        <h1>Book vehicles for your farming work</h1>
      </div>

      <div>
      {/* {data.map((item,index)=>
      
      <Link to={'/farmer/vehicle'} className="flex flex-col items-center text-center gap-y-5 cursor-pointer p-4 rounded-md shadow-md bg-theme text-white">
      <img src={item.imageUrl} alt={item.name} />
          <h1 className="text-xl font-semibold">{item.className}</h1>
          <p className="text-sm">
           {item.desc}
          </p>
          <Link to={'/farmer/book-slot'} className="bg-theme2 text-black px-4 py-2 rounded-sm">Book Now</Link>
        </Link>
      )} */}
      </div>
    </div>
  )
}

export default Vehicle