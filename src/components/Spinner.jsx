import React from 'react';
import { FaSpinner } from "react-icons/fa6";
const Spinner = () => {
  return (
    <div className='h-96 flex flex-col justify-center items-center '>
      <FaSpinner className='animate-spin text-blue-500' size={50}/>
      <p className='text-center font-semibold text-lg' >Please Wait...</p>
    </div>
  )
}

export default Spinner