import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col gap-4 absolute w-full h-full'>
        {children}
    </div>
  )
}

export default Layout