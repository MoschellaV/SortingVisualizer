export const insertionSort = async (s, handleAllButtons) => {
  var speed = (700 / s) * 1.2;
  var array = document.querySelectorAll(".bar");
  var len = array.length;

  for (var i = 1; i < len; i += 1) {
    array[i].style.backgroundColor = "red";

    let current = Number(array[i].getAttribute("value"));
    // The last element of our sorted subarray
    let j = i - 1;

    while (j > -1 && current < Number(array[j].getAttribute("value"))) {
      array[j].style.backgroundColor = "orange";

      // applies delay
      await new Promise((r) => setTimeout(r, speed));

      // change the value of the bars
      var temp = array[j].getAttribute("value");
      array[j].setAttribute("value", array[j + 1].getAttribute("value"));
      array[j + 1].setAttribute("value", temp);
      array[j].style.backgroundColor = "black";

      // change the height of the bars
      [array[j].style.height, array[j + 1].style.height] = [
        array[j + 1].style.height,
        array[j].style.height,
      ];
      // decrease j
      j--;
    }
    array[j + 1].setAttribute("value", current);
    array[i].style.backgroundColor = "black";
  }
  // turn bars green and enable buttons
  array.forEach(function (bar) {
    bar.style.backgroundColor = "green";
    handleAllButtons(false);
  });
};
