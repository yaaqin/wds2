import React from 'react'
interface upcomingProps {
  showModal: boolean
  CloseModal: (value: boolean) => void;
}

export default function Upcoming({
  showModal,
  CloseModal
}: upcomingProps) {
  return (
    <div className={
      showModal ? 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' : 'hidden'
    }>
      <div className='flex flex-col justify-center items-center bg-white  w-[520px] p-[50px] rounded-[12px] shadow-lg'>
        <img alt='' src='https://i.pinimg.com/736x/99/fe/f9/99fef9f4efd1482748e3ba13ddd6f91d.jpg' className='w-[300px]' />
        <p className='text-[12px] text-center mt-[12px]'>Stay tune untuk fitur mendatang</p>
        <div onClick={() => CloseModal(false)} className='cursor-pointer text-[#fff] px-[24px] py-[8px] rounded-[12px] bg-blue-500 mt-[24px]'>kembali</div>
      </div>
    </div>

  )
}
