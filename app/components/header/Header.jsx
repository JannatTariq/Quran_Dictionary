import React from 'react';
import Image from "next/image"
import HeaderNav from './HeaderNav';
import Link from "next/link"


function Header() {
  return (
    <div className='shadow-md py-4 px-2'>
      <div className='container mx-auto flex justify-between items-center'>
          <Link href="/">
              <Image src="/images/logo.png" width={300} height={85} alt='Site logo' className='w-[150px] lg:w-[200px]' />
          </Link>
          <HeaderNav/>
      </div>
    </div>
  )
}

export default Header