import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import axios from "axios";
import MangeServiceCard from "../../Components/MangeServiceCard";
// import { Link } from "react-router-dom";


const ManageService = () => {
    const {user} =useContext(AuthContext)
    const [services,setServices] = useState([])
    console.log("user info",user.email)
    console.log("Service details",services)

    

    useEffect(()=>{
        axios.get(`http://localhost:6003/manageService/${user.email}`)
        .then(res=>{
            setServices(res.data)
            console.log('res',res)
        })
        .catch(error=>{
            console.log(error)
            console.log('hi,I am error',error.message)
        })
    },[user])

    


    return (
        <div className="grid grid-cols-2 gap-10">
           
            
        {
            services.map(service=> <MangeServiceCard key={service._id} service={service} services={services} setServices={setServices}></MangeServiceCard>)
        }
      </div>
    );
};

export default ManageService;