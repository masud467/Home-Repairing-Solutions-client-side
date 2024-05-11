const AddService = () => {
  return (
    <div className="p-24 bg-[rgb(244,243,240)]">
        <h1 className="text-center text-3xl font-bold">Add new Services</h1>
      
            <form className="">
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
