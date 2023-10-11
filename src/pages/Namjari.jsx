import React from 'react';
import { Link } from 'react-router-dom';

const Namjari = () => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <Link to="https://drive.google.com/file/d/1IjI43leJLTBkPtL4LBVDGFHyeCfzQolX/view" className="btn btn-primary">Download</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Namjari;