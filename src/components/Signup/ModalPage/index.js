import React from 'react'
import { Header } from './Header'
import { Heading } from './Heading'
import { CardSection } from './CardSection'
import { Footer } from './Footer'

export const ModalPage = () => {
  return (
    <div
      className='flex flex-col w-full px-2 gap-5'
    >
        <Header />
        <Heading />
        <CardSection />
        <Footer />
    </div>
  )
}
