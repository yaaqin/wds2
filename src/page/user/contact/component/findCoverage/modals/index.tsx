import React from 'react'
import MonaLoad from '../../../../../../component/animate/monalisaLoading';

interface coverageProps {
  showModal: boolean
  CloseModal: (value: boolean) => void;
}
export default function CoverageList({
  showModal,
  CloseModal
}: coverageProps) {
  return (
    <div className={
      showModal ? 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50' : 'hidden'
    }>
      <div className='flex flex-col justify-center items-center bg-white  w-[520px] p-[50px] rounded-[12px] shadow-lg'>
        <MonaLoad />
        <p className='text-[12px] text-center mt-[12px]'>Stay tune untuk fitur mendatang</p>
        <div onClick={() => CloseModal(false)} className='cursor-pointer text-[#fff] px-[24px] py-[8px] rounded-[12px] bg-blue-500 mt-[24px]'>kembali</div>
      </div>
    </div>
  )
}
