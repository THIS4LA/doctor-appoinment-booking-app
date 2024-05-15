import React from 'react'
import { formateDate } from '../../utils/formateDate'

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex items-center gap-2">
          About of
          <span className="text-irisBlueColor font-bold text-[24px] leading-9 ">
            Kanchana Theyjan
          </span>
        </h3>
        <p className="text__para">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus corrupti asperiores quam provident similique aspernatur
          laudantium nisi accusantium maxime nemo. Nam vero facilis eum odio
          consequuntur error nobis nulla molestias?
        </p>
      </div>
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Education
        </h3>
        <ul className="pt-4 md:pt-5">
          {/* education 1st */}
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate('08-09-2007')} - {formateDate('12-04-2009')}
              </span>
              <p className="text-[15px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York</p>
          </li>
          {/* education 2nd */}
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-6 font-semibold ">
                {formateDate('12-04-2009')} - {formateDate('09-23-2012')}
              </span>
              <p className="text-[16px] leading-6 font-medium text-textColor">PHD in Surgeon</p>
            </div>
            <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York</p>
          </li>
        </ul>
      </div>

      <div className='mt-12'>
      <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold ">
          Experience
        </h3>
        <ul className='grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5'>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {formateDate('08-09-2007')} - {formateDate('12-04-2009')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Sr.Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York</p>
          </li>
          <li className='p-4 rounded bg-[#fff9ea]'>
            <span className='text-yellowColor text-[15px] leading-6 font-semibold'>
            {formateDate('08-09-2007')} - {formateDate('12-04-2009')}
            </span>
            <p className='text-[16px] leading-6 font-medium text-textColor'>
              Sr.Surgeon
            </p>
            <p className="text-[14px] leading-5 font-medium text-textColor">New Apollo Hospital, New York</p>
          </li>
        </ul>

        
      </div>

    </div>
  )
}

export default DoctorAbout
