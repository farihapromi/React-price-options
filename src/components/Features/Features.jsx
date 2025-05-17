import React from 'react'
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Features = ({feature}) => {
  return (
    <div>
        <p className='flex p-2 items-center'> <IoIosCheckmarkCircleOutline className='text-green-600 mr-2'/>{feature}</p>
      
    </div>
  )
}

export default Features

