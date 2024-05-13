import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MangeServiceCard = ({ service,services,setServices }) => {
  const { _id, image, name, price, description, providerImage, providerName } =
    service;

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:6003/addServices/${id}`,{
            method:"DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
              });
              const remaining = services.filter(service=>service._id!==id)
              setServices(remaining)
            }
          });
      }
    });
  };
  return (
    <div className=" flex flex-col justify-between p-6   h-full space-y-6 overflow-hidden  rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
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
          className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
        />
        <h2 className="mb-1 text-xl font-semibold">{name}</h2>
        <p className="text-sm dark:text-gray-600">{description}</p>
        <p>Price: {price}</p>
      </div>
      <div>
        <button
          onClick={() => handleDelete(_id)}
          className=" btn mr-10 w-1/3 btn-primary   p-3 font-semibold  rounded-md dark:bg-violet-600 dark:text-gray-50"
        >
          Delete
        </button>
        <Link>
          <button className=" btn  w-1/3 btn-primary   p-3 font-semibold  rounded-md dark:bg-violet-600 dark:text-gray-50">
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MangeServiceCard;
