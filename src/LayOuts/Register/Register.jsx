import React, { useContext } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import { authContext } from '../../Components/Providers/AuthProvider';
const Register = () => {
    const {createUser}=useContext(authContext);
    const location=useLocation();
    const from = location.state?.from || '/';
    console.log(location);
    const navigation=useNavigate();
    const HandleRegister=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const name=form.get('name');
        const photo=form.get('Photo');
        const email=form.get('email');
        const password=form.get('password');
        console.log(photo,name,email,password);

    //Create user
      createUser(email,password)
      .then(result=>{
        console.log(result.user);
        e.target.reset();
        navigation(location?.state?location.state:'/');
      })
      .catch(error=>{
        console.log(error)
      })
    
    }
    
    return (
        <div>
            <Navbar></Navbar>
             <div className="hero">
 
    
 <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border my-20">
   <h1 className="text-3xl my-2 font-bold text-center">Register now!</h1>

   <form onSubmit={HandleRegister} className="card-body">
   <div className="form-control">
       <label className="label">
         <span className="label-text">Your Name</span>
       </label>
       <input type="text" placeholder="Your Name" name='Name' className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Photo URL</span>
       </label>
       <input type="text" placeholder="Photo URL" name='Photo' className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Email</span>
       </label>
       <input type="email" placeholder="email" name='email' className="input input-bordered" required />
     </div>
     <div className="form-control">
       <label className="label">
         <span className="label-text">Password</span>
       </label>
       <input type="password" placeholder="password" name='password' className="input input-bordered" required />
       <label className="label">
         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
       </label>
     </div>
     <div className="form-control mt-6">
       <button className="btn btn-primary">Registration</button>
     </div>
   </form>
   <div>
     <p className='text-center mb-4'>Already have an Account /<Link className="font-bold text-red-300" to='/SignIn'> Log In</Link></p>
   </div>
 </div>
</div>
        </div>
    );
};

export default Register;