import React from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

export default function ChooseRouter (props) {
  const Data = [
    { week: 'Mon', day: 20, Mon: 'May' },
    { week: 'Tue', day: 21, Mon: 'May' },
    { week: 'Wed', day: 22, Mon: 'May' },
    { week: 'Thu', day: 23, Mon: 'May' },
    { week: 'Fri', day: 24, Mon: 'May' },
    { week: 'Sat', day: 25, Mon: 'May' },
    { week: 'Sun', day: 26, Mon: 'May' }
  ]

  return (
    <>
      <div className='w-full py-6 px-4 md:px-14 bg-white rounded-[20px] justify-between items-center gap-8 inline-flex mt-6 shadow'>
        <button onClick={() => Swiper.slidePrev()}>
          <img
            src='./assets/images/Vector.png'
            alt='Vector image'
            className=''
          />
        </button>
        <div className='w-full px-3 object-cover overflow-hidden'>
          <Swiper
            spaceBetween={20}
            breakpoints={{
              280: {
                slidesPerView: 1
              },
              460: {
                slidesPerView: 2
              },
              680: {
                slidesPerView: 3
              },
              1050: {
                slidesPerView: 5
              }
            }}
            onSlideChange={() => console.log('slide change')}// Get slide status when change
            onSwiper={swiper => console.log(swiper)}// Get slide status when change
            className='w-full flex flex-row'
          >
            {Data.map((item, i) => {
              return (
                <SwiperSlide
                  Key={i}
                  className={`${
                    i === Data.length - 1
                      ? ''
                      : 'border-r-[1px] border-r-[#a7a7a7]'
                  }  text-black w-full pr-2`}
                >
                  <span className='bg-white hover:bg-[#004E89] flex justify-center rounded-full'>
                    {item.week}. {item.day} {item.Mon}
                  </span>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <button onClick={() => Swiper.slideNext()}>
          <img
            src='./assets/images/Vector.png'
            alt='Vector image'
            className='rotate-180'
          />
        </button>
      </div>
    </>
  )
}
