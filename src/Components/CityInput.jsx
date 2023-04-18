import React from 'react'
import { Images } from '../assets/Images/Images'


function CityInput(props) {
   
    const {select, handleHideShow, blurFun, rotate, click, handleClick , CityName} = props
    
    return (
        <>
            <div className="select-box relative w-[500px] m-auto">
                <input type="hidden" className='input' value={(select === 'Please Select City Name') ? '' : select} readOnly id='cityName' />
                <button type='button' onClick={handleHideShow} onBlur={blurFun} className={'input text-start flex flex-nowrap items-center justify-between bg-white'}>
                    <span className='text-black'>{select ? select : "Please Select City Name"}</span>
                    <img src={Images.DownArrow} className={'flex-shrink-0 ml-[5px] transition xs:w-[16px] w-[13px]'} style={{ transform: 'rotate(' + rotate + 'deg)' }} width={16} height={8} alt="Down Arrow" />
                </button>
                <ul className={'dropdownlist ' + click}>
                    {CityName.map((texts, index) => {
                        const addClass = (texts === select) ? "active text-primary" : "";
                        if (texts.CityName === select) {
                            return (
                                <li key={index} onClick={()=>{handleClick(texts.cityName, texts.temperature , texts.weatherType)}} className={' list-item cursor-pointer pb-4 last:pb-0'}><span className='text-small'>{texts.cityName}</span></li>

                            )
                        }
                        else {
                            return (

                                <li key={index} onClick={()=>{handleClick(texts.cityName, texts.temperature , texts.weatherType)}} className={'list-item cursor-pointer pb-4 last:pb-0'}><span className={'text-small '+ addClass}>{texts.cityName}</span></li>
                            )

                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export default CityInput