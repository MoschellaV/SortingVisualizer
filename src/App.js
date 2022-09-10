import React, { useState, useEffect } from "react";
import "./css/App.css";
import { Slider, Button } from "@mantine/core";
import { BubbleSort } from "./algorithms/BubbleSort";

const generateRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const App = () => {
  const [allDisable, setAllDisable] = useState(false);
  const [sortArray, setSortArray] = useState([]);
  const [sliderValue, setSliderValue] = useState(80);
  const [speedSliderValue, setSpeedSliderValue] = useState(80);

  const handleAllButtons = (x) => {
    setAllDisable(x);
  };

  const makeNewArray = () => {
    setSortArray([]);
    document.querySelectorAll(".bar").forEach(function (item) {
      item.style.backgroundColor = "black";
    });
    for (let i = 0; i < sliderValue * 3.8 + 3; i++) {
      setSortArray((current) => [...current, generateRandomInteger(10, 350)]);
    }
  };
  const determineWidth = () => {
    const calculatedWidth = 170 / sliderValue;
    return `${calculatedWidth}px`;
  };

  useEffect(() => {
    makeNewArray();
  }, [sliderValue]);

  const startAlgorithm = (e) => {
    switch (e.currentTarget.id) {
      case "bubbleButton":
        handleAllButtons(true);
        BubbleSort(speedSliderValue, handleAllButtons);
        break;

      case "selectionButton":
    }
  };

  return (
    <>
      <div className="menu">
        Sorting Visualizer By Vince Moschella
        <div style={{ width: "300px" }}>
          Size of Array
          <Slider
            disabled={allDisable}
            label={null}
            value={sliderValue}
            onChange={(val) => {
              setSliderValue(val);
            }}
            size="lg"
            showLabelOnHover={false}
          />
          <div>
            Speed
            <Slider
              disabled={allDisable}
              label={null}
              min={1}
              value={speedSliderValue}
              onChange={(val) => {
                setSpeedSliderValue(val);
              }}
              size="lg"
              showLabelOnHover={false}
            />
          </div>
          <Button
            disabled={allDisable}
            size="md"
            onClick={() => makeNewArray()}
          >
            New Array
          </Button>
          <Button
            disabled={!allDisable}
            size="md"
            onClick={() => window.location.reload(true)}
          >
            Stop Algorithm
          </Button>
          <Button
            disabled={allDisable}
            id="bubbleButton"
            size="md"
            onClick={startAlgorithm}
          >
            Bubble Sort
          </Button>
        </div>
      </div>

      <div id="array" className="array-container">
        {sortArray.map((value, index) => (
          <div
            key={index}
            className="bar"
            value={value}
            style={{ height: `${value}px`, width: determineWidth() }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default App;
