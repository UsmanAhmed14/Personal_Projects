const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    // console.log(btnClr);
    let btnClr = e.target.id;
    switch (btnClr) {
      case "grey":
        body.style.backgroundColor = "grey";
        console.log("grey");
        break;
      case "white":
        body.style.backgroundColor = "white";
        console.log("white");
        break;
      case "blue":
        body.style.backgroundColor = "blue";
        body.style.color = "white";

        console.log("blue");
        break;
      case "yellow":
        body.style.backgroundColor = "yellow";
        body.style.color = "black";
        console.log("yellow");
        break;

      default:
        console.log("didnt work😭");
    }
  });
});
