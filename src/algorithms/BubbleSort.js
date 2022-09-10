export const BubbleSort = async (s, handleAllButtons) => {
  var speed = (1000 / s) * 1.2;
  var array = document.querySelectorAll(".bar");

  var i, j;
  var len = array.length;
  var isSwapped;

  for (i = 0; i < len; i++) {
    isSwapped = false;

    for (j = 0; j < len - 1; j++) {
      array[j].style.backgroundColor = "#FF4949";
      array[j + 1].style.backgroundColor = "#FF4949";

      await new Promise((r) => setTimeout(r, speed));

      var value1 = Number(array[j].getAttribute("value"));
      var value2 = Number(array[j + 1].getAttribute("value"));

      if (value1 > value2) {
        await new Promise((r) =>
          setTimeout(() => {
            array[j].parentNode.insertBefore(array[j + 1], array[j]);
            isSwapped = true;
            array = document.querySelectorAll(".bar");

            r();
          }, 10)
        );
      }
      array[j].style.backgroundColor = "black";
      array[j + 1].style.backgroundColor = "black";
    }
    array[len - 1].style.backgroundColor = "black";

    if (!isSwapped) {
      array.forEach(function (item) {
        item.style.backgroundColor = "green";
        handleAllButtons(false);
      });
      break;
    }
  }
};