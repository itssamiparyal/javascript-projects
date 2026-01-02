// number guessing game

const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum) + 1) + minNum;

let attempts = 0;
let guess;
let isRunning = true;

while (isRunning) {
  guess = Number(
    window.prompt(`Guess a Number between ${minNum} and ${maxNum}`)
  );
  if (isNaN(guess)) {
    window.alert("please eneter valid number");
  } else if (guess < minNum || guess > maxNum) {
    window.alert(`please enter number between ${minNum} - ${maxNum}`);
  } else {
    attempts++;
    if (guess < answer) {
      window.alert("too low try again");
    } else if (guess > answer) {
      window.alert("too high try again");
    } else {
      window.alert(
        `Congrats you got answer! the naswer was ${guess}. you took ${attempts} attempts`
      );
      isRunning = false;
    }
  }
}
