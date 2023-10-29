import React, {useState} from 'react';

function AutoComplete(props) {

    const [autoCheck, setAutoCheck] = useState(false);

    const changeAuto = () => {
        setAutoCheck(!autoCheck);
    }

    return (
        <div className="flex lg:flex-row md:flex-row gap-7 mt-7 flex-col justify-start items-center sm:items-start">
            <div>
                <span className="color: '#111415', fontSize: 20, fontFamily: 'Manrope', fontWeight: '700', wordWrap: 'break-word'">Autocomplete fields</span>
                <span className="color: '#111415', fontSize: 20, fontFamily: 'Manrope', fontWeight: '400', lineHeight: 27.72, wordWrap: 'break-word'"> from Main Departure Trip</span>
            </div>
            <div className="w-[71px] h-[27px] pr-1 pt-0.5 pb-px justify-start items-center gap-2 inline-flex">

                {autoCheck && (
                    <div onClick={() => changeAuto()}>
                        <div className="w-8 h-5 p-0.5 bg-amber-400 rounded-[120px] shadow justify-end items-center inline-flex">
                            <div className="w-4 h-4 bg-white rounded-[100px]" />
                        </div>
                        <span className="text-neutral-900 text-base font-bold font-['Manrope'] leading-[23.02px] pl-[5px]">Yes</span>
                    </div>
                )}
                {!autoCheck && (
                    <div onClick={() => changeAuto()}>
                        <div className="w-8 h-5 p-0.5 bg-gray-400 rounded-[120px] shadow justify-start items-center inline-flex">
                            <div className="w-4 h-4 bg-white rounded-[100px]" />
                        </div>
                        <span className="text-neutral-900 text-base font-bold font-['Manrope'] leading-[23.02px] pl-[5px]">No</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AutoComplete;