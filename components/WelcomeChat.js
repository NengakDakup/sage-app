import React from 'react'

export const WelcomeChat = ({text}) => {
  if(text){
    return (
      <div className='text-4xl font-semibold max-w-[500px]'>{text}</div>
    )
  }
  return (
    <div className='text-4xl font-semibold'>Hi Jeremy,<br/> How can I help you today?</div>
  )
}
