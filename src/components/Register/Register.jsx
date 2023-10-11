import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { Link } from 'react-router-dom';
const Register = () => {

    const { createUser, createWithGoogle } = useContext(AuthContext);


    const [isShow, setIsShow, ] = useState(false);
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name, email, password);
        
        createUser(email, password)
            .then(result => {
            console.log(result.user);
            })
            .catch(error => {
            console.log(error);
            })
    }

    const googleSignUp = () => {
        createWithGoogle()
            .then(result => {
            console.log(result.user);
            })
            .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className="hero">
                <div className="hero-content min-h-screen flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Register now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleRegister}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={isShow ? "password" : "text"} name='password' placeholder="password" className="input input-bordered" />
                                    {isShow ?
                                        <span className='absolute right-1 top-14'><FaEye onClick={() => setIsShow(!isShow)}></FaEye></span> :

                                        <span className='absolute right-1 top-14'><FaEyeSlash onClick={() => setIsShow(!isShow)}></FaEyeSlash></span>
                                    }

                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <p>Already a member? <Link to="/login" className='link-primary'>Login</Link></p>
                            <p>or signup with google</p>
                            <button onClick={googleSignUp} className='btn'>Google</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;