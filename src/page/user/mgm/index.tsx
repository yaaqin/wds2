import React from 'react'
import FormComponent from './component/form'
import Ilistrator from './component/ilustrator'
import ReferralBenefitComponent from './component/referalBenefit'

export default function Mgm() {
    return (
        <div className='mx-auto w-full flex flex-col items-center'>
            <img className='rounded-lg' src='https://www.myrepublic.co.id/_next/image?url=%2Fimg%2Fgothel%2Fuploads%2FWEB_BANNER_MGM_SEPTEMBER_Web_Banner_1_9ec1eae6de.jpg&w=1280&q=75' alt=''></img>
            <div className='flex my-[24px] items-center'>
                <Ilistrator />
                <div>
                    <FormComponent />
                </div>
            </div>
            <ReferralBenefitComponent/>
        </div>
    )
}
