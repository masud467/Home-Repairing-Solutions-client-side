import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);

  const [toDoServices, setToDoServices] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://home-repairing-solutions-for-server.vercel.app/serviceToDo/${user?.email}`
      )
      .then((res) => {
        console.log(res.data);
        setToDoServices(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user]);

  const handleStatusUpdate = async (id, newStatus) => {
    // if(status===newStatus) return

    try {
      console.log(id, newStatus);
      const { data } = await axios.patch(
        `https://home-repairing-solutions-for-server.vercel.app/serviceToDo/${id}`,
        { status: newStatus }
      );
      
      if (data.status === 200) {
        setToDoServices((prevServices) =>
          prevServices.map((service) =>
            service._id === id ? { ...service, status: newStatus } : service
          )
        );
      }
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };

   
  
  if (toDoServices.length === 0) {
    return <p className="text-center text-2xl font-bold">You have not provided any services yet.</p>;
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">
        Service To Do :{toDoServices.length}
      </h1>
      <Helmet>
        <title>Home Repairing Solutions|ToDoServices</title>
      </Helmet>
      <div className="grid lg:grid-cols-2 lg:gap-10">
        {toDoServices.map((service) => (
          <div
            key={service._id}
            className=" flex flex-col justify-between p-6   h-full space-y-6 overflow-hidden  rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800"
          >
            <div>
              <img
                src={service.serviceImage}
                alt=""
                className="object-cover w-full rounded-md mb-4 h-60 sm:h-96 dark:bg-gray-500"
              />
              <div className="lg:flex justify-around">
                <div>
                  <h2 className="mb-1 text-xl font-semibold">{service.name}</h2>
                  <p className="font-bold">Buyer Email: {service.userEmail}</p>
                  <p className=" font-bold">Price: {service.price}</p>
                  <p className=" font-bold">
                    Service Taking Date: {service.date}
                  </p>
                  <p className=" font-bold">
                    Special instruction: {service.instruction}
                  </p>
                  <p className=" font-bold">Status: {service.status}</p>
                </div>
                <div>
                  
                  <select
                  className="select-bordered select"
                    value={service.status}
                    onChange={(e) =>
                      handleStatusUpdate(service._id, e.target.value)
                    }
                  >
                    <option value="pending">Pending</option>
                    <option value="working">Working</option>
                    <option value="completed">Completed</option>
                  </select>

                  {/* <select onChange={(e) => handleStatusUpdate(service._id, e.target.value)} className="select select-bordered w-full max-w-xs">
                <option disabled selected>
                  {service.status}
                </option>
                <option>working</option>
                <option>completed</option>
              </select> */}
                </div>
              </div>
              {/* <p>Status: {service.status}</p> */}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;
