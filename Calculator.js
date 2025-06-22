const display = document.getElementById('display');


function appendNumber(num) {
  display.value += num;
}


function appendOperator(operator) {
  const lastChar = display.value.slice(-1);

  
  if ("+-*/".includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}


function calculateResult() {
  try {
    display.value = eval(display.value); // Note: eval is simple but risky in real apps
  } catch (error) {
    display.value = "Error";
  }
}


function clearDisplay() {
  display.value = "";
}
