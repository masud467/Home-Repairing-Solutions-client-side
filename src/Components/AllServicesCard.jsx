import { Link } from "react-router-dom";


const AllServicesCard = ({service}) => {
    const {_id,image,name,price,description,providerImage,providerName,area} = service
    return (
        <div>
        <div className=" flex flex-col  justify-between p-6   h-full space-y-6 overflow-hidden  rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
          <div className="flex space-x-4">
            <img
              alt=""
              src={providerImage}
              className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
            />
            <div className="flex flex-col space-y-1">
              <p>{providerName}</p>
              {/* <a
                rel="noopener noreferrer"
                href="#"
                className="text-sm font-semibold"
              >
                Leroy Jenkins
              </a>
              <span className="text-xs dark:text-gray-600">4 hours ago</span> */}
            </div>
          </div>
          <div>
            <img
              src={image}
              alt=""
              className="object-cover w-full mb-4 h-60 sm:h-96 rounded-md dark:bg-gray-500"
            />
            <h2 className="mb-1 text-xl font-semibold">
             {name}
            </h2>
            <p className="text-sm dark:text-gray-600">
              {description}
            </p>
            <p>Price: {price}</p>
            <p>Area: {area}</p>
          </div>
          <div> 
          <Link to={`/viewDetails/${_id}`}><button   className=" btn btn-block btn-primary flex items-center justify-center  p-3 font-semibold  rounded-md dark:bg-violet-600 dark:text-gray-50">View Details</button></Link>
          </div>
         
        </div>
      </div>
    );
};

export default AllServicesCard;