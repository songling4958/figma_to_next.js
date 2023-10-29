import React, { useEffect, useState } from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BiErrorCircle } from 'react-icons/bi'

export default function PassengersInformation (props) {
  const [firstNameValue, setFirstNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [birthdateValue, setBirthdateValue] = useState('')
  const [optionValue, setOptionValue] = useState('Choose')
  const [tableState, setTableState] = useState(false)
  const [firstAction, setFirstAction] = useState(false)
  const TableValue = ['FILLED', 'FILL ALL FIELDS']

  const changeFirstName = e => {
    setFirstNameValue(e)
    setFirstAction(true)
  }

  const changeLastName = e => {
    setLastNameValue(e)
    setFirstAction(true)
  }

  const changeBirthdate = e => {
    setBirthdateValue(e)
    setFirstAction(true)
  }

  const changeOption = e => {
    setOptionValue(true)
    setOptionValue(e)
  }

  useEffect(() => {
    if (
      firstNameValue !== '' &&
      lastNameValue !== '' &&
      birthdateValue !== '' &&
      optionValue !== 'Choose' &&
      firstAction === true
    ) {
      setTableState(true)
    } else {
      setTableState(false)
    }
  }, [firstNameValue, lastNameValue, birthdateValue, optionValue])

  return (
    <>
      {firstAction ? (
        <div className='relative mt-[34px] shadow'>
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
            <div className='flex flex-col lg:flex-row py-2'>
              <div className='flex flex-col sm:flex-row gap-2 justify-center items-center w-full lg:w-1/4 py-4 border-b-[1px] border-b-[#a7a7a7] lg:border-b-0'>
                {tableState ? (
                  <AiOutlineCheckCircle
                    style={{
                      color: 'white',
                      backgroundColor: '#4DC158',
                      borderRadius: '9999px',
                    }}
                  />
                ) : (
                  <BiErrorCircle
                    style={{
                      color: 'white',
                      backgroundColor: '#8C0101',
                      borderRadius: '9999px',
                    }}
                  />
                )}
                <span className='text-[#004E89] text-xl font-bold font-[Manrope]'>
                  {props.title[0]}
                </span>
              </div>

              <div className='flex flex-row gap-2 justify-center items-center w-full py-4 lg:w-3/4 border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 font-manrope'>
                <div className='lg:border-r-[1px] lg:border-r-[#a7a7a7] h-5'></div>

                <div className='w-1/3 flex flex-col lg:flex-row gap-1 justify-center items-center'>
                  <span className='text-black text-xl sm:text-[16px]'>
                    Ticket:
                  </span>
                  <span className='text-[#004E89] text-xl sm:text-[16px] font-bold text-center'>
                    {props.title[1]}
                  </span>
                </div>
                <div className='border-r-[1px] border-r-[#a7a7a7] h-5'></div>

                <div className='w-1/3 flex flex-col md:flex-row gap-1 justify-center items-center'>
                  <span className='text-black text-xl sm:text-[16px]'>
                    Seat:
                  </span>
                  <span className='text-[#004E89] text-xl sm:text-[16px] font-bold'>
                    DKN
                  </span>
                </div>
                <div className='border-r-[1px] border-r-[#a7a7a7] h-5'></div>

                <div className='w-1/3 flex flex-row gap-1 justify-center items-center'>
                  <span className='text-[#004E89] text-xl sm:text-[20px] font-bold'>
                    {props.title[2]}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row py-2 gap-3 font-manrope'>
              <div className='flex flex-col lg:flex-row justify-center items-center gap-2 w-full lg:w-1/4 text-center lg:text-start'>
                <span className='text-black text-[16px] w-full lg:w-[164px]'>
                  First name:
                </span>
                <input
                  className={`outline-none bg-white px-3 py-2 border-[1px] border-[#D5AD36] ${
                    tableState
                      ? 'border-[#4DC158] border-[1px]'
                      : 'border-[#8C0101] border-[1px]'
                  } w-full text-xs rounded-lg`}
                  placeholder='Enter your first name'
                  value={firstNameValue}
                  onChange={e => changeFirstName(e.target.value)}
                />
              </div>
              <div className='flex flex-col lg:flex-row justify-center items-center gap-2 w-full lg:w-1/4 text-center lg:text-start'>
                <span className='text-black text-[16px] w-full lg:w-[164px]'>
                  Last name:
                </span>
                <input
                  className={`outline-none bg-white px-3 py-2 border-[1px] border-[#D5AD36] ${
                    tableState
                      ? 'border-[#4DC158] border-[1px]'
                      : 'border-[#8C0101] border-[1px]'
                  } w-full text-xs rounded-lg`}
                  placeholder='Enter your last name'
                  value={lastNameValue}
                  onChange={e => changeLastName(e.target.value)}
                />
              </div>
              <div className='w-full lg:w-1/2 justify-center items-center flex flex-row gap-1'>
                <div className='w-1/2 flex flex-row gap-1 justify-center items-center'>
                  <span className='text-black text-[16px]'>Nationality:</span>
                  <select
                    className={`outline-none bg-white px-3 py-2 border-[1px] border-[#D5AD36] ${
                      tableState
                        ? 'border-[#4DC158] border-[1px]'
                        : 'border-[#8C0101] border-[1px]'
                    } w-full text-xs rounded-lg`}
                    onChange={e => changeOption(e.target.value)}
                  >
                    <option value='Choose'>Choose</option>
                    <option value='US'>US</option>
                    <option value='US'>GR</option>
                    <option value='US'>UK</option>
                    <option value='US'>CA</option>
                  </select>
                </div>
                <div className='w-1/2 flex flex-row gap-1 justify-center items-center'>
                  <span className='text-black text-[16px]'>Birthdate:</span>
                  <input
                    className={`outline-none bg-white px-3 py-2 border-[1px] border-[#D5AD36] ${
                      tableState
                        ? 'border-[#4DC158] border-[1px]'
                        : 'border-[#8C0101] border-[1px]'
                    } w-full text-xs rounded-lg`}
                    placeholder='Enter your last name'
                    value={birthdateValue}
                    onChange={e => changeBirthdate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className='relative mt-[34px] shadow'>
          <div
            className={` w-full flex flex-col bg-white p-4 rounded-lg z-10 relative mt-8`}
          >
            <div className='flex flex-col lg:flex-row py-2'>
              <div className='flex flex-col sm:flex-row gap-2 justify-center items-center w-full lg:w-1/4 py-4 border-b-[1px] border-b-[#a7a7a7] lg:border-b-0'>
                <div className='w-5 h-5 rounded-full border-[1px]'></div>
                <span className='text-[#004E89] text-xl font-bold font-[Manrope]'>
                  {props.title[0]}
                </span>
              </div>

              <div className='flex flex-row gap-2 justify-center items-center w-full py-4 lg:w-3/4 border-b-[1px] border-b-[#a7a7a7] lg:border-b-0 font-manrope'>
                <div className='lg:border-r-[1px] lg:border-r-[#a7a7a7] h-5'></div>
                <div className='w-1/3 flex flex-col lg:flex-row gap-1 justify-center items-center'>
                  <span className='text-black text-xl sm:text-[16px]'>
                    Ticket:
                  </span>
                  <span className='text-[#004E89] text-xl sm:text-[16px] font-bold text-center'>
                    {props.title[1]}
                  </span>
                </div>
                <div className='border-r-[1px] border-r-[#a7a7a7] h-5'></div>

                <div className='w-1/3 flex flex-col md:flex-row gap-1 justify-center items-center'>
                  <span className='text-black text-xl sm:text-[16px]'>
                    Seat:
                  </span>
                  <span className='text-[#004E89] text-xl sm:text-[16px] font-bold'>
                    DKN
                  </span>
                </div>
                <div className='border-r-[1px] border-r-[#a7a7a7] h-5'></div>

                <div className='w-1/3 flex flex-row gap-1 justify-center items-center'>
                  <span className='text-[#004E89] text-xl sm:text-[20px] font-bold'>
                    {props.title[2]}
                  </span>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row py-2 gap-3 font-manrope'>
              <div className='flex flex-col lg:flex-row justify-center items-center gap-2 w-full lg:w-1/4 text-center lg:text-start'>
                <span className='text-black text-[16px] w-full lg:w-[164px]'>
                  First name:
                </span>
                <input
                  className={`outline-none bg-white px-3 py-2 border-[1px] border-[#D5AD36] ${
                    tableState
                      ? 'border-[#4DC158] border-[1px]'
                      : 'border-[#8C0101] border-[1px]'
                  } w-full text-xs rounded-lg`}
                  placeholder='Enter your first name'
                  value={firstNameValue}
                  onChange={e => changeFirstName(e.target.value)}
                />
              </div>
              <div className='flex flex-col lg:flex-row justify-center items-center gap-2 w-full lg:w-1/4 text-center lg:text-start'>
                <span className='text-black text-[16px] w-full lg:w-[164px]'>
                  Last name:
                </span>
                <input
                  className={`outline-none bg-white px-3 py-2 border-[1px] border-[#D5AD36] ${
                    tableState
                      ? 'border-[#4DC158] border-[1px]'
                      : 'border-[#8C0101] border-[1px]'
                  } w-full text-xs rounded-lg`}
                  placeholder='Enter your last name'
                  value={lastNameValue}
                  onChange={e => changeLastName(e.target.value)}
                />
              </div>
              <div className='w-full lg:w-1/2 justify-center items-center flex flex-row gap-1'>
                <div className='w-1/2 flex flex-row gap-1 justify-center items-center'>
                  <span className='text-black text-base md:text-[16px]'>
                    Nationality:
                  </span>
                  <select
                    className={`outline-none bg-white px-3 py-2 border-[1px] border-[#D5AD36] ${
                      tableState
                        ? 'border-[#4DC158] border-[1px]'
                        : 'border-[#8C0101] border-[1px]'
                    } w-full text-xs rounded-lg`}
                    onChange={e => changeOption(e.target.value)}
                  >
                    <option value='Choose'>Choose</option>
                    <option value='US'>US</option>
                    <option value='US'>GR</option>
                    <option value='US'>UK</option>
                    <option value='US'>CA</option>
                  </select>
                </div>
                <div className='w-1/2 flex flex-row gap-1 justify-center items-center'>
                  <span className='text-black text-base md:text-[16px]'>
                    Birthdate:
                  </span>
                  <input
                    className={`outline-none bg-white px-3 py-2 border-[1px]  ${
                      tableState
                        ? 'border-[#4DC158] border-[1px]'
                        : 'border-[#8C0101] border-[1px]'
                    } border-[#D5AD36] w-full text-xs rounded-lg`}
                    placeholder='Enter your last name'
                    value={birthdateValue}
                    onChange={e => changeBirthdate(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
