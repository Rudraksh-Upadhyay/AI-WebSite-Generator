import { Button } from '@/components/ui/button'
import { SignInButton } from '@clerk/nextjs'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const menuOptions = [
    {
        name:'Pricing',
        path:'/pricing'
    },
    {
        name:'Contact Us',
        route:'/contact-us'
    }
]

function Header() {
  return (
    <div className='flex items-center justify-between p-4 shadow-2xl'>
        {/* logo */}
        <div className='flex gap-2 items-center'>

            <Image
            className="mx-5 my-5"
            src={"/logo.svg"} alt='logo' width={35} height={35} />
            
            <h1 className='font-bold text-3xl'>AI Website Generator</h1>
        </div>

      {/* menu options */}

        <div className='flex gap-5'>
            {menuOptions.map((menu, index) => (
                <Button variant={'ghost'} key={index}>{menu.name}</Button>
            ))}
        </div>


      {/* get started button */}

        <div className='mr-10'>
          <SignInButton mode='modal' forceRedirectUrl={'/workspace '}>

            <Button>Get Started <ArrowRight/></Button>
          </SignInButton>
        </div>


    </div>
  )
}

export default Header
