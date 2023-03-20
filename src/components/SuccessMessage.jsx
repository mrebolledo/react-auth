import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
const SuccessMessage = (props) => {
  return (
    <div className="flex w-full bg-teal-500 p-2 mb-4 rounded-md text-white">
        <FaCheckCircle size={25} className="mr-4"/>
        {props.message}
    </div>
  )
}

export default SuccessMessage