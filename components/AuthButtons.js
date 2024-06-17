import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

const AuthButtons = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-8 w-full'>
      <Link href={`${process.env.NEXT_PUBLIC_SERVER}/api/auth/google`} className='flex w-full'>
        <Button variant="dark" className='gap-2 grow'>
              <Image src="/images/google-logo.svg" alt="Google logo" width={24} height={24}/>
              <p>Continue with Google</p>
          </Button>
      </Link>
      {/* <Link href='#' className='flex w-full'>
        <Button variant="dark" className='gap-2 grow'>
          <Image src="/images/apple-logo.svg" alt="Apple logo" width={24} height={24} />
          <p>Continue with Apple</p>
        </Button>
      </Link> */}
    </div>
  )
}

export default AuthButtons