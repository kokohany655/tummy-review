"use client"
import React from 'react'
import { ImFacebook, ImInstagram , ImWhatsapp} from "react-icons/im";
import Link from 'next/link'
import Logo from '@/public/WhatsApp_Image_2024-01-28_at_6.13.28_PM-removebg-preview.png'
import Image from 'next/image';


const Header = () => {
  const commonClassName = 'rounded-full border-2 p-2 border-green-700 text-green-700';
  return (
    <div className='flex gap-4 font-body flex-col md:flex-row  justify-center  md:justify-between items-center py-4 w-full  '>
       <Image src={Logo} alt={'Logo'} className=' w-[50%]' />
        <div className='flex md:gap-6 gap-2'>
            <Link href={'https://www.facebook.com/tummytimelb/?paipv=0&eav=AfbSiJFAaS2dCmiJJ7bzcpI8Gg07Eeon6Mx2VaHfM6bQFHInMosVp2WJtM_K0QJXQMk&_rdr'} className={commonClassName}><ImFacebook/></Link>
            <Link href={'https://www.instagram.com/tummytimelb/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'} className={commonClassName}><ImInstagram/></Link>
            <Link href={'https://wa.me/96170126268'} className={commonClassName}><ImWhatsapp/></Link>
        </div>
    </div>
  )
}

export default Header