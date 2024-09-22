import React from 'react'
import BlogSection from './component/section'
import Heading from '../../../component/heading'

export default function News() {
  return (
    <section>
      <Heading />
      <div className='w-full flex items-center justify-center bg-gray-100'>
        <BlogSection />
      </div>
    </section>
  )
}
