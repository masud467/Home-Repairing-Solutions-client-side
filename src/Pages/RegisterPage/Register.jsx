import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
    const {createUser,user,loading} =useContext(AuthContext)
    const location= useLocation()
    const navigate = useNavigate()
    const from = location?.state|| "/"
    useEffect(()=>{
      if(user){
        navigate('/')
      }
    },[navigate,user])
    const handleRegister =e=>{
        
        e.preventDefault()
        const form =e.target
        const name = form.name.value
        const email= form.email.value
        const password= form.password.value
        const photo= form.photo.value
        console.log(name,email,password,photo)
        form.reset()
        createUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(from)
            Swal.fire({
                title: "Good job!",
                text: "Register successfully!",
                icon: "success"
              });
        })
        .catch(error=>{
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "This email is already used!",
                
              });
        })
    }
    if(user||loading) return
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
             
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="photo url"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <p>Already have an account? <Link className="text-blue-600 underline" to='/login'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
