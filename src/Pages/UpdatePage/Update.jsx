import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {

    const services = useLoaderData()
    const {_id,image,name,price,area,description} = services


    const handleUpdateService =e =>{
        e.preventDefault()
        const form = e.target 
        const image = form.image.value
        const name = form.name.value
        const price = form.price.value
        const area = form.area.value
        const description = form.description.value
        // const providerEmail= user.email
        // const providerName= user.displayName
        // const providerImage= user.photoURL
        form.reset()
        // console.log(image,name,price,area,description,providerEmail,providerImage,providerName)

        const updateService = {image,name,price,area,description}
        console.log(updateService)
        fetch(`http://localhost:6003/update/${_id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(updateService)
        })
        .then(res=> res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'product update successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })

    }
    return (
        <div className="p-24 bg-[rgb(244,243,240)]">
           <Helmet>
                <title>Home Repairing Solutions|Update</title>
            </Helmet>
        <h1 className="text-center text-3xl font-bold">Update Services</h1>
      
            <form onSubmit={handleUpdateService}>
                {/* Service image and name row */}
              <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Image URL</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                   
                    className="input input-bordered w-full"
                  
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Service Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={name}
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
                    defaultValue={price}
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
                    defaultValue={area}
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
                    defaultValue={description}
                    placeholder="Description"
                    className="input input-bordered w-full"
                    required
                  />
                </div>
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update Services</button>
              </div>
            </form>
          </div>
    );
};

export default Update;