export {myCalTwoEmi as default};

let actualNums = "[]";
let inputNums = []

class myCalTwoEmi {
    
     constructor(){
         this.name = "EMI Calculator";
         this.startCalculator = this.startCalculator;
         this.innerHtHtml = this.innerHtHtml;
         this.innerStyleHtml  = this.innerStyleHtml;  
     }

     startCalculator (idOrClassName,idOrClass) {
            let name = idOrClassName;
            let nameType = idOrClass;
            let parentContainer = null;

            nameType = nameType.toString();
            name = name.toString();

            if(nameType==="id"){
                    parentContainer = document.getElementById(name);
            }else{
                    parentContainer = document.querySelectorAll("."+name)[0];
            }


            let innerHt = this.innerHtHtml();
            let innerStyle = this.innerStyleHtml();

            parentContainer.innerHTML = "";
            let newStyles = document.createElement("style");
            newStyles.innerHTML = innerStyle;

            parentContainer.innerHTML = innerHt;
            parentContainer.appendChild(newStyles);

            document.getElementById("cal21").addEventListener("input", function(e){ 
                    // document.getElementById("answer").innerHTML = e.target.value;
                    let tempArr = e.target.value.match(/\d/g);
                    //  console.log(tempArr);
                    let tempString = tempArr.toString();
                    tempString = tempString.replaceAll(",","");
                    actualNums = tempString;
                    inputNums = tempString.match(/(\d+?)(?=(\d{3})+(?!\d)|$)/g);

                    e.target.value = inputNums;

                    // document.getElementById("answer").innerHTML = inputNums;
                    inputNums = [];
            });
            document.getElementById("calcuAct").addEventListener("click", function(){
                
                let total = actualNums;
                let years = document.getElementById("cal23").value;
                let inte = document.getElementById("cal22").value;
             
             
                let data = {};
                data["loanTot"] = total;
                data["loanInt"] = inte;
                data["loanYears"] = years;
             
                let num = parseInt(total,10);
             
             
             
                

                inte = inte/100;
                inte = inte/12;
                total = num;
              
                let taxValue = total*(( inte*(1+inte)**(years*12))/(((1+inte)**(years*12))-1));
                let tempString = taxValue.toString();
                let myL = tempString.indexOf(".");
                taxValue =parseFloat( taxValue.toPrecision(myL+2));
              
                let tempDiv = document.createElement("div");
                
                tempDiv.innerHTML = `<p>The EMI value is: ${taxValue} </p>`;
                
                document.getElementById("answer").innerHTML =  tempDiv.innerHTML;
             
               
            })
     }

    



     innerHtHtml () {

        return `<div class="so_basic" id="containerbig">
        <div id="logo"></div>
        <div id="title">Equated Monthly Installment (EMI) Calculator</div>
      
      
        <div id="pickFunc">
      <div class="items_test1">
        <label for="cal21">Enter Total  Mortgage Amount/Loan</label>
        <textarea name="cal21" id="cal21" cols="30" rows="10"></textarea>
      </div>
      <div class="items_test1">
        <label for="cal22">Enter Interest Rate ( Yearly Rate )</label>
        <textarea name="cal22" id="cal22" cols="30" rows="10"></textarea>
      </div>
      <div class="items_test1">
        <label for="cal23">Enter Total Mortage Years / Tenor</label>
        <textarea name="cal23" id="cal23" cols="30" rows="10"></textarea>
      </div>
      
      
        </div>
        <div class="emi">EMI Value</div>
        <div id="answer">
          
        </div>
        <div id="reset">
          <button id="calcuAct">Calculate</button>
        </div>
      
          
      </div>`;
     }


     innerStyleHtml () {

        return `.so_basic, .pickFunc, .items_test1{

            display: block;
            min-width: 350px;
            max-width: 600px;
            min-height: 50px;
            height: auto;
            margin: 0 auto;
            padding: 6px 6px;
        
            display: flex;
            flex-flow: column;
            flex-wrap: nowrap;
        
            justify-content: flex-start;
            align-items: center;
        
            font-family: "Roboto", serif;
        
            background-color: #5d5d5d;
            color: black;
            box-sizing: border-box;
            text-align: center;
        }
        
        #logo{
          
        
            width: 90px;
            min-height: 50px;
            height: fit-content;
            margin: 6px 12px;
        
        
            
        
           /* background-image: url("https://ismizo.com/resources/layout_pics/favicon.png");*/
            background-position: center;
            background-size: contain;
        
            background-repeat: no-repeat;
        
         
        
            box-sizing: border-box;
        }
        
        textarea {
        
            margin-top: 15px;
        
            min-width: 250px;
            height: 35px;
            overflow: hidden;
            resize: none;
            
            margin-bottom: 3px;
            box-sizing: border-box;
        
            font-family: "Quicksand";
            font-size: 12px;
        }
        
        #title{
        
            font-weight: bold;
            font-size: 24px;
            letter-spacing: 3px;
            margin-bottom: 36px;
            box-sizing: border-box;
            text-align: center;
        
        }
        
        
        
        label, .emi{
            padding-bottom: 6px;
            font-weight: bold;
            letter-spacing: 1.69px;
        }
        
        button {
            border: none;
            font-family: inherit;
            
        
            padding: 3px 6px;
            
            
            font-size: 18px;
            
            letter-spacing: 1.5px;
            box-sizing: border-box;
        
            box-shadow: 1px 1px 5px 0.2px black;
        
            margin-top: 6px;
            margin-bottom: 3px;
            visibility: visible !important;
        
        }
        
        button:hover, button::selection {
          box-shadow: none;
        
        }
        
        input, #cal21, textarea{
            text-align: center;
            padding-top: 8px;
        }
        
        #answer {
        
            width: 85%;
            min-height: 100px;
        
            text-align: center;
            cursor: text;
        
            background-color: white;
            color: black;
        }
        
        #reset{
            visibility: hidden;
        }`;
     }

}

