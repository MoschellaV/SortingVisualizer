export const doMergeSort = async (s, handleAllButtons) => {
  var array = document.querySelectorAll(".bar");
  var speed = (700 / s) * 1.2;
  var left = 0;
  var right = array.length - 1;

  await mergeSort(array, left, right, speed);

  // turn bars green and enable buttons
  array.forEach(function (bar) {
    bar.style.backgroundColor = "green";
    handleAllButtons(false);
  });
};

const mergeSort = async (array, left, right, speed) => {
  if (left >= right) {
    return;
  }

  var mid = left + parseInt((right - left) / 2);

  await mergeSort(array, left, mid, speed);
  await mergeSort(array, mid + 1, right, speed);
  await merge(array, left, mid, right, speed);
};

const merge = async (array, left, mid, right, speed) => {
  // applies delay
  return new Promise((resolve) => {
    setTimeout(() => {
      var n1 = mid - left + 1;
      var n2 = right - mid;

      // temp arrays
      var Ltemp = new Array(n1);
      var Rtemp = new Array(n2);

      for (var i = 0; i < n1; i++) {
        Ltemp[i] = Number(array[left + i].getAttribute("value"));
      }
      for (var j = 0; j < n2; j++) {
        Rtemp[j] = Number(array[mid + 1 + j].getAttribute("value"));
      }
      // index of first sub array
      var i = 0;
      // index of second sub array
      var j = 0;
      // index of merged subarray
      var k = left;

      while (i < n1 && j < n2) {
        if (Ltemp[i] <= Rtemp[j]) {
          array[k].setAttribute("value", Ltemp[i]);
          array[k].style.height = `${Number(array[k].getAttribute("value"))}px`;

          i++;
        } else {
          array[k].setAttribute("value", Rtemp[j]);
          array[k].style.height = `${Number(array[k].getAttribute("value"))}px`;

          j++;
        }
        array[k].style.backgroundColor = "darkgreen";
        k++;
        array[k].style.backgroundColor = "red";
      }

      // copies elements of Ltemp
      while (i < n1) {
        array[k].setAttribute("value", Ltemp[i]);
        array[k].style.height = `${Number(array[k].getAttribute("value"))}px`;
        array[k].style.backgroundColor = "darkgreen";

        array[k].style.backgroundColor = "red";
        i++;
        k++;
      }

      // copies elements of Rtemp
      while (j < n2) {
        array[k].setAttribute("value", Rtemp[j]);
        array[k].style.height = `${Number(array[k].getAttribute("value"))}px`;
        array[k].style.backgroundColor = "darkgreen";

        array[k].style.backgroundColor = "red";
        j++;
        k++;
      }
      resolve("Resolved");
    }, speed);
  });
};
