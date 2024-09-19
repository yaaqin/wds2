import React from 'react'
import ContactSection from './component/chatSection'
import SupportService from '../home/component/supportService'

export default function Contact() {
  return (
    <div className='w-full flex flex-col items-center justify-center'>
    <ContactSection/>
    <SupportService/>
  </div>
  )
}
