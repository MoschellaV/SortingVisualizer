export const insertionSort = async (s, handleAllButtons) => {
  var speed = (700 / s) * 1.2;
  var array = document.querySelectorAll(".bar");
  var len = array.length;

  for (var i = 1; i < len; i += 1) {
    array[i].style.backgroundColor = "red";

    let current = Number(array[i].getAttribute("value"));
    // The last element of our sorted subarray
    let j = i - 1;
    await new Promise((r) => setTimeout(r, speed));

    while (j > -1 && current < Number(array[j].getAttribute("value"))) {
      array[j].style.backgroundColor = "darkgreen";

      // change the value of the bars
      var temp = array[j].getAttribute("value");
      array[j].setAttribute("value", array[j + 1].getAttribute("value"));
      array[j + 1].setAttribute("value", temp);

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
  array.forEach(function (bar) {
    bar.style.backgroundColor = "green";
    handleAllButtons(false);
  });
};
