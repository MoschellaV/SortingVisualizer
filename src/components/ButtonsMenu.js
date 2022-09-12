import React, { useState, useEffect } from "react";
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

  const updateTwo = (val) => {
    setSliderValue(val);
    setTemp(val);
  };

  useEffect(() => {
    makeNewArray();
  }, [temp]);

  const handleAllButtons = (x) => {
    setAllDisable(x);
  };

  const startAlgorithm = (e) => {
    switch (e.currentTarget.id) {
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

  return (
    <div>
      <div>
        <div>Items in array</div>
        <Slider
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
      <div>
        <div> Delay {speedSliderValue} ms</div>
        <Slider
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
      <Button disabled={allDisable} size="md" onClick={() => makeNewArray()}>
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
      <Button
        disabled={allDisable}
        id="selectionButton"
        size="md"
        onClick={startAlgorithm}
      >
        Selection Sort
      </Button>
      <Button
        disabled={allDisable}
        id="insertionButton"
        size="md"
        onClick={startAlgorithm}
      >
        Insertion Sort
      </Button>
      <Button
        disabled={allDisable}
        id="mergeButton"
        size="md"
        onClick={startAlgorithm}
      >
        Merge Sort
      </Button>
      <Button
        disabled={allDisable}
        id="quickButton"
        size="md"
        onClick={startAlgorithm}
      >
        Quick Sort
      </Button>
    </div>
  );
};
