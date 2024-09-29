import SupportService from './component/supportService'
import ChooseReason from './component/chooseReason'
import PackList from './component/packList'
import ServiceSection from './component/serviceSection'
import Slider from './component/slider'
import HanaPlaySubscription from '../ourProduct/broadband/component/toRegist'
import SliderPartner from '../about/component/slider'
import MenuList from './component/menuList'

export default function Home() {
  return (
    <div className='w-full'>
      <Slider images={['https://www.wds.co.id/wp-content/uploads/2024/06/young-woman-wearing-headphones-holding-looking-phone-sitting-sofa-coffee-table-living-room-scaled.jpg', 'https://www.wds.co.id/wp-content/uploads/2024/06/woman-using-mobile-phone-kitchen-counter-scaled.jpg', 'https://www.wds.co.id/wp-content/uploads/2024/06/handsome-man-using-laptop-travel-nature-scaled.jpg']}/>
      <MenuList/>
      <ServiceSection/>
      <SliderPartner/>
      <PackList/>
      <HanaPlaySubscription/>
      <ChooseReason/>
      <SupportService/>
    </div>
  )
}
