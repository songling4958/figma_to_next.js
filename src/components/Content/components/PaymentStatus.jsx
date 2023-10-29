import React from "react";

function PaymentStatus(props) {

  return (
    <>
      {props.paySuccess ? (
        <div className="flex flex-col justify-center mx-auto">
          <div className="relative py-[100px] mx-auto">
            <img
              src="/assets/images/checkmark_success.svg"
              className="w-[140px] h-[140px]"
              alt=""
            />
          </div>
          <div className="text-sky-800 text-[54px] font-normal font-FiraSans leading-[70.90px] mx-auto">
            RESERVATION COMPLETED
          </div>
          <div className="text-neutral-900 text-xl font-normal font-['Manrope'] leading-7 pt-[39px] mx-auto">
            We sended a copy of your tickets to your e-mail. Don’t forget to check the spam folder.
          </div>
          <div className="text-neutral-900 text-xl font-normal font-['Manrope'] leading-7 pt-[26px] mx-auto">
            You can also download them by using the button below
          </div>
          <button className="w-fit h-[47.02px] px-6 py-[11.51px] bg-sky-800 rounded-md justify-center items-center gap-4 inline-flex mt-[39px]">
            <div className="justify-center items-center gap-[5.76px] flex">
              <span className="text-white text-lg font-bold font-['Inter'] leading-[23.02px]">
                DOWNLOAD TICKETS
              </span>
            </div>
          </button>
          <div className="mt-[49px] mx-auto">
            <span className="text-neutral-900 text-xl font-normal font-['Manrope'] leading-7">
              In case you want to send them to an other e-mail, enter it below
              and press{" "}
            </span>
            <span className="text-neutral-900 text-xl font-bold font-['Manrope'] leading-7">
              send
            </span>
            <span className="text-neutral-900 text-xl font-normal font-['Manrope'] leading-7">
              {" "}
              button
            </span>
          </div>
          <div className="w-full inline-flex flex-row items-center justify-between pt-[50px]">
            <div className="text-neutral-900 text-sm sm:text-lg md:text-xl font-normal font-['Manrope'] leading-7 pr-[19px] w-28">
              E-mail:
            </div>
            <div className="w-full h-[47px] bg-white rounded-[10px] shadow mr-[29px]"></div>
            <div className="w-24 h-12 px-6 py-3 rounded-md border border-amber-400 justify-center items-center gap-4 inline-flex">
              <div className="justify-center items-center gap-[5.76px] flex">
                <button className="text-neutral-900 text-sm sm:text-base md:text-lg font-bold font-['Inter'] leading-[23.02px]">
                  SEND
                </button>
              </div>
            </div>
          </div>
          <div className="text-sky-800 text-4xl lg:text-[54px] md:text-[54px] font-bold italic font-FiraSans leading-[70.90px] mt-[60px]">
            SEE YOU ON BOARD
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center">
          <div className="relative py-[100px] mx-auto">
            <img
              src="/assets/images/checkmark_fail.svg"
              className="w-[140px] h-[140px]"
              alt=""
            />
          </div>
          <div className="text-sky-800 text-[54px] font-normal font-FiraSans leading-[70.90px] mx-auto">
            RESERVATION UNSUCCESFULL
          </div>
          <div className="text-neutral-900 text-xl font-normal font-['Manrope'] leading-7 pt-[39px] justify-center mx-auto">
            A problem has occurred with the transaction. Please try again or use
            an other card.
          </div>
          <button className="w-fit h-[47.02px] px-6 py-[11.51px] bg-sky-800 rounded-md justify-center items-center gap-4 inline-flex mt-[39px] mx-auto">
            <div className="justify-center items-center gap-[5.76px] flex">
              <span className="text-white text-lg font-bold font-['Inter'] leading-[23.02px]">
                TRY AGAIN
              </span>
            </div>
          </button>
        </div>
      )}
    </>
  );
}

export default PaymentStatus;
