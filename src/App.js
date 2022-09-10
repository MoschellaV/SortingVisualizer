import React, { useState, useEffect } from "react";
import "./css/App.css";
import { Slider, Button } from "@mantine/core";

const generateRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const App = () => {
  const [sortArray, setSortArray] = useState([]);
  const [sliderValue, setSliderValue] = useState(80);

  const makeNewArray = () => {
    setSortArray([]);
    for (let i = 0; i < sliderValue * 3.8 + 3; i++) {
      setSortArray((current) => [...current, generateRandomInteger(10, 350)]);
    }
  };
  const determineWidth = () => {
    const diff = sliderValue - 5;
    const calculatedWidth = 170 / sliderValue;
    return `${calculatedWidth}px`;
  };

  useEffect(() => {
    makeNewArray();
  }, [sliderValue]);

  return (
    <>
      {console.log(sliderValue)}
      <div className="menu">
        Sorting Visualizer By Vince Moschella
        <div style={{ width: "300px" }}>
          <Slider
            label={null}
            value={sliderValue}
            onChange={(val) => {
              setSliderValue(val);
            }}
            size="lg"
            showLabelOnHover={false}
          />
          <Button size="md" onClick={() => makeNewArray()}>
            New Array
          </Button>
        </div>
      </div>

      <div className="array-container">
        {sortArray.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{ height: `${value}px`, width: determineWidth() }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default App;
