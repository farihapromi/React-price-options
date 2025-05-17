import React from 'react'

const Links = ({route}) => {
  return (
    <div>
        <li key={route.id} className='mr-4'>
                    <a href={route.path}>{route.name}</a>
                </li>
      
    </div>
  )
}

export default Links
