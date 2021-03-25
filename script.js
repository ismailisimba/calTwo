let actualNums = "[]";
let inputNums = []

function myMainFunc () {
   document.getElementById("cal21").addEventListener("input", function(e){ inputFormat(e)});
   document.getElementById("calcuAct").addEventListener("click", function(){performCalc();})
}

 myMainFunc();

 function inputFormat (e) {

   let tempArr = e.target.value.match(/\d/g);
   let tempString = tempArr.toString();
   tempString = tempString.replaceAll(",","");
   actualNums = tempString;
   inputNums = tempString.match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
   e.target.value = inputNums;
   inputNums = [];
   
 }



async  function performCalc() {
   let total = actualNums;
   let years = document.getElementById("cal23").value;
   let inte = document.getElementById("cal22").value;

   let data = {};
   data["loanTot"] = total;
   data["loanInt"] = inte;
   data["loanYears"] = years;

   let num = parseInt(total,10);



   calculateMortG(num,years,inte);

  

 }

 function calculateMortG(total,years,inte){

  inte = inte/100;
  inte = inte/12;

  let taxValue = total*(( inte*(1+inte)**(years*12))/(((1+inte)**(years*12))-1));
  let tempString = taxValue.toString();
  let myL = tempString.indexOf(".");
  taxValue =parseFloat( taxValue.toPrecision(myL+2));

  let tempDiv = document.createElement("div");
  let numTemp = tempString.substring(0,myL);
  taxValue = taxValue.toString();
  let decNum = taxValue.substring(myL+1,taxValue.length);

  let newNum = numTemp.match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);
  tempDiv.innerHTML = `<p>The EMI value is Tshs. ${newNum}.${decNum} </p>`;
  
  document.getElementById("answer").innerHTML =  tempDiv.innerHTML;
 }


