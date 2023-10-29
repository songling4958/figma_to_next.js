import React from 'react';

function MainTrip(props) {
    return (
        <div className='flex flex-col items-center sm:items-start'>
            <div className='flex flex-row gap-3 justify-start'>
            <span className='text-neutral-900 text-2xl font-normal leading-loose'>
                Main Trip{' '}
            </span>
            <span className='text-neutral-900 text-2xl font-bold leading-loose'>
                Departure
            </span>
            </div>
            <div className='flex flex-row gap-2 items-center mt-2 font-manrope'>
                <div className='text-neutral-900 text-base font-light'>
                    [RAF] Rafina
                </div>
                <div className=' w-[25px]'>
                    <img
                    src='/assets/images/Group 85.png'
                    alt='ImageGroup image'
                    className=''
                    />
                </div>
                <div className='text-neutral-900 text-base font-light'>
                    {' '}
                    [SANT] Santorini
                </div>
            </div>
        </div>
    );
}

export default MainTrip;