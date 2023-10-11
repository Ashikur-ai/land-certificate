import React from 'react';
import { Link } from 'react-router-dom';

const OyarisSonod = () => {
    return (
        <div>
            <div className='px-40 mx-auto mt-40'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/0cjNX0R/379636988-639211334868705-5731646075459789908-n.jpg" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">ওয়ারিশ সনদ</h2>
                        
                        <div className="card-actions justify-end">
                            <Link to="https://i.ibb.co/0cjNX0R/379636988-639211334868705-5731646075459789908-n.jpg" className="btn btn-primary">Download</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://i.ibb.co/0cjNX0R/379636988-639211334868705-5731646075459789908-n.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OyarisSonod;