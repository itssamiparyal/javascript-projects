// Count Program

//variable declaration and assignment
const decrease = document.getElementById("decreaseButton");
const increase = document.getElementById("increaseButton");
const reseet = document.getElementById("resetButton");
const countLabel = document.getElementById("countLabel");
const plus2 = document.getElementById("plus2");
const minus2 = document.getElementById("minus2");
let Count = 0;

// making three function
increase.onclick = function(){
    Count++;
    countLabel.textContent = Count;
}

decrease.onclick = function(){
    Count--;
    countLabel.textContent = Count;
}

reseet.onclick = function(){
    Count = 0;
    countLabel.textContent = Count;
}

plus2.onclick = function(){
    Count += 2;
    countLabel.textContent = Count;
}

minus2.onclick = function(){
    Count -= 2;
    countLabel.textContent = Count;
}