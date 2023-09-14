import React from 'react'
import { Card } from './Card'

export const CardSection = () => {
  return (
    <div
      className='w-full lg:w-[800px] mx-auto flex flex-col sm:flex-col md:flex-col lg:flex-row gap-8 mt-3'
    >
      <Card imgPath={"/images/1.webp"} title={"I'm an independent"} tag={"Find work and manage your freelance business"}/>
      <Card imgPath={"/images/2.webp"} title={"I'm hiring"} tag={"Post opportunities and discover independents"}/>
    </div>
  )
}


