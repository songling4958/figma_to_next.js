import React from 'react'

function Header (props) {
  return (
    <>
      <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-4 bg-white'>
        <marquee behavior='' direction=''>
          <div className='flex gap-[8px] items-center w-full'>
            <p className='text-theme-secondary'>ANNOUNCEMENT</p>
            <p className='text-theme-secondary'>ANNOUNCEMENT</p>
            <p className='text-theme-secondary'>ANNOUNCEMENT</p>
          </div>
        </marquee>
        <div className='hidden items-center justify-between lg:flex'>
          <div className='flex items-center gap-[84px]'>
            <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_0_1059)'>
                <path
                  d='M5.20188 0.693758C6.47583 4.21657 8.46806 7.23167 11.6049 9.36155C12.7594 10.1716 14.027 10.8072 15.3667 11.248C20.2657 12.7654 23.0845 16.2058 24.6493 20.8512C25.0879 22.1916 25.3644 23.5798 25.473 24.986C25.3681 24.7746 25.2433 24.5711 25.1604 24.3522C23.3098 19.5054 19.8659 16.1866 15.0302 14.4593C10.1944 12.7321 7.39387 9.27329 5.88408 4.58901C5.48466 3.34773 5.26941 2.0526 4.97415 0.77074L5.20188 0.693758Z'
                  fill='#005C8A'
                ></path>
                <path
                  d='M24.8183 29.1585C24.3729 28.1693 24.0056 27.27 23.5666 26.4019C21.538 22.384 18.3005 19.7207 14.0892 18.2251C12.0682 17.5087 10.1796 16.573 8.72524 14.9772C6.09813 12.0815 4.84788 8.59022 4.50941 4.73022C4.70729 5.27432 4.90281 5.81994 5.10305 6.36251C6.69261 10.6943 9.56867 13.8018 14.0172 15.2326C20.3163 17.2661 24.7735 24.0355 24.8183 29.1585Z'
                  fill='#005C8A'
                ></path>
              </g>
              <defs>
                <clipPath id='clip0_0_1059'>
                  <rect
                    width='25.3658'
                    height='23.7099'
                    fill='white'
                    transform='translate(5 0.650391) rotate(12.124)'
                  ></rect>
                </clipPath>
              </defs>
            </svg>
            <div className='flex items-center gap-5'>
              <p className='text-theme-black'>
                Show <span className='font-bold text-theme-secondary'>2</span>{' '}
                more announcements
              </p>
              <svg
                width='17'
                height='22'
                viewBox='0 0 17 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle cx='8.5' cy='11.5' r='8.5' fill='#005C8A'></circle>
                <path
                  d='M7.92 14.864V11.904H4.96V10.56H7.92V7.616H9.264V10.56H12.216V11.904H9.264V14.864H7.92Z'
                  fill='white'
                ></path>
              </svg>
            </div>
          </div>
          <div className='flex items-center gap-3'>
            <button className='flex items-center gap-1'>
              <span className='text-xs text-theme-secondary'>Help</span>
              <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12.0476 16.2035C12.0476 15.7528 12.0678 15.3569 12.1083 15.016C12.1545 14.6693 12.2701 14.3226 12.455 13.9759C12.6283 13.6465 12.8421 13.3749 13.0964 13.1611C13.3506 12.9415 13.6164 12.7364 13.8938 12.5457C14.1712 12.3493 14.4341 12.1181 14.6826 11.8523C14.9079 11.5923 15.0582 11.3294 15.1333 11.0636C15.2084 10.7977 15.246 10.5175 15.246 10.2228C15.246 9.92809 15.2084 9.66517 15.1333 9.43404C15.0639 9.2029 14.9541 9.00354 14.8039 8.83597C14.5728 8.55283 14.2896 8.35925 13.9545 8.25524C13.6193 8.15122 13.2697 8.09922 12.9057 8.09922C12.5474 8.09922 12.2123 8.15122 11.9002 8.25524C11.594 8.35347 11.3397 8.5066 11.1375 8.71462C10.941 8.89953 10.7966 9.122 10.7041 9.38203C10.6174 9.64206 10.5741 9.91654 10.5741 10.2055H9.25661C9.27972 9.74896 9.37796 9.30402 9.55131 8.87064C9.73044 8.43148 9.99047 8.06455 10.3314 7.76985C10.6723 7.45781 11.0681 7.23245 11.5189 7.09377C11.9754 6.94931 12.4347 6.87708 12.897 6.87708C13.4633 6.87708 14.0007 6.96376 14.5092 7.13711C15.0177 7.30468 15.4453 7.58783 15.792 7.98654C16.0694 8.28124 16.2716 8.61928 16.3988 9.00065C16.5317 9.37625 16.5981 9.77785 16.5981 10.2055C16.5981 10.6851 16.5085 11.1358 16.3294 11.5576C16.1503 11.9794 15.8989 12.355 15.5753 12.6844C15.3789 12.8982 15.1564 13.0976 14.9079 13.2825C14.6594 13.4616 14.4196 13.6494 14.1885 13.8459C13.9631 14.0366 13.7898 14.2446 13.6684 14.4699C13.5182 14.7473 13.4344 15.0102 13.4171 15.2587C13.4055 15.5072 13.3997 15.8221 13.3997 16.2035H12.0476ZM12.0563 19.6099V17.911H13.3997V19.6099H12.0563Z'
                  fill='#004E89'
                ></path>
                <rect
                  x='0.304878'
                  y='0.304878'
                  width='24.3902'
                  height='24.3902'
                  rx='12.1951'
                  stroke='#004E89'
                  stroke-width='0.609756'
                ></rect>
              </svg>
            </button>
            <div className='relative'>
              <button className='bg-[#D9D9D9] w-[96px] h-[43px] flex flex-col items-center justify-between rounded-b-[14.47px] relative shadow-xl'>
                <div className='flex items-center justify-center gap-2 pt-1'>
                  <span className='text-theme-secondary text-sm'>EN</span>
                  <img src='/assets/images/en.png' />
                </div>
                <div className='w-full bg-white flex justify-center py-[4px] rounded-b-[14.47px]'>
                  <svg
                    width='9'
                    height='6'
                    viewBox='0 0 9 6'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 1L4.4476 5L0.895193 1'
                      stroke='#236D94'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    ></path>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <header className='bg-sky-color'>
        <div className='flex items-center justify-between'>
          <div
            className='bg-white h-[108px] w-[356px]'
            style={{
              clipPath: 'polygon(0px 0px, 80% 0%, 100% 100%, 0% 100%)'
            }}
          >
            <a className='h-full w-full flex items-center pl-3' href='/'>
              <img src='/assets/images/Logo.png' />
            </a>
          </div>
          <nav className='hidden lg:flex '>
            <ul className='flex items-center lg:gap-[22px]'>
              <a
                className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:bg-yellow-300 after:transition-all after:duration-150 after:hover:w-full"
                href='/reservations'
              >
                Online Reservations
              </a>
              <a
                className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:bg-yellow-300 after:transition-all after:duration-150 after:hover:w-full"
                href='/routes'
              >
                Routes
              </a>
              <a
                className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:bg-yellow-300 after:transition-all after:duration-150 after:hover:w-full"
                href='/offers'
              >
                Offers
              </a>
              <a
                className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:bg-yellow-300 after:transition-all after:duration-150 after:hover:w-full"
                href='/destinations'
              >
                Destinations
              </a>
              <a
                className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:bg-yellow-300 after:transition-all after:duration-150 after:hover:w-full"
                href='/our-fleet'
              >
                Our Fleet
              </a>
              <a
                className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:bg-yellow-300 after:transition-all after:duration-150 after:hover:w-full"
                href='/golden-miles'
              >
                Golden Miles
              </a>
              <a
                className="text-white relative after:content-[''] after:absolute after:h-[2px] after:w-0 after:left-0 after:bottom-0 after:bg-yellow-300 after:transition-all after:duration-150 after:hover:w-full"
                href='/e-ticket'
              >
                E-Ticket
              </a>
            </ul>
          </nav>
          <div className='flex items-center pr-10 lg:pr-0 gap-[14px]'>
            <button>
              <svg
                width='61'
                height='63'
                viewBox='0 0 61 63'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0.306042 21.1265C5.94172 24.1517 11.9115 25.7127 18.3269 24.8435C20.7179 24.5567 23.0537 23.9195 25.2591 22.9523C33.2161 19.2956 40.7213 20.4548 48.0066 24.5751C50.0923 25.7789 52.0264 27.228 53.7677 28.8916C53.3934 28.7425 53.0027 28.6261 52.6477 28.4425C44.7696 24.3918 36.6084 24.0999 28.4927 27.4178C20.377 30.7357 12.8738 29.5324 5.6142 25.2997C3.69131 24.1774 1.94112 22.7766 0.104352 21.484L0.306042 21.1265Z'
                  fill='white'
                ></path>
                <path
                  d='M57.6928 34.9416C55.9988 34.1921 54.5066 33.4678 52.959 32.865C45.7996 30.0708 38.6481 30.3769 31.5902 33.2773C28.2046 34.6708 24.7373 35.6347 21.0693 35.2645C14.4287 34.5792 8.85907 31.567 4.02802 27.0466C4.89986 27.5126 5.77045 27.9832 6.64355 28.4445C13.6028 32.1382 20.8013 32.8089 28.0869 29.5557C38.4117 24.9586 51.795 28.4811 57.6928 34.9416Z'
                  fill='white'
                ></path>
                <path
                  d='M60.4178 41.8181C58.7238 41.0686 57.2316 40.3443 55.684 39.7415C48.5246 36.9473 41.3732 37.2533 34.3152 40.1537C30.9297 41.5473 27.4623 42.5112 23.7943 42.1409C17.1538 41.4557 11.5841 38.4435 6.75305 33.9231C7.6249 34.3891 8.49548 34.8597 9.36859 35.321C16.3278 39.0147 23.5263 39.6854 30.812 36.4322C41.1368 31.8351 54.5201 35.3576 60.4178 41.8181Z'
                  fill='white'
                ></path>
              </svg>
              <span className='text-white '>Menu</span>
            </button>
            <button className='w-[96px] bg-[#1114154d] py-[30px] font-light text-white hidden lg:flex px-[12px]'>
              WEB <br />
              CHECK-IN
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
