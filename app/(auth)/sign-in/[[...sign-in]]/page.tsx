import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return(
    <div className='flex items-center justify-center h-screen bg-pink-500 bg-gradient-to-bl from-amber-300'>

        <SignIn/>
    </div>
  ) 
}