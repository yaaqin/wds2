import React from 'react'
import ServiceSection from '../home/component/serviceSection'
import Features from './component/feature'
import WhyChooseUs from './component/reason'
import BenefitsSection from './component/head'
import Heading from '../../../component/heading'
import Slider from './component/slider'

export default function About() {
  return (
    <div className='w-full flex items-center justify-center flex-col'>
      <Heading/>
      <BenefitsSection/>
      <ServiceSection />
      <Features />
      <Slider/>
      <WhyChooseUs/>
    </div>
  )
}
