import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import MangeServiceCard from "../../Components/MangeServiceCard";
import { Helmet } from "react-helmet-async";
// import { Link } from "react-router-dom";


const ManageService = () => {
    const {user} =useContext(AuthContext)
    const [services,setServices] = useState([])
    // console.log("user info",user.email)
    // console.log("Service details",services)

    

    useEffect(()=>{
        axios.get(`https://home-repairing-solutions-for-server.vercel.app/manageService/${user.email}`)
        .then(res=>{
            setServices(res.data)
            // console.log('res',res)
        })
        .catch(error=>{
            console.log(error)
            console.log('hi,I am error',error.message)
        })
    },[user])

    


    return (
        <div className="grid lg:grid-cols-2 gap-10">
             <Helmet>
                <title>Home Repairing Solutions|ManageServices</title>
            </Helmet>
           
            
        {
            services.map(service=> <MangeServiceCard key={service._id} service={service} services={services} setServices={setServices}></MangeServiceCard>)
        }
      </div>
    );
};

export default ManageService;