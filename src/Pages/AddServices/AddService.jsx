import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const AddService = () => {
    const {user} = useContext(AuthContext)
    const handleAddService =e =>{
        e.preventDefault()
        const form = e.target 
        const image = form.image.value
        const name = form.name.value
        const price = form.price.value
        const area = form.area.value
        const description = form.description.value
        const providerEmail= user.email
        const providerName= user.displayName
        const providerImage= user.photoURL
        form.reset()
        // console.log(image,name,price,area,description,providerEmail,providerImage,providerName)

        const newService = {image,name,price,area,description,providerEmail,providerImage,providerName}
        // console.log(newService)

        fetch('https://home-repairing-solutions-for-server.vercel.app/addServices',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(newService)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Service added successfully!",
                    icon: "success"
                  });
            }
        })
    }


  return (
    <div className="p-24 bg-[rgb(244,243,240)]">
      <Helmet>
        <title>Home Repairing Solutions|AddServices</title>
      </Helmet>
        <h1 className="text-center text-3xl font-bold">Add new Services</h1>
      
            <form onSubmit={handleAddService}>
                {/* Service image and name row */}
              <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="Image URL"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Service name"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
                {/* Service Price and Service Area row */}
              <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="text"
                    name="price"
                    placeholder="price"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Service Area</span>
                  </label>
                  <input
                    type="text"
                    name="area"
                    placeholder="Service Area"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
              </div>
                {/* Service Description */}
              <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Service Description</span>
                  </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Description"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Add Services</button>
              </div>
            </form>
          </div>
        
  );
};

export default AddService;
