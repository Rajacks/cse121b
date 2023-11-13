/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    const sum = number1 + number2;
    return sum;
  }
  function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    const sum = add(addNumber1, addNumber2);
    document.querySelector("#sum").value = sum;
  }
  const element = document.querySelector("#addNumbers");
  element.addEventListener("click", addNumbers);
  /* Function Expression - Subtract Numbers */
  function subtract(number1, number2) {
    const difference = number1 - number2;
    return difference;
  }
  function subtractNumbers() {
    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    const difference = subtract(subtractNumber1, subtractNumber2);
    document.querySelector("#difference").value = difference;
  }
  const subtractElement = document.querySelector("#subtractNumbers");
  subtractElement.addEventListener("click", subtractNumbers);
  /* Arrow Function - Multiply Numbers */
  const multiply = (number1, number2) => {
    const product = number1 * number2;
    return product;
  };
  const multiplyNumbers = () => {
    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    const product = multiply(multiplyNumber1, multiplyNumber2);
    document.querySelector("#product").value = product;
  };
  const multiplyingElement = document.querySelector("#multiplyNumbers");
  multiplyingElement.addEventListener("click", multiplyNumbers);
  
  /* Open Function Use - Divide Numbers */
  function divide(number1, number2) {
    var quotient = number1 / number2;
    return quotient;
  }
  function divideNumbers() {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    var quotient = divide(dividend, divisor);
    document.querySelector("#quotient").value = quotient;
  }
  const dividingElement = document.querySelector("#divideNumbers");
  dividingElement.addEventListener("click", divideNumbers);
  /* Decision Structure */
  let today = new Date();
  let currentYear = "";
  currentYear = today.getFullYear();
  document.getElementById("year").textContent = currentYear;
  
  /* ARRAY METHODS - Functional Programming */
  /* Output Source Array */
  var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  document.getElementById("array").innerHTML = numbersArray;
  /* Output Odds Only Array */
  document.getElementById("odds").innerHTML = numbersArray.filter(
    (number) => number % 2 === 1
  );
  /* Output Evens Only Array */
  document.getElementById("evens").innerHTML = numbersArray.filter(
    (number) => number % 2 === 0
  );
  /* Output Sum of Org. Array */
  document.getElementById("sumOfArray").innerHTML = numbersArray.reduce(
    (sum, number) => sum + number
  );
  /* Output Multiplied by 2 Array */
  document.getElementById("multiplied").innerHTML = numbersArray.map(
    (number) => number * 2
  );
  
  /* Output Sum of Multiplied by 2 Array */
  let multipliedBytwo = numbersArray.map((number) => number * 2);
  document.getElementById("sumOfMultiplied").innerHTML = multipliedBytwo.reduce(
    (sum, number) => sum + number
  );