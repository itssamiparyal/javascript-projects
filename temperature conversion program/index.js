//Temprature conversion program

const textBox = document.getElementById("textBox");
const toFarenheith = document.getElementById("toFarenheith");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");
let Temprature;

function convert() {
  if (toFarenheith.checked) {
    Temprature = Number(textBox.value);
    Temprature = (Temprature * 9) / 5 + 32;
    result.textContent = Temprature.toFixed(1) + "℉";
  } else if (toCelcius.checked) {
    Temprature = Number(textBox.value);
    Temprature = (Temprature - 32) * (5 / 9);
    result.textContent = Temprature.toFixed(1) + "℃";
  } else {
    result.textContent = "Select A Unit";
  }
}
