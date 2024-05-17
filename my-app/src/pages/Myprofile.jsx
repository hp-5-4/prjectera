import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Myprofile() {
    const { user } = useSelector((state) => state.auth);
    const projects = [user.projects];
    
    

    return (
        <div className="mx-auto flex justify-center items-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    <img className="w-32 h-32 rounded-full mx-auto" src={user.image} alt={user.firstName} />
                </div>
                <div className="mb-4">
                    <h1 className="text-3xl font-bold mb-2"> Name: {user.firstName} {user.lastName}</h1>
                    <p className="text-gray-600 text-sm"> Email: {user.email}</p>
                </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                <Link to="/dashboard/create-project">Create new project</Link>
            </button>
            </div>
        </div>
    );
}

export default Myprofile;
