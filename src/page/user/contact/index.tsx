import React from 'react'
import ContactSection from './component/chatSection'
import SupportService from '../home/component/supportService'
import Heading from '../../../component/heading'
import Maps from '../news/component/map'
import CityCoverageSection from './component/findCoverage'

export default function Contact() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
      <Heading />
      <Maps/>
      <ContactSection />
      <CityCoverageSection/>
      <SupportService />
    </div>
  )
}
