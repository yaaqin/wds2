import React from 'react'
import SmartWifiSection from './component/routerWifi'
import WifiExperience from './component/deskProd'
import IpTv from './component/ipTv'
import QuoteForm from './component/getInTouch'

export default function Enterprise() {
    return (
        <div>
            <WifiExperience/>
            <SmartWifiSection/>
            <IpTv/>
            <QuoteForm/>
        </div>
    )
}
