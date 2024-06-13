import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const Header = () => {
  return (
    <div className='w-full px-2'>
        <div className='flex flex-row justify-between max-w-[770px] mx-auto my-8 relative gradient-border-darkest p-4 rounded-2xl'>
            <Link href='/' className='flex flex-row items-center'>
                <Image src='/images/logo.png' alt='SageAI' width={36} height={36} />
                <p className='ml-2 font-bold text-lg'>SAGE</p>
            </Link>
            
            <div>
                <Link href='/auth/login' className='hidden md:inline'>
                    <Button variant="dark">Log In</Button>
                </Link>
                
                <Link href='/auth/signup'>
                    <Button variant="light" className="ml-4">Get Started</Button>
                </Link>

            </div>
        </div>
    </div>
  )
}

export default Header