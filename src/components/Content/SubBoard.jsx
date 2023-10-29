import React, { useState } from 'react'
import ChooseRouter from './components/ChooseRouter'
import SuperFreey from './components/SuperFerry'
import PassengersInformation from './components/PassengersInformation'
import VehicleTable from './components/VehicleTable'
import TitleBoard from './components/TitleBoard'
import MainTrip from './components/MainTrip'
import HorizontalDivider from './components/HorizontalDivider'
import PaymentStatus from './components/PaymentStatus'
import AutoComplete from './components/AutoComplete'
import ContactUser from './components/ContactUser'
import SeatInformation from './components/SeatInformation'
import FooterText from './components/FooterText';

function BodyPan (props) {

  const [currentStep, setCurrentStep] = useState(1);
  const [paySucess, setPaySuccess] = useState(false);

  const nextStep = () => {
    setCurrentStep(currentStep+1);
  }

  const initStep = () => {
    setCurrentStep(1);
  }

  return (
    <>
      <div className='w-[90%] md:w-[70%] h-fit flex flex-col relative bg-white bg-opacity-90 rounded-[20px] shadow mt-16 mb-20 mx-auto p-5'>
        <div className='pt-12 flex justify-center gap-4'>
          {currentStep === 1 ? (
          <div className='flex flex-col justify-center items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-[#004E89] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                  <div className='text-white text-[22px] font-bold font-FiraSans '>
                    1
                  </div>
                </div>
              </div>
              <div className='text-[#004E89] text-xl 2xl:text-2xl font-normal font-FiraSans  leading-normal'>
                Choose  route
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-[#004E89] rounded-[20px] shadow' />
          </div>
          ):(
          <div className='flex flex-col justify-center items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-[#D5AD36] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                  <img src="/assets/images/checkmark_success.svg" alt=''/>
                </div>
              </div>
              <div className='text-[#111415] text-xl 2xl:text-2xl font-normal font-FiraSans  leading-normal'>
                Choose  route
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-[#D5AD36] rounded-[20px] shadow' />
          </div>)}
          {currentStep === 2 ? (<div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-[#004E89] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-[22px] font-bold font-FiraSans leading-[23.02px]">
                    2
                  </div>
                </div>
              </div>
              <div className="text-[#111415] text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                Select seats
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-[#004E89] rounded-[20px]' />
          </div>
          ):(
            (currentStep>2) ?
            (<div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
              <div className='justify-start items-center gap-4 inline-flex'>
                <div className='w-8 h-8 justify-center items-center flex'>
                  <div className='w-8 h-8 bg-[#D5AD36] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                  <img src="/assets/images/checkmark_success.svg" alt=''/>
                  </div>
                </div>
                <div className="text-[#111415] text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                  Select seats
                </div>
              </div>
              <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-[#D5AD36] rounded-[20px]' />
            </div>
            ):(
            <div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
              <div className='justify-start items-center gap-4 inline-flex'>
                <div className='w-8 h-8 justify-center items-center flex'>
                  <div className='w-8 h-8 bg-neutral-900 bg-opacity-30 rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                    <div className="text-white text-[22px] font-bold font-FiraSans leading-[23.02px]">
                      2
                    </div>
                  </div>
                </div>
                <div className="text-[#111415] text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                  Select seats
                </div>
              </div>
              <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-neutral-900 bg-opacity-30 rounded-[20px]' />
            </div>)
          )}
          {currentStep === 3 ? (<div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-[#004E89] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-[22px] font-bold font-FiraSans leading-[23.02px]">
                    3
                  </div>
                </div>
              </div>
              <div className="text-[#111415] text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                Passengers
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-[#004E89] rounded-[20px]' />
          </div>
          ):(
          (currentStep>3) ?
          (<div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-[#D5AD36] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                <img src="/assets/images/checkmark_success.svg" alt=''/>
                </div>
              </div>
              <div className="text-[#111415] text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                Passengers
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-[#D5AD36] rounded-[20px]' />
          </div>
          ):(
          <div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-neutral-900 bg-opacity-30 rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-[22px] font-bold font-FiraSans leading-[23.02px]">
                    3
                  </div>
                </div>
              </div>
              <div className="text-[#111415] text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                Passengers
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-neutral-900 bg-opacity-30 rounded-[20px]' />
          </div>)
          )}
          {currentStep < 4 ? (<div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-neutral-900 bg-opacity-30 rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                  <div className="text-white text-[22px] font-bold font-FiraSans leading-[23.02px]">
                    4
                  </div>
                </div>
              </div>
              <div className="text-neutral-900 text-opacity-30 text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                Payment
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-neutral-900 bg-opacity-30 rounded-[20px]' />
          </div>
          ):(
          (paySucess) ?
          (<div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-[#D5AD36] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                <img src="/assets/images/checkmark_success.svg" alt=''/>
                </div>
              </div>
              <div className="text-neutral-900 text-opacity-30 text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                Payment
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-[#D5AD36] rounded-[20px]' />
          </div>  
          ):(
            <div className='hidden xl:inline-flex flex-col justify-start items-center gap-3'>
            <div className='justify-start items-center gap-4 inline-flex'>
              <div className='w-8 h-8 justify-center items-center flex'>
                <div className='w-8 h-8 bg-[#8C0101] rounded-[50px] justify-center items-center gap-2.5 inline-flex'>
                <img src="/assets/images/checkmark_fail.svg" alt=''/>

                </div>
              </div>
              <div className="text-neutral-900 text-opacity-30 text-xl 2xl:text-2xl font-normal font-FiraSans leading-normal">
                Payment
              </div>
            </div>
            <div className='w-[200px] 2xl:w-[223px] h-1.5 bg-[#8C0101] rounded-[20px]' />
          </div>)
          )}
        </div>

        {/* table header start */}
        {/* table header 1 */}
        {currentStep === 1 && <div className='flex justify-center items-start lg:items-end gap-3 lg:gap-14 xl:gap-20 mt-14 mb-16'>
          <div className='justify-start items-center gap-3 flex flex-col lg:flex-row'>
            <div className='w-5 h-5 bg-green-500 rounded-full' />
            <div className='text-neutral-900 text-base font-light font-manrope leading-[23.02px]'>
              Available
            </div>
          </div>
          <div className='justify-start items-center gap-3 flex flex-col lg:flex-row'>
            <div className='w-5 h-5 bg-sky-color rounded-full' />
            <div className='text-neutral-900 text-base font-light font-manrope leading-[23.02px]'>
              Limited Availability
            </div>
          </div>
          <div className='justify-start items-center gap-3 flex flex-col lg:flex-row'>
            <div className='w-5 h-5 bg-red-800 rounded-full' />
            <div className='text-neutral-900 text-base font-light font-manrope leading-[23.02px]'>
              No Availability
            </div>
          </div>
        </div>}
        {/* table header end 1 */}

        {/* <TitleBoard/> */}
        {/* table header end */}
        {currentStep === 1 &&(
          <>
            {/* MainTrip Start */}
            <MainTrip/>
            {/* MainTrip End */}
            
            <ChooseRouter />
            <SuperFreey />

            <HorizontalDivider/>

            <MainTrip/>
            
            <ChooseRouter />
            <SuperFreey />
          </>
        )}
        {currentStep === 2 &&(
          <>
            <TitleBoard title = {["SEAT INFORMATION",""]}/>
            {/* MainTrip Start */}
            <div className="mt-9">
              <MainTrip/>
            </div>
            {/* MainTrip End */}

            <SeatInformation/>
            <SeatInformation/>
            <SeatInformation/>
            <VehicleTable/>

            <div className="w-full border-b-2 border-color: #1114154D my-[50px] hidden lg:inline md:inline"/>

            <MainTrip/>
            <AutoComplete/>
            <SeatInformation/>
            <SeatInformation/>
            <SeatInformation/>
            <VehicleTable/>

            <div className="w-full border-b-2 border-color: #1114154D mt-[50px] hidden lg:inline md:inline"/>

            <div className="flex-row gap-12 justify-end hidden md:flex pr-[50px]">
              <div className="text-neutral-900 text-2xl font-normal font-FiraSans leading-loose">Total Price:</div>
              <div className="text-sky-800 text-[32px] font-bold font-FiraSans leading-[42.02px]">380,00€</div>
            </div>

          </>
        )}
        {currentStep === 3 &&(
          <>
            <TitleBoard title = {["PASSENGERS INFORMATION","In order to complete the reservation, please type in all information."]}/>
            <MainTrip/>
            <PassengersInformation title = {["PASSENGER  1","ADULT  TICKET","70.00€"]}/>
            <PassengersInformation title = {["PASSENGER  1","CHILDREN  TICKET","35.00€"]}/>
            <PassengersInformation title = {["PASSENGER  2","CHILDREN","35.00€"]}/>

            <div className="w-full border-b-2 border-color: #1114154D my-[50px] hidden lg:inline md:inline"/>

            <MainTrip/>
            <AutoComplete/>
            <PassengersInformation title = {["PASSENGER  1","ADULT  TICKET","70.00€"]}/>
            <PassengersInformation title = {["PASSENGER  1","CHILDREN  TICKET","35.00€"]}/>
            <PassengersInformation title = {["PASSENGER  2","CHILDREN","35.00€"]}/>
            <div className="mx-auto pt-[36px] hidden lg:inline md:inline">
              <span className="text-neutral-900 text-base font-light font-['Manrope'] leading-[23.02px]">If you want to edit all seat information press the </span>
              <span className="text-neutral-900 text-base font-bold font-['Manrope'] leading-[23.02px]">edit</span>
              <span className="text-neutral-900 text-base font-light font-['Manrope'] leading-[23.02px]"> button</span>
            </div>
            <button className="w-[88px] h-12 px-6 py-3 rounded-md border border-amber-400 justify-center items-center gap-4  mx-auto mt-[19px] hidden lg:inline-flex md:inline-flex">
              <div className="justify-center items-center gap-[5.76px] flex">
                <div className="text-neutral-900 text-lg font-bold font-['Inter'] leading-[23.02px]">EDIT</div>
              </div>
            </button>

            <div className="w-full border-b-2 border-color: #1114154D my-[33px] hidden lg:inline md:inline"/>

            <div className="flex-row gap-12 mx-auto hidden lg:flex md:flex">
              <div className="text-neutral-900 text-2xl font-normal font-FiraSans leading-loose">Total Price:</div>
              <div className="text-sky-800 text-[32px] font-bold font-FiraSans leading-[42.02px]">380,00€</div>
            </div>
            <ContactUser/>
          </>
        )}
        {(currentStep === 4) &&(
          <>
            <PaymentStatus paySuccess = {paySucess}/>
            {/* <TitleBoard title = {["PASSENGERS INFORMATION","In order to complete the reservation, please type in all information."]}/> */}
          </>
        )}
        {currentStep !==4 ? (
          <button className="w-full h-12 px-6 py-3 bg-[#D5AD36] rounded-md justify-center items-center inline-flex mx-auto mb-[71px] mt-16 lg:w-auto" onClick={() => nextStep()}>
            <div className="justify-center items-center gap-[16px] flex">
              {currentStep === 1 &&(<div className="text-white text-lg font-bold font-['Inter'] leading-[23.02px]">SEAT SELECTION</div>)}
              {currentStep === 2 &&(<div className="text-white text-lg font-bold font-['Inter'] leading-[23.02px]">PASSENGERS INFO</div>)}
              {currentStep === 3 &&(<div className="text-white text-lg font-bold font-['Inter'] leading-[23.02px]">PROCEED TO PAYMENT</div>)}
              <img src="/assets/images/nextBtn.svg" alt=''/>
            </div>
          </button>
          ):(
          <button className="w-full h-12 px-6 py-3 bg-sky-800 rounded-md justify-center items-center inline-flex mx-auto mb-[71px] mt-16 lg:w-auto" onClick={() => initStep()}>
            <div className="justify-center items-center gap-[16px] flex">
              <div className="text-white text-lg font-bold font-['Inter'] leading-[23.02px]">BACK TO HOME</div>
            </div>
          </button>
        )
        }
        {/* <PassengersInformation />
        <SeatInformation />
        <VehicleTable /> */}
        {/* <div className='w-[934px] h-[88px] bg-white rounded-[20px] flex-col justify-start items-start inline-flex mt-14'>
          <div className='flex-col justify-center items-center gap-1 inline-flex'>
            <div className="text-center text-neutral-900 text-base font-light font-['Manrope'] leading-[23.02px]">
              Duration
            </div>
            <div className="text-sky-800 text-[22px] font-bold font-['Manrope'] leading-[23.02px]">
              03:45{' '}
            </div>
          </div>
        </div> */}
      </div>
      {(currentStep === 2 || currentStep === 3) &&(
        <FooterText/>
      )}
    </>
  )
}

export default BodyPan
