import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../Components/Providers/AuthProvider';

const SignIn = () => {
  const {logInUser}=useContext(authContext);
    const handleLogIn=e=>{
        e.preventDefault();
        const form=new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        console.log(email,password);
      logInUser(email,password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage);
      });
    }
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="hero">
 
    
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl border my-20">
      <h1 className="text-3xl my-2 font-bold text-center">Login now!</h1>

      <form onSubmit={handleLogIn} className="card-body">
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <div>
        <p className='text-center mb-4'>Do not have an Account <Link className="font-bold text-red-300" to='/Register'>Register</Link></p>
      </div>
    </div>
  </div>
</div>
            </div>
    );
};

export default SignIn;