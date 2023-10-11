import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const { signInUser, signInGoogle } = useContext(AuthContext);
    const location = useLocation();

    const navigate = useNavigate();

    const [isShow, setIsShow] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/");
            })
            .catch(error => {
            console.log(error);
        })
    }

    const googleLogin = () => {
        signInGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/");
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
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit= {handleLogin}>
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
                                    <input type={isShow?"password":"text"} name='password' placeholder="password" className="input input-bordered" />
                                    {   isShow?
                                        <span className='absolute right-1 top-14'><FaEye onClick={() => setIsShow(!isShow)}></FaEye></span>:

                                        <span className='absolute right-1 top-14'><FaEyeSlash onClick={() => setIsShow(!isShow)}></FaEyeSlash></span>
                                    }
                                    
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p>Not register? <Link to="/register" className="link-primary">Register</Link></p>
                            <p>or login with </p>
                            <button onClick={googleLogin} className='btn'>Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;