// function evenOdd() {
// //   let number = 13;
//   let num = parseFloat(document.getElementById('num1').value);
//   console.log(num);

//   if(parseFloat(num) === NaN){
//     if (num % 2 == 0) {
//         document.getElementById("para1").innerHTML = num +" is Even";
//     } else {
//         document.getElementById("para1").innerHTML = num +"  is Odd";
//     }
//   } else{
//     document.getElementById("para1").innerHTML =" Input is Invalid";
//   }
// }

function cal() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let operation = document.getElementById("operation").value;
  let result;

  switch (operation) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "invalid";
      break;
  }
  document.getElementById("result").value = result;
}
