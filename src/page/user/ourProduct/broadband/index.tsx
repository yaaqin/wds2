import React from 'react'
import Heading from '../../../../component/heading'
import BisnisHero from './component/banner'
import ProdList from './component/prodList'
import CityCoverageSection from '../../contact/component/findCoverage'
import HanaPlaySubscription from './component/toRegist'

export default function Broadband() {
  return (
    <div>
      {/* <Heading/> */}
      <BisnisHero/>
      {/* <HanaPlaySubscription/> */}
      <ProdList/>
      <CityCoverageSection/>
    </div>
  )
}
