import React from 'react'
import Content from './component/content'
import Pricing from './component/priceList'
import Heading from '../../../../component/heading'

export default function Business() {
  return (
    <div className=''>
      <Heading/>
      <Pricing />
      <Content />
    </div>
  )
}
