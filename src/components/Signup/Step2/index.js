import React from 'react'
import { Header } from '../Step1/Header'
import { Heading } from '../Step1/Heading'
import { CardSection } from '../Step1/CardSection'
import { Card } from '../Step1/CardSection/Card'
import { Footer } from '../Step1/Footer'

export const Step2 = () => {
  return (
    <div
      className='pt-0 px-6 w-full'
    >
      <Header />
      <div
        className='px-0 lg:px-20  mt-8'
      >
      <Heading text={"What's your main goal?"} textCSS={"text-left md:text-center lg:text-left"} tagline={"Don't worry. You'll still have access to all of Contra's features."} taglineCSS={"text-gray-400 text-sm"} />
      <CardSection>
        <Card 
          imgPath={"/images/step21.png"}
          title={"Build Portfolio"}
          tag={"Highlight past projects and supercharge your brand!"}
        />
        <Card
          imgPath={"/images/step22.png"}
          title={"Get Discovered"}
          tag={"Make it easier for potential Clients to find you."}
        />
        <Card 
          imgPath={"/images/step23.png"}
          title={"Find Opportunities"}
          tag={"Browse high-quality remote jobs, exclusively on Contra."}
        />
        <Card 
          imgPath={"/images/step24.png"}
          title={"Get Pais Commission-Free"}
          tag={"Manage new or existing Clients in one place. You keep 100% of the profit."}
        />
      </CardSection>
      <Footer />
      </div>
    </div>
  )
}


