 function showFirstMessage(text) {
    alert(text);
 };
 showFirstMessage('Hello World');

 function ret() {
     let num = 50;
     return num;
 }
 let anotherNum = ret();
 console.log(anotherNum + 1);

//  let calc = function(a,b){
//      return (a + b);
//  }
// стрелочная функция
let calc = (a,b) => a+b;
console.log(calc(8,4));