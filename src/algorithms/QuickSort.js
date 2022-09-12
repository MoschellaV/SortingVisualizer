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

      await swap(array, i, j, speed);
      array[i].style.backgroundColor = "#72ffff";
    }

    array[j].style.backgroundColor = "#72ffff";
  }

  await swap(array, i + 1, high, speed);
  return i + 1;
};

async function swap(array, i, j, speed) {
  return new Promise((resolve) => {
    setTimeout(() => {
      // await new Promise((r) => setTimeout(r, speed));
      console.log("s");

      // swap values
      let temp = Number(array[i].getAttribute("value"));
      array[i].setAttribute("value", Number(array[j].getAttribute("value")));
      array[j].setAttribute("value", temp);

      // swap bar heights
      array[i].style.height = `${Number(array[i].getAttribute("value"))}px`;
      array[j].style.height = `${Number(array[j].getAttribute("value"))}px`;
      resolve("Resolved");
    }, speed);
  });
}
