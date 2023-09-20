import React from 'react'
import { Card } from './Card'

export const CardSection = ({children}) => {
  return (
    <div
      className='w-full sm:w-full md:w-full lg:w-full mx-auto flex flex-col sm:flex-col lg:flex-row gap-8 mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 px-0 lg:px-16'
    >
      {children}
    </div>
  )
}


