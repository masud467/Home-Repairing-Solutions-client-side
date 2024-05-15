import axios from "axios";
import { useEffect, useState } from "react";
import AllServicesCard from "../../Components/AllServicesCard";
import { Helmet } from "react-helmet-async";


const AllServices = () => {

    const [services,setServices]= useState()

    useEffect(()=>{
        axios.get('https://home-repairing-solutions-for-server.vercel.app/addServices')
        .then(res=>{
            setServices(res.data)
        })
        .catch(error=>{
            console.error(error);
        })
    },[])
    return (
        <div>
            <Helmet>
                <title>Home Repairing Solutions|AllServices</title>
            </Helmet>
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