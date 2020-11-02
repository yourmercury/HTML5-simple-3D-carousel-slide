
let container = document.querySelector(".slide-container");
let first = document.querySelector('#first');
let second = document.querySelector("#second");
let third = document.querySelector("#third");

let firstTouch = null;

container.onmousedown = (e) => {
  firstTouch = e.offsetX;
}


container.onmouseup = (e) => {
  if (e.offsetX > firstTouch) {
    first.id = "second";
    second.id = "third";
    third.id = "first";
    first = document.querySelector('#first');
    second = document.querySelector("#second");
    third = document.querySelector("#third");
  }

  else if (e.offsetX < firstTouch) {
    first.id = "third";
    second.id = "first";
    third.id = "second";
    first = document.querySelector('#first');
    second = document.querySelector("#second");
    third = document.querySelector("#third");
  }
}

