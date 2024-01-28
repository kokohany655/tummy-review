import React from 'react'
import Header from './Header'
import Image from 'next/image'
import background from '@/public/back.jpeg'
import Footer from './Footer'

const Layout = ({children }:{children:JSX.Element | JSX.Element[] | React.ReactNode}) => {
  return (
    <div className=" flex flex-col items-start justify-start  min-h-full md:px-0  mx-auto">
<Image src={background} alt={''} className=' fixed w-full h-full -z-10  '
/>
      <Header />
      <main className="relative mt-[30px] w-full   p-0 m-auto container px-2 pb-8 ">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout