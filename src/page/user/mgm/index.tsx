import React from 'react'
import FormComponent from './component/form'
import Ilistrator from './component/ilustrator'
import ReferralBenefitComponent from './component/referalBenefit'

export default function Mgm() {
    return (
        <div className='mx-auto w-full flex flex-col items-center p-4'>
            <img className='rounded-lg max-w-[1480px]  mt-3 w-full' src='/assets/img/mgm/banner.png' alt=''></img>
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
