import SupportService from './component/supportService'
import ChooseReason from './component/chooseReason'
import PackList from './component/packList'
import ServiceSection from './component/serviceSection'
import Slider from './component/slider'

export default function Home() {
  return (
    <div className='w-full'>
      <Slider/>
      <ServiceSection/>
      <PackList/>
      <ChooseReason/>
      <SupportService/>
    </div>
  )
}
