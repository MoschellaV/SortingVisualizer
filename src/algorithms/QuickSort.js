export const doQuickSort = async (speed, handleAllButtons) => {
  var array = document.querySelectorAll(".bar");
  var len = array.length - 1;

  await quickSort(array, 0, len, speed);

  array.forEach(function (bar) {
    bar.style.backgroundColor = "green";
    handleAllButtons(false);
  });
};

const quickSort = async (array, low, high, speed) => {
  if (low < high) {
    let pi = await partition(array, low, high, speed);

    await quickSort(array, low, pi - 1);
    await quickSort(array, pi + 1, high);
  }
};

const partition = async (array, low, high, speed) => {
  let pivot = Number(array[high].getAttribute("value"));

  let i = low - 1;

  for (let j = low; j <= high - 1; j++) {
    array[j].style.backgroundColor = "red";

    if (Number(array[j].getAttribute("value")) < pivot) {
      i++;
      array[i].style.backgroundColor = "orange";

      swap(array, i, j);

      await new Promise((r) => setTimeout(r, speed));
      array[i].style.backgroundColor = "black";
    }

    array[j].style.backgroundColor = "black";
  }
  swap(array, i + 1, high);

  return i + 1;
};

function swap(array, i, j) {
  // swap values
  let temp = Number(array[i].getAttribute("value"));
  array[i].setAttribute("value", Number(array[j].getAttribute("value")));
  array[j].setAttribute("value", temp);

  // swap bar heights
  array[i].style.height = `${Number(array[i].getAttribute("value"))}px`;
  array[j].style.height = `${Number(array[j].getAttribute("value"))}px`;
}
