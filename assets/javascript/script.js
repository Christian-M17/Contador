var currentNumberWrapper = document.getElementById ("currentNumber");


var currentNumber = 0;

function increment(){
  currentNumber = currentNumber + 1;
  currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    if (currentNumber >= 1){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;}
  }