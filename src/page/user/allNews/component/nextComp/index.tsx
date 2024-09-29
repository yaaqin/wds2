import React, { useEffect, useRef } from 'react'
import NormalCard from '../normalCard'
import useGsapScrollTrigger from '../../../../../component/gsapHook';

export default function NextComp() {
  const gridRef = useRef<HTMLDivElement>(null); 
  useGsapScrollTrigger(gridRef, 'bottom', {}, { from: 'start', amount: 0.3 });
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="bg-white py-12">
      <div ref={gridRef} className="max-w-[1480px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NormalCard />
        <NormalCard />
        <NormalCard />
        <NormalCard />
        <NormalCard />
        <NormalCard />
        <NormalCard />
        <NormalCard />
        <NormalCard />
      </div>
    </div>
  )
}
