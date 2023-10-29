import React from 'react'

export default function FooterText (props) {
  return (
    <div className=' w-[90%] md:w-[70%] h-fit flex flex-col lg:flex-row mb-20 mx-auto'>
      <div className='w-full footer-text-header h-full lg:w-14 lg:h-[224px] justify-center text-center rounded-t-xl lg:rounded-t-none lg:rounded-l-xl font-semibold text-white bg-[#004E89] p-4'>
        <div className='footer-text w-full lg:text-[14px] lg:rotate-180'>
          ADDITIONAL INFORMATION
        </div>
      </div>
      <div className='text-[16px] w-full font-manrope px-4 py-3 bg-[#D9D9D9] rounded-b-xl lg:rounded-b-none lg:rounded-r-xl '>
        <div className='text-start py-1'>
          1. Infant up to 5 y for (SUPEREXPRESS - SUPERFERRY) <span className="font-bold">(zero price ticket)</span> in economy seat.
        </div>
        <div className='text-start py-1'>
          2. Child 5 - 10 y for (SUPEREXPRESS - SUPERFERRY) ticket with <span className="font-bold">50% discount.</span>
        </div>
        <div className='text-start py-1'>
          3. For <span className="font-bold">SUV`s</span> camper type larger dimensions please contact our company.
        </div>
        <div className='text-start py-1'>
          4. <span className="font-bold">SMALL TRUCKS</span> – vehicle till 5 meters with prof. license. For bigger dimension contact with  company or central port offices.
        </div>
        <div className='text-start py-1'>
          5. Camper till 5 meters. For bigger dimension contact with company or central port offices.
        </div>
      </div>
    </div>
  )
}
