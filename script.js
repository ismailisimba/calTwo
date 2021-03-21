let actualNums = "[]";
let inputNums = []

function myMainFunc () {

   // document.getElementById("containerbig").innerHTML = "";

   document.getElementById("amount-select").addEventListener("input", function(e){ inputFormat(e)})
   document.getElementById("calcuAct").addEventListener("click", function(){performCalc();})


}

 myMainFunc();



 function inputFormat (e) {

   // document.getElementById("answer").innerHTML = e.target.value;
   let tempArr = e.target.value.match(/\d/g);
   let tempString = tempArr.toString();
   tempString = tempString.replaceAll(",","");
   actualNums = tempString;
   inputNums = tempString.match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

   e.target.value = inputNums;
   
  // document.getElementById("answer").innerHTML = inputNums;
   inputNums = [];
   
 }



 function performCalc() {

  let selectedFunc = document.getElementById("tax-select").value;
 // document.getElementById("answer").innerHTML =  selectedFunc;

  if (selectedFunc === "pls") {
    alert("Please select a Tax.");
   // document.getElementById("answer").innerHTML = window.location;

  }else if(selectedFunc === "vat"){
    calculateVat();

  }else if(selectedFunc === "inclvat"){

    calculateInclVat();

  }else if(selectedFunc === "paye"){
    calculatePaye();
    
  }else if(selectedFunc === "pension"){
    calculatePens();
    
  }else if(selectedFunc === "citylev"){
    calculateCityLev();
    
  }else if(selectedFunc === "sdl"){
    calculateSdl();
    
  }else if(selectedFunc === "corporate"){
    calculateCorp();
    
  }else {
    alert("Please select a Tax.")
    
  }

 }




 function calculateVat(){

  let num = parseInt(actualNums,10);
  let taxValue = num * 0.18;
  taxValue = Math.floor(taxValue);
  let priceWithTax = num + taxValue;

  let tempDiv = document.createElement("div");
  
  tempDiv.innerHTML = `<p>The tax amount is: ${taxValue.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)} </p><p>Price with tax is: ${priceWithTax.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)}</p>`;
  
  document.getElementById("answer").innerHTML =  tempDiv.innerHTML;
 }


 function calculatePaye(){

  let taxValue = 0;

  let num = parseInt(actualNums,10);

    if(num<=270000){
      taxValue = 0;
    }else if(num>270000 && num<=520000){
      taxValue = 0.09 * (num-270000);
    }else if(num>520000 && num<=760000){
      taxValue = (0.2 * (num-520000))+22500;
    }else if(num>760000 && num<=1000000){
      taxValue = (0.25 * (num-760000))+70500;
    }else if(num>1000000){
      taxValue = (0.3 * (num-1000000))+130500;
    }else {
      taxValue = 0.696969;
    }


 // let salaryWithTax = num - taxValue;

  let tempDiv = document.createElement("div");
  
  tempDiv.innerHTML = `<p>PAYE amount is: ${taxValue.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)} </p>`;
  
  document.getElementById("answer").innerHTML =  tempDiv.innerHTML;
 }


 function calculatePens(){

  let num = parseInt(actualNums,10);

  let taxValue = 0.1 * num;
  let totalTax = taxValue*2;

  let tempDiv = document.createElement("div");
  
  tempDiv.innerHTML = `<p>You and your employer each contribute 10% which is: ${taxValue.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)} </p><p>Total contributed: ${totalTax.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)}</p>`;
  document.getElementById("answer").innerHTML =  tempDiv.innerHTML;
 }


 function calculateCityLev(){

  let num = parseInt(actualNums,10);
  let taxValue = num * (0.3/100);

  let tempDiv = document.createElement("div");
  
  tempDiv.innerHTML = `<p>City Service Levy is: ${taxValue.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)} </p>`;

  document.getElementById("answer").innerHTML =  tempDiv.innerHTML;
 }

 function  calculateSdl(){

  let num = parseInt(actualNums,10);
  let taxValue = num * (4.5/100);


  let tempDiv = document.createElement("div");
  
  tempDiv.innerHTML = `<p>Your SDL tax amount is: ${taxValue.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)} </p>`;
  document.getElementById("answer").innerHTML =  tempDiv.innerHTML;
 }


 function  calculateCorp(){

  let num = parseInt(actualNums,10);
  let taxValue = num * 0.3;

  let tempDiv = document.createElement("div");
  
  tempDiv.innerHTML = `<p>Your corporate tax amount is: ${taxValue.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)} </p>`;

  
  document.getElementById("answer").innerHTML =  tempDiv.innerHTML;
 }




 function calculateInclVat() {
  let num = parseInt(actualNums,10);
  let taxValue = num *(18/118);
  taxValue = Math.floor(taxValue);
  let priceWithTax = num - taxValue;

  let tempDiv = document.createElement("div");
  
  tempDiv.innerHTML = `<p>The inclusive vat is: ${taxValue.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)} </p><p>Price without tax is: ${priceWithTax.toString().match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g)}</p>`;
  
  document.getElementById("answer").innerHTML =  tempDiv.innerHTML;

 }