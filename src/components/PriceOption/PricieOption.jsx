import React from 'react'
import Features from '../Features/Features'

const PricieOption = ({option}) => {
    const {id,name,price,duration,features}=option
  return (
    <div className='bg-blue-400 p-6 border rounded-lg mt-4 text-white flex flex-col'>
        <h2>
            <span className='text-5xl'>{price}</span>
            <span className='text-2xl'>{duration}</span>
        </h2>
        <h4 className='text-3xl my-8'>{name}</h4>
        <div className="pl-6 flex-grow">
            {
          features.map((feature,idx)=><Features key={idx} feature={feature}/>)
        }

        </div>
        <button className='bg-green-600 mt-12 w-full py-2 rounded-lg font-bold' >Buy Now </button>
      
      
    </div>
  )
}

export default PricieOption
