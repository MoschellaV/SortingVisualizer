import React, { useState, useEffect } from "react";
import "../css/ButtonsMenu.css";
import { Slider, Button } from "@mantine/core";
import { bubbleSort } from "../algorithms/BubbleSort";
import { selectionSort } from "../algorithms/SelectionSort";
import { insertionSort } from "../algorithms/InsertionSort";
import { doMergeSort } from "../algorithms/MergeSort";
import { doQuickSort } from "../algorithms/QuickSort";

export const ButtonsMenu = ({ makeNewArray, sliderValue, setSliderValue }) => {
  const [allDisable, setAllDisable] = useState(false);
  const [speedSliderValue, setSpeedSliderValue] = useState(100);
  const [temp, setTemp] = useState(25);
  const [sortingMethod, setSortingMethod] = useState("");

  const updateTwo = (val) => {
    setSliderValue(val);
    setTemp(val);
  };

  useEffect(() => {
    makeNewArray();
  }, [temp]);

  const handleAllButtons = (x) => {
    setAllDisable(x);
    const allButtons = document.getElementsByClassName(
      "sorting-algorithms-button-container"
    );
    for (let button of allButtons) {
      button.style.backgroundColor = "#373A40";
    }
  };

  const startAlgorithm = (sortingMethod) => {
    switch (sortingMethod) {
      case "bubbleButton":
        handleAllButtons(true);
        bubbleSort(speedSliderValue, handleAllButtons);
        break;

      case "selectionButton":
        handleAllButtons(true);
        selectionSort(speedSliderValue, handleAllButtons);
        break;

      case "insertionButton":
        handleAllButtons(true);
        insertionSort(speedSliderValue, handleAllButtons);
        break;

      case "mergeButton":
        handleAllButtons(true);
        doMergeSort(speedSliderValue, handleAllButtons);
        break;

      case "quickButton":
        handleAllButtons(true);
        doQuickSort(speedSliderValue, handleAllButtons);
        break;
      default:
        console.log("default case");
    }
  };

  const selectedButton = (e) => {
    const allButtons = document.getElementsByClassName(
      "sorting-algorithms-button-container"
    );

    for (let button of allButtons) {
      console.log("dis");
      button.style.backgroundColor = "#1971c2";
    }

    setSortingMethod(e.currentTarget.id);
    document.getElementById(e.currentTarget.id).style.backgroundColor =
      "#2F9E44";
  };

  return (
    <div>
      <div className="slider-container">
        <div>Items in array</div>
        <Slider
          // color="indigo"
          disabled={allDisable}
          label={null}
          min={7}
          max={100}
          value={temp}
          onChange={(val) => {
            updateTwo(val);
          }}
          size="lg"
          showLabelOnHover={false}
        />
      </div>
      <div className="slider-container">
        <div> Delay {speedSliderValue} ms</div>
        <Slider
          // color="indigo"
          disabled={allDisable}
          label={null}
          min={1}
          max={1000}
          value={speedSliderValue}
          onChange={(val) => {
            setSpeedSliderValue(val);
          }}
          size="lg"
          showLabelOnHover={false}
        />
      </div>
      <Button
        className="button-container"
        fullWidth
        disabled={allDisable}
        size="sm"
        onClick={() => makeNewArray()}
      >
        Generate New Array
      </Button>
      <Button
        className="button-container"
        color="red"
        fullWidth
        disabled={!allDisable}
        size="sm"
        onClick={() => window.location.reload(true)}
      >
        Stop Algorithm
      </Button>
      <Button
        className="sorting-algorithms-button-container "
        disabled={allDisable}
        id="bubbleButton"
        size="sm"
        onClick={(e) => selectedButton(e)}
      >
        Bubble
      </Button>
      <Button
        className="sorting-algorithms-button-container "
        disabled={allDisable}
        id="selectionButton"
        size="sm"
        onClick={(e) => selectedButton(e)}
      >
        Selection
      </Button>
      <Button
        className="sorting-algorithms-button-container "
        disabled={allDisable}
        id="insertionButton"
        size="sm"
        onClick={(e) => selectedButton(e)}
      >
        Insertion
      </Button>
      <Button
        className="sorting-algorithms-button-container "
        disabled={allDisable}
        id="mergeButton"
        size="sm"
        onClick={(e) => selectedButton(e)}
      >
        Merge
      </Button>
      <Button
        className="sorting-algorithms-button-container "
        disabled={allDisable}
        id="quickButton"
        size="sm"
        onClick={(e) => selectedButton(e)}
      >
        Quick
      </Button>
      <Button
        className="button-container"
        color="yellow"
        fullWidth
        disabled={allDisable}
        id="quickButton"
        size="sm"
        onClick={() => startAlgorithm(sortingMethod)}
      >
        Sort
      </Button>
    </div>
  );
};
