// import React, { useState } from 'react'

// import { useForm } from 'react-hook-form'

// import { setSignupData } from '../../slices/authSlice';

// import { sendOtp } from '../../services/operations/authAPI';

// import { useNavigate } from 'react-router-dom';

// import { useSelector } from 'react-redux';

// import { useDispatch } from 'react-redux';

// function SignupForm() {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const {register,handleSubmit,reset,formState:{errors,isSubmitSuccessful}} = useForm();

//       const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })

//     const { firstName, lastName, email, password, confirmPassword } = formData

//     const submitSignupForm = async(e)=>{


//         if(password!==confirmPassword){
//             console.log("password not match")
//             return
//         }
//         const signupData={
//             ...formData
//         }

//         dispatch(setSignupData(signupData))

//         dispatch(sendOtp(formData.email,navigate))

//     //    setFormData({
//     //   firstName: "",
//     //   lastName: "",
//     //   email: "",
//     //   password: "",
//     //   confirmPassword: "",
//     // })
//     }


//   return (
//     <form onSubmit={handleSubmit(submitSignupForm)}>
//         <div className='flex flex-col gap-6 '>
//             <div className='flex  gap-4 items-center '>
//                 <label htmlFor="firstname">FirstName</label>
//                 <input className='bg-black text-white p-2 rounded-xl' type="text" id='firstname' name='firstname' value={firstName} placeholder='Enter Your First Name' {...register("firstname" ,{require:true})} />
//                 {
//                     errors.firstname && (
//                         <span>Enter your first name</span>
//                     )
//                 }
//             </div>

//             <div className='flex  gap-4 items-center '>
//                 <label htmlFor="lastname">LastName</label>
//                 <input className='bg-black text-white p-2 rounded-xl' type="text" value={lastName} id='lastname' name='lastname' placeholder='Enter Your First Name' {...register("lastname")} />
//             </div>

//             <div className='flex  gap-4 items-center '>
//                 <label htmlFor="email">Email</label>
//                 <input className='bg-black text-white p-2 rounded-xl' type="email" value={email} id='email' name='email' placeholder='Enter Your Email' {...register("email" ,{require:true})} />
//                 {
//                     errors.email && (
//                         <span>Enter your email</span>
//                     )
//                 }
//             </div>

//             <div className='flex  gap-4 items-center '>
//                 <label htmlFor="password">Password</label>
//                 <input className='bg-black text-white p-2 rounded-xl' value={password} type="password" id='password' name='password' placeholder='Enter Your Password' {...register("password" ,{require:true})} />
//                 {
//                     errors.password && (
//                         <span>Enter your Password</span>
//                     )
//                 }
//             </div>

//             <div className='flex  gap-4 items-center '>
//                 <label htmlFor="confirmPassword">ConfirmPassword</label>
//                 <input className='bg-black text-white p-2 rounded-xl' type="confirmPassword" value={confirmPassword} id='confirmPassword' name='confirmPassword' placeholder='Enter ConfirmPassword' {...register("confirmPassword" ,{require:true})} />
//                 {
//                     errors.confirmPassword && (
//                         <span>Enter your password</span>
//                     )
//                 }
//             </div>

//         </div>
//         <button type='submit'>
//                 Create Account
//         </button>
//     </form>
//   )
// }

// export default SignupForm


import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { sendOtp } from "../../services/operations/authAPI"
import { setSignupData } from "../../slices/authSlice"



function SignupForm() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // student or instructor


  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const { firstName, lastName, email, password, confirmPassword } = formData

  // Handle input fields, when some value changes
  const handleOnChange = (e:any) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }))
  }

  // Handle Form Submission
  const handleOnSubmit = (e:any) => {
    e.preventDefault()

    if (password !== confirmPassword) {

      return
    }
    const signupData = {
      ...formData,

    }

    // Setting signup data to state
    // To be used after otp verification
    dispatch(setSignupData(signupData))
    // Send OTP to user for verification
    dispatch(sendOtp(formData.email, navigate))

    // Reset
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    })

  }

  // data to pass to Tab component

  return (
    <div>


      {/* Form */}
      <form onSubmit={handleOnSubmit} className="flex w-full flex-col gap-y-4">
        <div className="flex  gap-x-4">
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              First Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleOnChange}
              placeholder="Enter first name"

              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border "
            />
          </label>
          <label>
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Last Name <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleOnChange}
              placeholder="Enter last name"

              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border "
            />
          </label>
        </div>
        <label className="w-full">
          <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
            Email Address <sup className="text-pink-200">*</sup>
          </p>
          <input
            required
            type="text"
            name="email"
            value={email}
            onChange={handleOnChange}
            placeholder="Enter email address"

            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5 border "
          />
        </label>
        <div className="flex gap-x-4">
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Create Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              value={password}
              onChange={handleOnChange}
              placeholder="Enter Password"

              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5 border "
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
          <label className="relative">
            <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
              Confirm Password <sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleOnChange}
              placeholder="Confirm Password"

              className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5 border"
            />
            <span
              onClick={() => setShowConfirmPassword((prev) => !prev)}
              className="absolute right-3 top-[38px] z-[10] cursor-pointer"
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
              )}
            </span>
          </label>
        </div>
        <button
          type="submit"
          className="mt-6 rounded-[8px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-[8px] px-[12px] font-medium text-richblack-900"
        >
          Create Account
        </button>
      </form>
    </div>
  )
}

export default SignupForm