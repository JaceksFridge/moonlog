import React, { useState, useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'


const FormSlider = ({ sliderChange, stk }) => {

    const [slider, setSlider] = useLocalStorage(stk, 0)
    const [currentSlider, setCurrentSlider] = useState(slider)

    const sliderHandler = (event) => {
        const newSliderValue = event.target.value

        setSlider(newSliderValue)
        sliderChange(newSliderValue - currentSlider)

        setCurrentSlider(newSliderValue)
    }
    useEffect(() => {
        const valPercent = slider * 10
        const sliderStyle = document.querySelector(".the-slider")
        if(sliderStyle){
          sliderStyle.style.setProperty('--sliderValue', `${valPercent}%`);
        }
    }, [slider]);

    return (
        <div className="slider-container">
            <div className="hour-count">
            <h2
                className={slider > 0 ? "slider active" : ""}
            >
                {slider}</h2>
            <div className="small-slider">hours of work</div>
            </div>
            <h6 className="hour-desc">some explanation</h6>
            <div className="hour-slider">
            <input
                className="the-slider"
                type="range" 
                onChange={sliderHandler} 
                value={slider}
                min="0"
                max="10"
                step="0.5"
            />
            </div>
    </div>
    )
}

export default FormSlider
