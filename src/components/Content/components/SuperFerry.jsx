import React, { useState } from 'react'

export default function SuperFerry (props) {
  const [selectedOption, setSelectedOption] = useState('superFerry')

  const onValueChange = event => {
    // Updating the state with the selected radio button's value
    setSelectedOption(event.target.value)
  }

  return (
    <>
      <div className='relative mt-12'>
        <div
          className={`${
            selectedOption === 'superFerry' ? 'flex' : 'hidden'
          } bg-[#004E89] h-8 w-8 absolute top-0 ml-[-49px] mt-[33px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45`}
        ></div>
        <div
          className={`${
            selectedOption === 'superFerry' ? 'flex' : 'hidden'
          } bg-[#004E89] h-8 w-8 absolute top-0 ml-[49px] mt-[33px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45`}
        ></div>
        <div
          className={`${
            selectedOption === 'superFerry' ? 'flex' : 'hidden'
          } w-28 h-8 bg-[#004E89] justify-center relative top-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2`}
        >
          <span className='text-white text-center font-manrope text-base'>
            SELECTED
          </span>
        </div>
        <div
          className={`${
            selectedOption === 'superFerry'
              ? 'border-[#004E89] border-[2px]'
              : ''
          } flex flex-col lg:flex-row w-full bg-white rounded-2xl py-3 px-5 items-center z-10 relative`}
        >
          <div className='flex gap-2 flex-row items-center justify-center border-b-[1px] border-b-[#a7a7a7] py-4 lg:border-0 w-full lg:w-1/6'>
            <input
              type='radio'
              className='border-[#004E89] text-[#004E89]'
              value='superFerry'
              checked={selectedOption === 'superFerry'}
              onChange={onValueChange}
            />
            <span className='text-[#004E89] text-[20px] lg:text-[14px] xl:text-[20px]'>
              SUPERFERRY
            </span>
          </div>

          <div className='lg:border-r-[1px] lg:border-r-[#a7a7a7] h-5'></div>

          <div className='w-full lg:w-2/6 flex flex-row py-4 border-b-[1px] border-b-[#a7a7a7] lg:border-0 items-center'>
            <div className='flex flex-col w-3/5 items-center justify-center'>
              <span className='text-base text-black'>Wed. 22 May</span>
              <span className='text-[20px] text-[#004E89] font-manrope font-bold'>
                13:45 - 18:00
              </span>
            </div>

            <div className='border-r-[1px] border-r-[#a7a7a7] h-5'></div>

            <div className='flex flex-col w-2/5 items-center justify-center'>
              <span className='text-base text-black'>Duration</span>
              <span className='text-[20px] text-[#004E89] font-manrope font-bold'>
                04:45
              </span>
            </div>
          </div>

          <div className='lg:border-r-[1px] lg:border-r-[#a7a7a7] h-5'></div>

          <div className='w-full lg:w-2/6 flex flex-row py-4 border-b-[1px] border-b-[#a7a7a7] lg:border-0 items-center justify-center'>
            <div className='justify-center w-1/2 items-center gap-2 flex flex-col'>
              <div className='text-neutral-900 text-base  font-manrope'>
                Passengers
              </div>
              <div className='w-5  h-5 bg-green-500 rounded-full' />
            </div>
            <div className='w-1/2 justify-center items-center gap-2 flex flex-col'>
              <div className='text-neutral-900 text-base  font-manrope'>
                Vehicles
              </div>
              <div className='w-5 h-5 bg-sky-color rounded-full' />
            </div>
          </div>

          <div className='lg:border-r-[1px] lg:border-r-[#a7a7a7] h-5'></div>

          <div className='w-full lg:w-1/6 flex flex-col py-4 items-center justify-center'>
            <span className='text-[22px] text-[#004E89] font-manrope font-bold'>
              38.00€
            </span>
          </div>
        </div>
      </div>

      <div className='relative mt-12'>
        <div
          className={`${
            selectedOption === 'superExpress' ? 'flex' : 'hidden'
          } bg-[#004E89] h-8 w-8 absolute top-0 ml-[-49px] mt-[33px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45`}
        ></div>
        <div
          className={`${
            selectedOption === 'superExpress' ? 'flex' : 'hidden'
          } bg-[#004E89] h-8 w-8 absolute top-0 ml-[49px] mt-[33px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45`}
        ></div>
        <div
          className={`${
            selectedOption === 'superExpress' ? 'flex' : 'hidden'
          } w-28 h-8 bg-[#004E89] justify-center relative top-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2`}
        >
          <span className='text-white text-center font-manrope text-base'>
            SELECTED
          </span>
        </div>
        <div
          className={`${
            selectedOption === 'superExpress'
              ? 'border-[#004E89] border-[2px]'
              : ''
          } flex flex-col lg:flex-row w-full bg-white rounded-2xl py-3 px-5 items-center z-10 relative`}
        >
          <div className='flex gap-2 flex-row items-center justify-center border-b-[1px] border-b-[#a7a7a7] py-4 lg:border-0 w-full lg:w-1/6'>
            <input
              type='radio'
              className='border-[#004E89] text-[#004E89]'
              value='superExpress'
              checked={selectedOption === 'superExpress'}
              onChange={onValueChange}
            />
            <span className='text-[#004E89] text-[20px] lg:text-[14px] xl:text-[20px]'>
              SUPEREXPRESS
            </span>
          </div>

          <div className='lg:border-r-[1px] lg:border-r-[#a7a7a7] h-5'></div>

          <div className='w-full lg:w-2/6 flex flex-row py-4 border-b-[1px] border-b-[#a7a7a7] lg:border-0 items-center'>
            <div className='flex flex-col w-3/5 items-center justify-center'>
              <span className='text-base text-black'>Wed. 22 May</span>
              <span className='text-[20px] text-[#004E89] font-manrope font-bold'>
                18:45 - 21:00
              </span>
            </div>

            <div className='border-r-[1px] border-r-[#a7a7a7] h-5'></div>

            <div className='flex flex-col w-2/5 items-center justify-center'>
              <span className='text-base text-black'>Duration</span>
              <span className='text-[20px] text-[#004E89] font-manrope font-bold'>
                03:45
              </span>
            </div>
          </div>

          <div className='lg:border-r-[1px] lg:border-r-[#a7a7a7] h-5'></div>

          <div className='w-full lg:w-2/6 flex flex-row py-4 border-b-[1px] border-b-[#a7a7a7] lg:border-0 items-center justify-center'>
            <div className='justify-center w-1/2 items-center gap-2 flex flex-col'>
              <div className='text-neutral-900 text-base  font-manrope'>
                Passengers
              </div>
              <div className='w-5  h-5 bg-green-500 rounded-full' />
            </div>
            <div className='w-1/2 justify-center items-center gap-2 flex flex-col'>
              <div className='text-neutral-900 text-base  font-manrope'>
                Vehicles
              </div>
              <div className='w-5 h-5 bg-red-800 rounded-full' />
            </div>
          </div>

          <div className='lg:border-r-[1px] lg:border-r-[#a7a7a7] h-5'></div>

          <div className='w-full lg:w-1/6 flex flex-col py-4 items-center justify-center'>
            <span className='text-[22px] text-[#004E89] font-manrope font-bold'>
              38.00€
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
