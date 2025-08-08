import React, {
    Component,
    memo,
    useCallback,
    useState,
    useEffect,
    useMemo
  } from "react";
import { render } from "react-dom";
import { Helmet } from "react-helmet"
import './input-slider.css'

var data = '';
//var apiURL = "https://one.shahbaz.dev.jt.hostingshouse.com/curl.php";
// fetch(apiURL)
//     .then(response => response.text())
//     .then(text => {
//     //console.log(text);
//     //data = text;
// });

const RangeSlider = memo(
    ({ classes, label, onChange, value, ...sliderProps }) => {
      const [sliderVal, setSliderVal] = useState(0);
      const [mouseState, setMouseState] = useState(null);
  
      useEffect(() => {
        setSliderVal(value);
      }, [value]);
  
      const changeCallback = (e) => {
        setSliderVal(e.target.value);
      };
  
      useEffect(() => {
        if (mouseState === "up") {
          onChange(sliderVal);
        }
      }, [mouseState]);
      //console.log("RENDER");
      return (
        <div className="range-slider">
          <p>{label}</p>
          <h3>value: {sliderVal}</h3>
          <input
            type="range"
            value={sliderVal}
            {...sliderProps}
            className={`slider ${classes} inputslider`}
            id="myRange"
            onChange={changeCallback}
            onMouseDown={() => setMouseState("down")}
            onMouseUp={() => setMouseState("up")}
          />
        </div>
      );
    }
);

const PriceMain = () => {

    const [state, setState] = useState({
        sliderValue: 1000
    });

    const [sliderValue, setSliderValue] = useState(1000);

    const [parentVal, setParentVal] = useState(sliderValue);

    const sliderValueChanged = useCallback((val) => {
        //console.log("NEW VALUE", val);
        setSliderValue(val);
        setParentVal(val);
    });

    const textChange = (e) => {
        var value = e.target.value;
        setParentVal(value);
        setSliderValue(value);
    }

    const sliderProps = useMemo(
        () => ({
          min: 1000,
          max: 1000000,
          value: parentVal,
          step: 1,
          onChange: (e) => sliderValueChanged(e)
        }),
        [parentVal]
    );
    
    return (
        <div style={{textAlign: `center`}}>
            <h3>{sliderValue}</h3>
            <input type="text" name="sliderInput" id="sliderInput" value={sliderValue} onChange={textChange} />
            <RangeSlider {...sliderProps} classes="additional-css-classes" />
        </div>
    );
};

export default PriceMain;