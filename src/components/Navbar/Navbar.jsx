import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log("signout successfull");
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/rs-kotiyan">RS খতিয়ান</Link></li>
                            
                            <li><Link to="/oyarisSonod">ওয়ারিশ সনদ</Link></li>

                            <li><Link to="/referenceDolil">Reference দলিল</Link></li>

                            <li><Link to="/mainDolil">Main দলিল</Link></li>
                            <li><NavLink to="/namjari">নামজারি</NavLink></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <Link to="/" className="btn btn-ghost normal-case text-xl">Land Document</Link>
                </div>

                <div className="navbar-end flex gap-10">

                    {
                        user ?
                            <>
                                {
                                    user && <span>{user.displayName}</span>
                                }

                                <div className="indicator">
                                    <button onClick={handleLogOut} className='btn '>Logout</button>
                                </div>
                            </>
                            :
                            <>
                                <div className="indicator">
                                    <Link to="/login"><button className='btn '>Login</button></Link>
                                </div>
                                <div className="indicator">
                                    <Link to="/register"><button className='btn '>Signup</button></Link>
                                </div>
                            </>
                    }
                    
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;