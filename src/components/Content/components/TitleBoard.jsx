import React from 'react';

function TitleBoard(props) {
    return (
        <div className='w-full flex flex-col mt-[40px]'>
            <span className='text-[#111415] text-[18px] sm:text-[36px] xl:text-[54px] text-center font-normal font-[Fira Sans] px-[24px] mx-auto'>
                {props.title[0]}
            </span>
            <span className='text-[#111415] text-[16px] text-center mx-auto px-[30px]'>
                {props.title[1]}
            </span>
        </div>
    );
}

export default TitleBoard;