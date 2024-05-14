import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "../../Components/PopularServiceCard";


const PopularServices = () => {
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

    // {services?.slice(0,6).length}{" "}
    return (
        <div>
            <p className="text-center text-3xl font-bold mb-10">Our Popular Services</p>
           <div className="grid grid-cols-2 gap-10">
           {services&&
            services.slice(0,6).map(service=> <PopularServiceCard key={service._id} service={service}></PopularServiceCard>)
           }
           </div>
        </div>
    );
};

export default PopularServices;