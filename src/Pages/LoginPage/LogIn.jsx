import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const LogIn = () => {
    const {loginUser,loginWithGoogle,user,loading} = useContext(AuthContext)
    const location= useLocation()
    const navigate = useNavigate()
    const from = location?.state|| "/"
    useEffect(()=>{
      if(user){
        navigate('/')
      }
    },[navigate,user])
    const handleLogin =e=>{
       
        e.preventDefault()
        const form =e.target
       
        const email= form.email.value
        const password= form.password.value
        
        console.log(email,password)
        form.reset()
        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(from)
            Swal.fire({
                title: "Good job!",
                text: "Login successfully!",
                icon: "success"
              });
        })
        .catch(error=>{
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Invalid email or password. Please try again.",
                
              });
        })
    }

    const handleGoogle = ()=>{
        loginWithGoogle()
        .then(result=>{
            console.log(result.user)
            navigate(from)
        })
        .catch(error=>{
            console.error(error);
        })
    }
    if(user||loading) return
    return (
        <div>
           <Helmet>
                <title>Home Repairing Solutions|Login</title>
            </Helmet>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleLogin} className="card-body">
               
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
                
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                
                
              </form>
              <p className="text-center">Do not have an account? <Link className="text-blue-600 underline " to='/register'>Register</Link></p>
           
                   <div className="p-3 mt-3">
                   <button onClick={handleGoogle} className="btn btn-block btn-primary font-bold text-xl ">Google</button>
                   </div>
               
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;