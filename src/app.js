/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let NumberGenerator = () => {
    let number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
    let num = Math.floor(Math.random() * number.length);
    return number[num];
  };
  console.log(NumberGenerator());

  let pintaGenerator = () => {
    let pinta = ["espada", "trebol", "corazon", "diamante"];
    let num2 = Math.floor(Math.random() * pinta.length);
    return pinta[num2];
  };
  console.log(pintaGenerator());

  document.querySelector(".numero").innerHTML = NumberGenerator();
  document.querySelector(".carta").classList.add(pintaGenerator());
};
