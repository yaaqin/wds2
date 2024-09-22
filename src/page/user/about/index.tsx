import React from 'react'
import ServiceSection from '../home/component/serviceSection'
import Features from './component/feature'
import WhyChooseUs from './component/reason'
import BenefitsSection from './component/head'
import Heading from '../../../component/heading'

export default function About() {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <Heading/>
      <BenefitsSection/>
      <ServiceSection />
      <Features />
      <WhyChooseUs/>
      <img alt='' src='https://www.wds.co.id/wp-content/uploads/2024/06/PAGE-6-01-1024x576.jpg' className='max-w-[1480px] my-[24px]'></img>
    </div>
  )
}
