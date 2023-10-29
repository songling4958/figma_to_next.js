import React from 'react';
import SubBoard from './SubBoard';

function MainBoard(props) {
    return (
        <div className="h-full ">
            <section className="pt-[90px] pb-[58px] px-6">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <h2 className="text-[24px] sm:text-[42px] lg:text-[54px] font-fira font-normal text-white">YOU SEARCHED FOR</h2>
                    </div>
                    <div className="lg:w-11/12 mx-auto">
                        <div className="grid grid-cols-1 lg:items-center lg:grid-cols-[450px_1fr_197px] py-[50px] text-center lg:text-start">
                            <ul className="lg:pr-[60px] pb-3 lg:pb-0">
                                <li className="text-[20px] text-white font-normal">Main Departure port: <span className="font-bold">[RAF] RAFINA</span></li>
                                <li className="text-[20px] text-white font-normal">Main Destination port: <span className="font-bold">[SANT] SANTORINI</span></li>
                            </ul>
                            <ul className="lg:border-l-[1px] lg:border-r-[1px] border-l-white border-r-white lg:px-[67px] py-3 lg:py-0 border-t-white relative after:content-[''] after:h-[1px] after:w-[63px] after:bg-white after:absolute after:top-0 after:left-1/2 after:transform after:-translate-x-1/2 after:lg:hidden before:content-[''] before:h-[1px] before:w-[63px] before:bg-white before:absolute before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:lg:hidden">
                                <li className="text-[20px] text-white font-normal ">Departure date: <span className="font-bold">22 MAY 2023</span></li>
                                <li className="text-[20px] text-white font-normal">Return date: <span className="font-bold">23 MAY 2023</span></li>
                            </ul>
                            <ul className="lg:pl-[67px] pt-3 lg:pt-0">
                                <li className="text-[20px] text-white font-normal">Passengers: <span className="font-bold">5</span></li>
                                <li className="text-[20px] text-white font-normal">Vehicles: <span className="font-bold">1</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-[17.27px] text-white font-blod border border-white hover:bg-white hover:text-black transtion-all duration-300 ease-in-out h-[48px] px-[24px] py-3 w-full lg:w-auto">NEW SEARCH</button>
                    </div>
                </div>
            </section>
            <SubBoard/>
        </div>
    );
}

export default MainBoard;