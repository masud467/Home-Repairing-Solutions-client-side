import axios from "axios";
import { useEffect, useState } from "react";
import PopularServiceCard from "../../Components/PopularServiceCard";
import { Link } from "react-router-dom";


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
           <Link to='/allServices' className="flex items-center justify-center pt-5" ><button className="btn btn-primary w-1/6 text-xl font-bold  ">View All</button></Link>
        </div>
    );
};

export default PopularServices;