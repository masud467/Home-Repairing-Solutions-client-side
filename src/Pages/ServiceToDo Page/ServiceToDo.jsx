import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";


const ServiceToDo = () => {
    const {user} = useContext(AuthContext)

    const [toDoServices,setToDoServices] = useState([])

    useEffect(()=>{
        axios.get(`https://home-repairing-solutions-for-server.vercel.app/serviceToDo/${user?.email}`)
        .then(res=>{
            console.log(res.data)
            setToDoServices(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[user])
    

    return (
        <div>
            <h1 className="text-2xl font-bold text-center">Service To Do :{toDoServices.length}</h1>
            <Helmet>
            <title>Home Repairing Solutions|ToDoServices</title>
            </Helmet>
            <div className="grid grid-cols-2 gap-10">
            {
                toDoServices.map(service=> <div key={service._id} className=" flex flex-col justify-between p-6   h-full space-y-6 overflow-hidden  rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                
                <div>
                  <img
                    src={service.serviceImage}
                    alt=""
                    className="object-cover w-full rounded-md mb-4 h-60 sm:h-96 dark:bg-gray-500"
                  />
                  <h2 className="mb-1 text-xl font-semibold">{service.name}</h2>
                  <p className="font-bold">Buyer Email: {service.userEmail}</p>
                  <p className=" font-bold">Price: {service.price}</p>
                  <p className=" font-bold">Service Taking Date: {service.date}</p>
                  <p className=" font-bold">Special instruction: {service.instruction}</p>
                  <p>Status: {service.status}</p>
                </div>
                {/* <div>
                  <button
                    onClick={() => handleDelete(_id)}
                    className=" btn mr-10 w-1/3 btn-primary   p-3 font-semibold  rounded-md dark:bg-violet-600 dark:text-gray-50"
                  >
                    Delete
                  </button>
                  <Link to={`/update/${_id}`}>
                    <button className=" btn  w-1/3 btn-primary   p-3 font-semibold  rounded-md dark:bg-violet-600 dark:text-gray-50">
                      Edit
                    </button>
                  </Link>
                </div> */}
              </div>)
            }
            </div>
        </div>
    );
};

export default ServiceToDo;