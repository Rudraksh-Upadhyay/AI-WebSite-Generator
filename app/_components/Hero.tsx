"use client"
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { SignInButton } from '@clerk/nextjs'
import { ArrowUp, HomeIcon, ImagePlusIcon, Key, LayoutDashboard, User } from 'lucide-react'
import React, { useState } from 'react'

const suggestions = [
    {
        label:"Dashboard",
        prompt:"Create a analytics dashboard to track customers and revenue data for a SaaS.",
        icon:LayoutDashboard
    },
    {
        label:"SignUp Form",
        prompt:"Create a modern sign up form with email/password fields, Google and Github login options and terms checkbox.",
        icon:Key
    },
    {
        label:"Hero",
        prompt:"Create a modern header and centered hero section for a productivity SaaS. Including a badge for feature announcment, a title with a subtle gradient effect, a description, and a call to action button.",
        icon:HomeIcon

    },
    {
        label:"User Profile Card", 
        prompt:"Create a modern user profile card component for a social media website",
        icon:User 
    }
]

function Hero() {

    const [userInput, setUserInput] = useState<string>();


    return (
        <div className='flex flex-col items-center h-[80vh] justify-center bg-amber-300 bg-gradient-to-bl from-pink-200'>
            {/* header and description */}

            <h2 className='font-bold text-7xl'>What should we Design ? </h2>
            <p className='mt-2 text-2xl text-gray-500'>Generate, Edit and Explore design with AI, Export code as well</p>

            {/* input box */}
            <div className='w-full bg-amber-50 max-w-2xl p-5 border mt-5 rounded-2xl'>
                <Textarea placeholder='Describe your page Design' 
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
                className='w-full  h-24 border-none focus-visible:ring-0 resize-none' />


                <div className='flex justify-between items-center '>
                    <Button variant={'ghost'} className='mt-3 float-left hover:bg-pink-400'><ImagePlusIcon/></Button>
                    
                    <SignInButton mode='modal' forceRedirectUrl={'/workspace'}>
                        <Button disabled={!userInput} className='mt-3 hover:bg-pink-500'><ArrowUp/></Button>
                    </SignInButton>
                </div>
            </div>

            {/* suggestion list */}

            <div className='mt-4 flex gap-3'>
                {suggestions.map((suggestion, index) => (
                    <Button  variant={'outline'} key={index} onClick={() => setUserInput(suggestion.prompt)}>
                        <suggestion.icon />
                        {suggestion.label}
                    </Button>
                ))}
            </div>

        </div>
    )
}

export default Hero
