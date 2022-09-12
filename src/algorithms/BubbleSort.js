export const bubbleSort = async (speed, handleAllButtons) => {
  var array = document.querySelectorAll(".bar");

  var i, j;
  var len = array.length;
  var isSwapped;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len - 1; j++) {
      array[j].style.backgroundColor = "orange";
      array[j + 1].style.backgroundColor = "red";

      // applies delay
      await new Promise((r) => setTimeout(r, speed));

      var value1 = Number(array[j].getAttribute("value"));
      var value2 = Number(array[j + 1].getAttribute("value"));

      // compares values
      if (value1 > value2) {
        // swaps bars
        array[j].parentNode.insertBefore(array[j + 1], array[j]);
        isSwapped = true;
        array = document.querySelectorAll(".bar");
      }

      array[j].style.backgroundColor = "#72ffff";
      array[j + 1].style.backgroundColor = "#72ffff";
    }

    array[len - 1].style.backgroundColor = "#72ffff";

    if (!isSwapped) {
      // turn bars green and enable buttons
      array.forEach(function (item) {
        item.style.backgroundColor = "green";
        handleAllButtons(false);
      });
      break;
    }
  }
};
