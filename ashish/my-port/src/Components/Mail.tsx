import React from 'react'

const Mail = () => {
  return (
    <div className='flex items-center gap-5 fixed bottom-32 -right-40 rotate-90 '>
      <a href='mailto:ashishmaulekhi@12gmail.com'  className='text-navyS-200 text-lg hover:text-mintS-500 hover:translate-x-1 transition easy-in-out duration-300 '>
         ashishmaulekhi@12gmail.com
      </a>
      <hr  className='w-[200px] rounded-full'/>
    </div>
  )
}

export default Mail