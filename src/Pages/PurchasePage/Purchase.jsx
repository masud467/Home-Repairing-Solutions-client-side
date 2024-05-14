import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
// import Swal from "sweetalert2";


const Purchase = () => {
    const service = useLoaderData()
    const {_id,image,name,price,providerName,providerEmail} = service
    const {user} = useContext(AuthContext)
    const handlePurchaseService = async e =>{
        e.preventDefault()
        const form = e.target 
        const serviceId = form.id.value
        const name = form.name.value
        const price = form.price.value
        const serviceImage = form.image.value
        const providerEmail= form.providerEmail.value
        const providerName= form.providerName.value
        const userEmail= user?.email
        const userName= user?.displayName
        const date = form.date.value
        const instruction = form.instruction.value
        const status = "pending"
       
        
        // console.log(image,name,price,area,description,providerEmail,providerImage,providerName)

        const bookService = {serviceId,name,price,serviceImage,providerEmail,providerName,userEmail,userName,date,instruction,status}
          
        try {
            const {data} = await axios.post('http://localhost:6003/purchase',bookService)
            console.log(data)
            if(data.insertedId){
                        Swal.fire({
                            title: "Good job!",
                            text: "Service added successfully!",
                            icon: "success"
                          });
                    }
        }
        catch(err){
            console.log(err)
            console.log(err.message)
        }

        // fetch('http://localhost:6003/addServices',{
        //     method:"POST",
        //     headers:{
        //         "content-type":"application/json"
        //     },
        //     body:JSON.stringify(newService)
        // })
        // .then(res=>res.json())
        // .then(data=>{
        //     console.log(data)
        //     if(data.insertedId){
        //         Swal.fire({
        //             title: "Good job!",
        //             text: "Service added successfully!",
        //             icon: "success"
        //           });
        //     }
        // })
    }
    return (
        <div className="p-24 bg-[rgb(244,243,240)]">
           <Helmet>
                <title>Home Repairing Solutions|Purchase</title>
            </Helmet>
        <h1 className="text-center text-3xl font-bold"></h1>
      
            <form onSubmit={handlePurchaseService}>
                {/* Service Id and name row */}
              <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Service Id</span>
                  </label>
                  <input
                    type="text"
                    name="id"
                    defaultValue={_id}
                
                    className="input input-bordered w-full"
                    required
                    readOnly
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
                    readOnly
                  />
                </div>
              </div>
                {/* Service Price and Service image row */}
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
                    readOnly
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Service image</span>
                  </label>
                  <input
                    type="text"
                    name="image"
                    defaultValue={image}
                    placeholder="Service Area"
                    className="input input-bordered w-full"
                    required
                    readOnly
                  />
                </div>
              </div>
                {/* Service provider email & name */}
              <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Provider email</span>
                  </label>
                  <input
                    type="email"
                    name="providerEmail"
                    defaultValue={providerEmail}
                    placeholder="Description"
                    className="input input-bordered w-full"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Provider Name</span>
                  </label>
                  <input
                    type="text"
                    name="providerName"
                    defaultValue={providerName}
                    placeholder="Description"
                    className="input input-bordered w-full"
                    required
                    readOnly
                  />
                </div>
                
              </div>
              {/* Current User email & name */}
              <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">User email</span>
                  </label>
                  <input
                    type="email"
                    name="userEmail"
                    defaultValue={user?.email}
                    
                    className="input input-bordered w-full"
                    required
                    readOnly
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">User Name</span>
                  </label>
                  <input
                    type="text"
                    name="userName"
                    defaultValue={user?.displayName}
                    
                    className="input input-bordered w-full"
                    required
                    readOnly
                  />
                </div>
                
              </div>
              {/* Service Taking Date & Special instruction */}
              <div className="flex gap-4">
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Service Taking Date</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                   
                    
                    className="input input-bordered w-full"
                    required
                    
                  />
                </div>
                <div className="form-control md:w-1/2">
                  <label className="label">
                    <span className="label-text">Special instruction</span>
                  </label>
                  <input
                    type="text"
                    name="instruction"
                    placeholder="Your demand (like address , area, customized service plan)"
                    
                    
                    className="input input-bordered w-full"
                   
                    
                  />
                </div>
                
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Purchase Service</button>
              </div>
            </form>
          </div>
    );
};

export default Purchase;