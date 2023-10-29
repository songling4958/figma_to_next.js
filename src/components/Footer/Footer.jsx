import React from 'react'

function Footer (props) {
  return (
    <>
      <footer className=''>
        <div className='flex items-center justify-end'>
          <div
            className='bg-white w-[370px] h-[60px] sm:w-[665px] sm:h-[80px] md:h-[108px] md:w-[856px]'
            style={{
              clipPath: 'polygon(100% 0%, 15% 0%, 0% 100%, 100% 100%)'
            }}
          >
            <a
              className='h-full w-full flex justify-center items-center pl-3'
              href='/'
            >
              <img src='/assets/images/bottom_img.png' alt=''/>
            </a>
          </div>
        </div>
      </footer>
      <div className='w-full h-full bg-sky-color text-white z-10 relative'>
        <div className="pt-[33px] text-2xl font-normal font-['Fira Sans'] leading-none md:leading-loose flex items-center text-center justify-center px-10">
          Discover the most Golden Star Destinations: Andros, Tinos, Paros, Ios,
          Mykonos, Santorini
        </div>

        <div className='flex flex-col lg:flex-row justify-center lg:pt-14'>
          <div className='inline-flex justify-center flex-1 border-b-4 lg:border-b-0 lg:border-r-4 py-6'>
            <div className=''>
              <div className="text-lg font-bold font-['Manrope']">
                Follow us at social:
              </div>
              <div className='inline-flex pt-8 gap-3'>
                <img src='/assets/images/Facebook.svg' alt='' />
                <img src='/assets/images/Instagram.svg' alt='' />
                <img src='/assets/images/YouTube.svg' alt='' className='w-[44px]'/>
              </div>
              <img className='pt-11' src='/assets/images/securi_btn.png' alt=''/>
            </div>
          </div>
          <div className='inline-flex justify-center flex-1 border-b-4 lg:border-b-0 lg:border-r-4 py-6'>
            <div className='text-center'>
              <div className="text-lg font-bold font-['Manrope']">
                Contact Information:
              </div>
              <div className='text-center pt-4'>
                <div className=''>Ε-mail: booking@goldenstarferries.gr</div>
                <div className=''>Informations: 212 222 4000</div>
              </div>
              <div className="text-lg font-bold font-['Manrope'] pt-4">
                Agencies:
              </div>
              <div className='text-center'>
                <div className=''>
                  Rafina, Andros, Tinos, Paros,Ios, Mykonos, Santorini
                </div>
              </div>
            </div>
          </div>
          <div className='inline-flex justify-center flex-1 py-6'>
            <div className='text-center lg:text-right'>
              <div className="text-lg font-bold font-['Manrope']">
                Useful Links:
              </div>
              <div className='flex-col justify-center items-center lg:items-end inline-flex'>
                <div className='flex-col justify-start items-start gap-0.5 flex'>
                  <div className="text-base font-normal font-['Manrope']">
                    Online Bookings
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-0.5 flex'>
                  <div className="text-base font-normal font-['Manrope']">
                    Web Check-In
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-0.5 flex'>
                  <div className="text-base font-normal font-['Manrope']">
                    Ticket Terms
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-0.5 flex'>
                  <div className="text-base font-normal font-['Manrope']">
                    Destinations
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-0.5 flex'>
                  <div className="text-base font-normal font-['Manrope']">
                    Sitemap
                  </div>
                </div>
                <div className='flex-col justify-start items-start gap-0.5 flex'>
                  <div className="text-base font-normal font-['Manrope']">
                    Agencies
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full flex flex-col items-center justify-center gap-3 md:flex-row py-6 text-[16px] mx-auto px-10 border-t-2 mt-5'>
          <div className='w-full mx-auto text-center md:text-end'>
            Privacy Policy | Port Authorities
          </div>
          <div className='w-full mx-auto text-center md:text-start'>
            2023 Copyright | Powered By.
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
