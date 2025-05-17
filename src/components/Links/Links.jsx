import React from 'react'

const Links = ({route}) => {
  return (
    
        <li key={route.id} className='mr-10 px-6 hover:bg-blue-600'>
                    <a href={route.path}>{route.name}</a>
                </li>
      
   
  )
}

export default Links
