import React from 'react'
import SmartWifiSection from './component/routerWifi'
import WifiExperience from './component/deskProd'
import IpTv from './component/ipTv'
import QuoteForm from './component/getInTouch'
import ServicesSection from './component/serviceSection'

export default function Enterprise() {
    return (
        <div>
            <WifiExperience />
            <ServicesSection />
            <IpTv />
            <SmartWifiSection />
            <QuoteForm />
        </div>
    )
}
