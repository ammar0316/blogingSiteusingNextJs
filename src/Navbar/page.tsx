
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between bg-slate-700 text-white py-2 gap-x-2 px-5'>
        <div className='text-2xl text-red-800 font-medium'>
            Logo
        </div>
        <div className='flex gap-3'>
            <Link href="/" className='hover:text-blue-400 transition'>Home</Link>
            <Link href="/about" className='hover:text-blue-400 transition'>About</Link>
            <Link href="/contact" className='hover:text-blue-400 transition'>Contact</Link>
            <Link href="/service" className='hover:text-blue-400 transition'>Service</Link>
        </div>
        <div className='text-2xl text-blue-700 font-medium'>
            Dashbroad
        </div>
      
    </div>
  )
}

export default Navbar