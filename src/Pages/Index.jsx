import React, { useState } from 'react'
import CityInput from '../Components/CityInput'
import Container from '../Components/Container'
import { ReactComponent as CloudSunSvg } from '../assets/Images/CloudSun.svg'

function Index() {

    const tempJson = [
        {
            cityName: "Ahmedabad",
            temperature: "39",
            weatherType: "sunny"
        }
        , {
            cityName: "Surat",
            temperature: "38",
            weatherType: "High level clouds"
        }
        , {
            cityName: "Vadodara",
            temperature: "37",
            weatherType: "sunny"
        }
        , {
            cityName: "Rajkot",
            temperature: "37",
            weatherType: "Clear"
        }
        , {
            cityName: "Bhavnagar",
            temperature: "37",
            weatherType: "Mostly Cloudy"
        }
        , {
            cityName: "Jamnagar",
            temperature: "35",
            weatherType: "sunny"
        }
        , {
            cityName: "Gandhinagar",
            temperature: "39",
            weatherType: "sunny"
        }
        , {
            cityName: "Junagadh",
            temperature: "39",
            weatherType: "sunny"
        }
        , {
            cityName: "Gandhidham",
            temperature: "37",
            weatherType: "Mostly Cloudy"
        }
        , {
            cityName: "Anand",
            temperature: "41",
            weatherType: "sunny"
        }
        , {
            cityName: "Navsari",
            temperature: "38",
            weatherType: "Clear"
        }
        , {
            cityName: "Morbi",
            temperature: "39",
            weatherType: "sunny"
        }
        , {
            cityName: "Nadiad",
            temperature: "41",
            weatherType: "sunny"
        }
        , {
            cityName: "Surendranagar",
            temperature: "40",
            weatherType: "sunny"
        }
        , {
            cityName: "Bharuch",
            temperature: "40",
            weatherType: "sunny"
        }
        , {
            cityName: "Mehsana",
            temperature: "39",
            weatherType: "Mostly Cloudy"
        }
        , {
            cityName: "Bhuj",
            temperature: "38",
            weatherType: "Clear"
        }
        , {
            cityName: "Porbandar",
            temperature: "33",
            weatherType: "sunny"
        }
        , {
            cityName: "Palanpur",
            temperature: "38",
            weatherType: "sunny"
        }
        , {
            cityName: "Valsad",
            temperature: "36",
            weatherType: "sunny"
        }
        , {
            cityName: "Vapi",
            temperature: "37",
            weatherType: "Mostly Cloudy"
        }
        , {
            cityName: "Gondal",
            temperature: "40",
            weatherType: "sunny"
        }
        , {
            cityName: "Veraval",
            temperature: "34",
            weatherType: "sunny"
        }
        , {
            cityName: "Godhra",
            temperature: "39",
            weatherType: "Mostly Cloudy"
        }
        , {
            cityName: "Patan",
            temperature: "39",
            weatherType: "sunny"
        }
        , {
            cityName: "Kalol",
            temperature: "39",
            weatherType: "Clear"
        }
        , {
            cityName: "Dahod",
            temperature: "39",
            weatherType: "Mostly Cloudy"
        }
        , {
            cityName: "Botad",
            temperature: "41",
            weatherType: "sunny"
        }
        , {
            cityName: "Amreli",
            temperature: "39",
            weatherType: "sunny"
        }
        , {
            cityName: "Deesa",
            temperature: "38",
            weatherType: "Mostly Cloudy"
        }
        , {
            cityName: "Jetpur",
            temperature: "41",
            weatherType: "sunny"
        }
    ]
    // console.log(tempJson);

    // const CityName = ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Gandhidham", "Anand", "Navsari", "Morbi", "Nadiad", "Surendranagar", "Bharuch", "Mehsana", "Bhuj", "Porbandar", "Palanpur", "Valsad", "Vapi", "Gondal", "Veraval", "Godhra", "Patan", "Kalol", "Dahod", "Botad", "Amreli", "Deesa", "Jetpur"]
    const [click, setClick] = useState('hidden')
    const [rotate, setRotate] = useState('0')
    const [select, setSelect] = useState("")
    const [selectTemp, setSelectTemp] = useState("")
    const [tempType, setTempType] = useState("")
    const handleHideShow = (e) => {
        
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
        }, 300);
    }
    const handleClick = (item,temp , type) => {
        console.log(item, temp);
        setTimeout(() => {
            setClick('hidden')
            setRotate(0)
            setSelectTemp(temp)
            setTempType(type)
            setSelect(item)
            // console.log(e.target.innerText);
        }, 100);
    }

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    const current = new Date();
    const date = `${days[current.getDay()]} ${current.getDate()} ${months[current.getMonth()]} ${current.getFullYear()}`;

    return (
        <>
            <div className="bg-bgImg bg-cover bg-top bg-no-repeat flex items-center flex-wrap justify-center h-full p-20">
                <Container>
                    <div className='bg-white bg-opacity-40 rounded-15 px-10 py-20 my-28 shadow-dropdown'>
                        <div className="">
                            <div className="flex justify-center w-full">
                                <h1 className='text-blogHeading1 pb-5 flex items-center'>
                                    <CloudSunSvg className='w-[200px] h-[200px]' />
                                    Weather Forecast</h1>
                            </div>
                            <CityInput CityName={tempJson} value="" select={select} handleHideShow={handleHideShow} blurFun={blurFun} rotate={rotate} click={click} handleClick={handleClick} />
                        </div>
                        <div className="text-center">
                            <div className="location pt-5 mb-2">
                                <h3 className="city text-heading2 text-center w-full">{select ? select : "Surat"}</h3>
                                <div className="date text-black mb-2">{date}</div>
                                <div className="temp text-black mb-2 text-blogHeading1 font-RobotoMedium" style={{ filter: "drop-shadow(2px 5px rgb(0, 0, 0, 0.6))" }}>{(selectTemp ? selectTemp: "35") } <span className='text-black'>&#8451;</span></div>
                                <div className="weather text-black">{(tempType ? tempType : "sunny")}</div>
                            </div>
                        </div>
                        {/* <button onClick={fectapi}>Log</button> */}
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Index