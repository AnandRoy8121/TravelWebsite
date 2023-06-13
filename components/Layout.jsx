import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col gap-4 absolute w-full h-full overflow-x-hidden'>
        {children}
    </div>
  )
}

export default Layout