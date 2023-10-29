import React, { useState } from 'react'

export default function ContactUser (props) {
  const [firstNameValue, setFirseNameValue] = useState('')
  const [lastNameValue, setLastNameValue] = useState('')
  const [mobileNumberValue, setMobileNumberValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [cityValue, setCityValue] = useState('')
  const [addressValue, setAddressValue] = useState('')
  const [enterCodeValue, setEnterCodeValue] = useState('')

  return (
    <div className='hidden lg:flex flex-row justify-between mt-20 py-8 px-5'>
      <div className='w-2/3 flex flex-col text-start gap-3'>
        <div className='w-full text-[24px] text-[#111415] font-manrope'>
          Contact Information
        </div>
        <div className='w-full px-3 pt-5 pb-4 flex flex-row gap-3 bg-white rounded-xl shadow'>
          <div className='w-[calc(50%-4px)] flex flex-col gap-8'>
            <div className='w-full justify-between gap-1 items-center flex flex-row'>
              <div className='text-[111415] text-[16px] font-manrope'>First Name:</div>
              <input
                className='w-1/2 outline-none border-[#D5AD36] rounded-lg p-2 text-xs border-[1px] '
                placeholder='Enter your first name'
                value={firstNameValue}
                onChange={e => setFirseNameValue(e.target.value)}
              />
            </div>
            <div className='w-full justify-between gap-1 items-center flex flex-row'>
              <div className='text-[111415] text-[16px] font-manrope'>Last Name:</div>
              <input
                className='w-1/2 outline-none border-[#D5AD36] rounded-lg p-2 text-xs border-[1px] '
                placeholder='Enter your last name'
                value={lastNameValue}
                onChange={e => setLastNameValue(e.target.value)}
              />
            </div>
            <div className='w-full justify-between gap-1 items-center flex flex-row'>
              <div className='text-[111415] text-[16px] font-manrope'>Mobile:</div>
              <input
                className='w-1/2 outline-none border-[#D5AD36] rounded-lg p-2 text-xs border-[1px] '
                placeholder='Enter your mobile'
                onChange={e => setMobileNumberValue(e.target.value)}
                value={mobileNumberValue}
              />
            </div>
            <div className='w-full justify-between gap-1 items-center flex flex-row'>
              <div className='text-[111415] text-[16px] font-manrope'>E-mail:</div>
              <input
                className='w-1/2 outline-none border-[#D5AD36] rounded-lg p-2 text-xs border-[1px] '
                placeholder='Enter your e-mail'
                onChange={e => setEmailValue(e.target.value)}
                value={emailValue}
              />
            </div>
          </div>

          <div className='w-[calc(50%-4px)] flex flex-col gap-8'>
            <div className='w-full justify-between gap-1 items-center flex flex-row'>
              <div className='text-[111415] text-[16px] font-manrope'>Country:</div>
              <select className='w-1/2 outline-none border-[#D5AD36] rounded-lg p-2 text-xs border-[1px] '>
                <option value='GE'>Greece</option>
                <option value='UK'>Ukraine</option>
                <option value='CA'>Canada</option>
                <option value='US'>United States</option>
              </select>
            </div>
            <div className='w-full justify-between gap-1 items-center flex flex-row'>
              <div className='text-[111415] text-[16px] font-manrope'>City:</div>
              <input
                className='w-1/2 outline-none border-[#D5AD36] rounded-lg p-2 text-xs border-[1px] '
                placeholder='Enter your city'
                onChange={e => setCityValue(e.target.value)}
                value={cityValue}
              />
            </div>
            <div className='w-full justify-between gap-1 items-center flex flex-row'>
              <div className='text-[111415] text-[16px] font-manrope'>Address:</div>
              <input
                className='w-1/2 outline-none border-[#D5AD36] rounded-lg p-2 text-xs border-[1px] '
                placeholder='Enter your address'
                onChange={e => setAddressValue(e.target.value)}
                value={addressValue}
              />
            </div>
            <div className='w-full justify-between gap-1 items-center flex flex-row'>
              <div className='text-[111415] text-[16px] font-manrope'>Postal Code:</div>
              <input
                className='w-1/2 outline-none border-[#D5AD36] rounded-lg p-2 text-xs border-[1px] '
                placeholder='Enter your postal code'
                onChange={e => setEnterCodeValue(e.target.value)}
                value={enterCodeValue}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='w-[30%] flex flex-col text-end gap-4'>
        <div className='w-full text-start flex flex-col gap-2'>
          <div className='text-2xl text-[#111415] font-FiraSans'>
            Ticket Collection
          </div>
          <div className='flex flex-row gap-1 text-start font-manrope w-full'>
            <input type='radio' />
            <div className='text-[16px]'>E-ticket</div>
          </div>
          <div className='flex flex-row gap-1 text-start font-manrope w-full'>
            <input type='radio' />
            <div className='text-[16px]'>Via Courier</div>
          </div>
          <select className='w-full outline-none rounded-lg p-2 bg-white border-[#D5AD36] border-[1px]'>
            <option value='1'>1</option>
            <option value='1'>2</option>
            <option value='1'>3</option>
            <option value='1'>4</option>
          </select>
        </div>
        <div className='w-full text-start flex flex-col gap-2'>
          <div className='text-2xl text-[#111415] font-FiraSans'>
            Terms & Conditions
          </div>
          <div className='flex flex-row gap-1 text-start font-manrope w-full'>
            <input type='radio' />
            <div className='text-base w-full'>
              Yes, I have read and accepted <span className='font-bold'>the terms and conditions</span>
            </div>
          </div>
          <div className='flex flex-row gap-1 text-start font-manrope w-full'>
            <input type='radio' />
            <div className='text-base w-full'>
              I accept to receive Company’s <span className='font-bold'>Newsletter</span> and information material <span className='font-bold'>by email / sms</span>
            </div>
          </div>
          <div className='flex flex-row gap-1 text-start font-manrope w-full'>
            <input type='radio' />
            <div className='text-base w-full'>
              Receive an <span className='font-bold'>SMS</span> with my <span className='font-bold'>reservation information</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
