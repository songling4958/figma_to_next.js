import React, { useEffect, useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'

export default function VehicleTable (props) {
  const [optionValue, setOptionValue] = useState('Choose')

  const [tableState, setTableState] = useState(false)
  const [firstAction, setFirstAction] = useState(false)
  const TableValue = ['FILLED', 'FILL ALL FIELDS']

  const changeOption = e => {
    setOptionValue(e)
    setFirstAction(true)
  }

  useEffect(() => {
    if (optionValue !== 'Choose' && firstAction === true) {
      setTableState(true)
    } else {
      setTableState(false)
    }
  }, [optionValue])

  return (
    <>
      {firstAction ? (
        <div className='relative'>
          <div
            className={`${
              tableState ? 'bg-[#4DC158] ml-[-49px]' : 'bg-[#8C0101] ml-[-57px]'
            } flex h-8 w-8 absolute top-0  mt-[33px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45`}
          ></div>
          <div
            className={`${
              tableState ? 'bg-[#4DC158] ml-[49px]' : 'bg-[#8C0101] ml-[57px]'
            } flex  h-8 w-8 absolute top-0 mt-[33px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45`}
          ></div>
          <div
            className={`${
              tableState ? 'bg-[#4DC158] w-28' : 'bg-[#8C0101] w-32'
            } flex h-8  justify-center relative top-6 rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2`}
          >
            <span className='text-white text-center font-manrope text-base'>
              {tableState ? TableValue[0] : TableValue[1]}
            </span>
          </div>
          <div
            className={`${
              tableState
                ? 'border-[#4DC158] border-[2px]'
                : 'border-[#8C0101] border-[2px]'
            } w-full flex flex-col bg-white p-4 rounded-lg z-10 relative`}
          >
            <div className='flex flex-col lg:flex-row py-2 gap-3 items-start'>
              <div className='flex flex-row lg:flex-col justify-center items-center gap-2 w-full lg:w-1/6 text-center lg:text-start'>
                <span className='hidden lg:flex text-[#004E89] text-[20px] font-manrope'>
                  Passenger
                </span>
                <div className='lg:w-full flex flex-row justify-center items-center gap-2'>
                  {tableState ? (
                    <AiOutlineCheckCircle
                      style={{
                        color: 'white',
                        backgroundColor: '#4DC158',
                        borderRadius: '9999px'
                      }}
                    />
                  ) : (
                    <BiErrorCircle
                      style={{
                        color: 'white',
                        backgroundColor: '#8C0101',
                        borderRadius: '9999px'
                      }}
                    />
                  )}
                  <span className='text-black text-[16px] lg:w-1/6'>1</span>
                </div>
                <span className='flex lg:hidden text-[#004E89] text-[20px] font-manrope'>
                  Passenger
                </span>
              </div>
              <div className='flex border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#a7a7a7] lg:h-5 w-full lg:mt-10 lg:w-0'></div>

              <div className='flex flex-col justify-center items-center gap-2 w-full lg:w-2/6 text-center lg:text-start'>
                <span className='text-black w-full text-[20px] lg:text-[16px]'>
                  Passenger type
                </span>
                <select
                  className='w-full py-2  text-black text-[12px] items-center justify-between px-3 border-[#FFFFFF] border-[1px] rounded-lg shadow'
                  onChange={e => changeOption(e.target.value)}
                >
                  <option value='Choose'>Choose</option>
                  <option
                    value='10'
                    className='justify-between flex text-[12px] flex-row w-full'
                  >
                    <span className='w-full justify-start flex text-[#333333]'>
                      Child(5-10)
                    </span>
                  </option>
                  <option
                    value='20'
                    className='justify-between flex text-[12px] flex-row'
                  >
                    <span className='w-full justify-start text-[#333333]'>
                      Child(10-20)
                    </span>
                  </option>
                  <option
                    value='30'
                    className='justify-between flex text-[12px] flex-row'
                  >
                    <span className='w-full justify-start text-[#333333]'>
                      Child(20-30)
                    </span>
                  </option>
                  <option
                    value='50'
                    className='justify-between flex text-[12px] flex-row'
                  >
                    <span className='w-full justify-start text-[#333333]'>
                      Child(30-50)
                    </span>
                  </option>
                </select>
              </div>
              <div className='flex border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#a7a7a7] lg:h-5 w-full lg:mt-10 lg:w-0'></div>

              <div className='w-full lg:w-1/6 justify-center items-center flex flex-col gap-2 text-center lg:text-start'>
                <span className='text-black w-full text-[18px] lg:text-[16px]'>
                  Plate number
                </span>
                <div className='w-full bg-white rounded-lg px-3 py-2 text-[#111415] text-[12px] text-start border-[1px] border-[#FFFFFF] shadow'>
                  Plate No.
                </div>
              </div>
              <div className='flex border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#a7a7a7] lg:h-5 w-full lg:mt-10 lg:w-0'></div>

              <div className='w-full lg:w-1/6 justify-center items-center flex flex-col gap-2 text-center'>
                <span className='text-black w-full text-[18px] lg:text-[16px]'>
                  Meters
                </span>
                <span className='text-base font-manrope text-[#111415]'>
                  VEHICLE
                </span>
              </div>
              <div className='flex border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#a7a7a7] lg:h-5 w-full lg:mt-10 lg:w-0'></div>

              <div className='w-full lg:w-1/6 flex flex-col gap-1 justify-center items-center'>
                <span className='text-[#004E89] text-[20px] lg:text-[16px] font-manrope'>
                  Total cost
                </span>
                <span className='w-full text-center text-[#004E89] text-[16px] font-manrope'>
                  35.00€
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative'>
          <div className='w-full flex flex-col bg-white p-4 rounded-lg z-10 relative mt-8'>
            <div className='flex flex-col lg:flex-row py-2 gap-3 items-start'>
              <div className='flex flex-row lg:flex-col justify-center items-center gap-2 w-full lg:w-1/6 text-center lg:text-start'>
                <span className='hidden lg:flex text-[#004E89] text-[20px] font-manrope'>
                  Passenger
                </span>
                <div className='lg:w-full flex flex-row justify-center items-center gap-2'>
                  <div className='w-5 h-5 rounded-full border-[1px]'></div>
                  <span className='text-black text-[16px] lg:w-1/6'>1</span>
                </div>
                <span className='flex lg:hidden text-[#004E89] text-[20px] font-manrope'>
                  Passenger
                </span>
              </div>
              <div className='flex border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#a7a7a7] lg:h-5 w-full lg:mt-10 lg:w-0'></div>

              <div className='flex flex-col justify-center items-center gap-2 w-full lg:w-2/6 text-center lg:text-start'>
                <span className='text-black text-[12px] w-full sm:text-[16px]'>
                  Passenger type
                </span>
                <select
                  className='w-full py-2  text-black text-[12px] items-center justify-between px-3 border-[#FFFFFF] border-[1px] rounded-lg shadow'
                  onChange={e => changeOption(e.target.value)}
                >
                  <option value='Choose'>Choose</option>
                  <option
                    value='10'
                    className='justify-between flex text-[12px] flex-row w-full'
                  >
                    <span className='w-full justify-start flex text-[#333333]'>
                      Child(5-10)
                    </span>
                  </option>
                  <option
                    value='20'
                    className='justify-between flex text-[12px] flex-row'
                  >
                    <span className='w-full justify-start text-[#333333]'>
                      Child(10-20)
                    </span>
                  </option>
                  <option
                    value='30'
                    className='justify-between flex text-[12px] flex-row'
                  >
                    <span className='w-full justify-start text-[#333333]'>
                      Child(20-30)
                    </span>
                  </option>
                  <option
                    value='50'
                    className='justify-between flex text-[12px] flex-row'
                  >
                    <span className='w-full justify-start text-[#333333]'>
                      Child(30-50)
                    </span>
                  </option>
                </select>
              </div>
              <div className='flex border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#a7a7a7] lg:h-5 w-full lg:mt-10 lg:w-0'></div>

              <div className='w-full lg:w-1/6 justify-center items-center flex flex-col gap-2 text-center lg:text-start'>
                <span className='text-black w-full text-[18px] lg:text-[16px]'>
                  Plate number
                </span>
                <div className='w-full bg-white rounded-lg px-3 py-2 text-[#111415] text-[12px] text-start border-[1px] border-[#FFFFFF] shadow'>
                  Plate No.
                </div>
              </div>
              <div className='flex border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#a7a7a7] lg:h-5 w-full lg:mt-10 lg:w-0'></div>

              <div className='w-full lg:w-1/6 justify-center items-center flex flex-col gap-2 text-center'>
                <span className='text-black w-full text-[18px] lg:text-[16px]'>
                  Meters
                </span>
                <span className='text-base font-manrope text-[#111415]'>
                  VEHICLE
                </span>
              </div>
              <div className='flex border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 lg:border-r-[1px] lg:border-r-[#a7a7a7] lg:h-5 w-full lg:mt-10 lg:w-0'></div>
              <div className='w-full lg:w-1/6 flex flex-col gap-1 justify-center items-center'>
                <span className='text-[#004E89] text-[16px] sm:text-[20px] font-manrope'>
                  Total cost
                </span>
                <span className='w-full text-center text-[#004E89] text-[16px] font-manrope'>
                  35.00€
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
