import React from 'react'
import NormalCard from '../normalCard'

export default function Other() {
  return (
    <div className="bg-white py-12 px-[24px]">
      <div className="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
       <NormalCard/>
       <NormalCard/>
       <NormalCard/>
      </div>
    </div>
  )
}
