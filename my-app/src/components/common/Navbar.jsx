import React from 'react'
import banner from '../../assets/logo.png'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../services/operations/authAPI';
import ProfileDrop from '../ProfileDrop';




const NavbarLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About",
        path: "/about"
    },
    {
        title: "Projects",
        path: "/project",
    },
    
    {
        title: "Contact",
        path: "/contact-us",
    },
];



function Navbar() {

    const {token} = useSelector((state)=>state.auth)
    console.log(token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
    <div className='flex flex-row items-center justify-evenly pt-2'>
        
        {/* logo */}
        <div className='w-[100px]'> 
            <img src={banner} className='w-[10px] h-[10px]' alt="" />
        </div>
        {/* Navlinks */}
        <div className='text-lg text-black flex gap-4'>
            {
                NavbarLinks.map((items,index)=>(
                    <ul key={index}>
                        <li>
                            <Link to={items.path}>
                                <p>{items.title}</p>
                            </Link>
                        </li>
                    </ul>
                ))
            }
        </div>

        {/* button */}
       { <div className='flex gap-4'>
            {
                token === null && (
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                )
            
            }
            {
                token === null && (
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                )
            }
            {
                token !== null &&(
                    <ProfileDrop/>
                    
                )
            }

        </div>}
    </div>
  )
}

export default Navbar