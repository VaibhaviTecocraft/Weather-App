import React, { useState } from 'react'

function SelectInput(props) {
    const [click, setClick] = useState('hidden')
    const [select, setSelect] = useState(((props.value === "") ? props.text : props.value))
    const [text, setText] = useState('text-placeHolder sm:text-small text-xSmall')
    const [rotate, setRotate] = useState('0')
    // const { onFocus, onBlur } = props;
    const handleHideShow = () => {
        if (click === 'hidden') {
            setClick('')
            setRotate(180)
        } else {
            setClick('hidden')
            setRotate(0)
        }
    }
    const blurFun = (e) => {

        setTimeout(() => {
            setClick('hidden')
            setRotate(0)
        }, 100);
    }
    const handleClick = (e) => {
        setTimeout(() => {
            setClick('hidden')
            setRotate(0)
            setText('text-black text-small')
            setSelect(e.target.innerText)

        }, 100);
    }
    return (
        <>
            <div className="select-box relative w-full">
                <input type="hidden" className='input' value={(select === 'Please Select plug') ? '' : select} readOnly required={props.required} id={props.id} />
                <button type='button' onClick={handleHideShow} onBlur={blurFun} className={'input text-start flex flex-nowrap items-center justify-between bg-white'}>
                    <span className={(props.value) ? 'text-black' : text} >{select}</span>
                    <img src='../assets/Images/down-arrow.png' className={'flex-shrink-0 ml-[5px] transition xs:w-[16px] w-[13px]'} style={{ transform: 'rotate(' + rotate + 'deg)' }} width={16} height={8} alt="Down Arrow" />
                </button>
                <ul className={'dropdownlist ' + click}>
                    {props.options.map((texts, index) => {
                        const newClass = (texts === select) ? "active text-primary" : "";
                        if (texts.className === select) {
                            return (
                                <li key={index} className={'list-item cursor-pointer pb-4 last:pb-0'} onClick={handleClick}><span className='text-small'>{texts}</span></li>
                            )
                        } else {
                            return (
                                <li key={index} className={'list-item cursor-pointer pb-4 last:pb-0'} onClick={handleClick}><span className={newClass + ' text-small'}>{texts}</span></li>
                            )
                        }
                    })}
                </ul>
            </div>
        </>
    )
}

export default SelectInput
