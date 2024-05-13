import axios from "axios";
import { useEffect, useState } from "react";
import AllServicesCard from "../../Components/AllServicesCard";


const AllServices = () => {

    const [services,setServices]= useState()

    useEffect(()=>{
        axios.get('http://localhost:6003/addServices')
        .then(res=>{
            setServices(res.data)
        })
        .catch(error=>{
            console.error(error);
        })
    },[])
    return (
        <div>
            <p className="text-center text-3xl font-bold mb-10">Our Services:</p>
           <div className="grid grid-cols-2 gap-10">
           {services&&
            services.map(service=> <AllServicesCard key={service._id} service={service}></AllServicesCard>)
           }
           </div>
        </div>
    );
};

export default AllServices;