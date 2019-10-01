function addTwo(n1,n2) {
           return n1 + n2   
        }
function multiplyTwo(n1, n2) {
          return n1*n2
          }
var answer = 0
var username = ""

btnReset.onclick=function(){
  lbloutput.value = ''
  inptNum1.value = ''
  inptNum2.value = ''
}

btnAdd.onclick=function(){      
lbloutput.value = addTwo(Number(inptNum1.value),Number(inptNum2.value))
}

btnMultiply.onclick=function(){
   lbloutput.value = multiplyTwo(Number(inptNum1.value),Number(inptNum2.value))
}

Input1.onchange=function(){
  inptNum1.placeholder = "Enter your number here, " + Input1.value
  inptNum2.placeholder = "Enter your number here, " + Input1.value 
}

