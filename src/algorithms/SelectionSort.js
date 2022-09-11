export const selectionSort = async (s, handleAllButtons) => {
  var speed = (700 / s) * 1.2;
  var array = document.querySelectorAll(".bar");

  var len = array.length;

  for (let i = 0; i < len; i++) {
    let lowest = i;

    for (let j = i + 1; j < len; j++) {
      array[j].style.backgroundColor = "red";

      await new Promise((r) => setTimeout(r, speed));

      var value1 = Number(array[j].getAttribute("value"));
      var value2 = Number(array[lowest].getAttribute("value"));

      // compare values
      if (value1 < value2) {
        array[lowest].style.backgroundColor = "black";
        lowest = j;
      }
      array[lowest].style.backgroundColor = "orange";
      array[j].style.backgroundColor = "black";
    }

    if (lowest !== i) {
      array[lowest].style.backgroundColor = "black";

      // swaps the value of the element
      var temp = array[i].getAttribute("value");
      array[i].setAttribute("value", array[lowest].getAttribute("value"));
      array[lowest].setAttribute("value", temp);

      // swaps the height of the bars
      [array[i].style.height, array[lowest].style.height] = [
        array[lowest].style.height,
        array[i].style.height,
      ];
    }
    array[i].style.backgroundColor = "black";
  }
  array.forEach(function (bar) {
    bar.style.backgroundColor = "green";
    handleAllButtons(false);
  });
};
