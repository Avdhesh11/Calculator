function getHistory(){
    return document.getElementById("history_value").innerText;
}

function printHistory(value){
    document.getElementById("history_value").innerText=value;
}

function getOutput(){
    return document.getElementById("current_value").innerText;
}

function printOutput(value){
    if(value===""){
        document.getElementById("current_value").innerText=value;
    }
    else{
        document.getElementById("current_value").innerText=value;
    }
}

function thousand_Separator(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value=n.toLocaleString();
    return value;
}


function reverseNumber(num){
    return Number(num.replace(/,/g,''));
}

var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
  operator[i].addEventListener("click",function(){
     if(this.id==="all_clear"){
         printHistory("");
         printOutput("");
     }

     else if(this.id==="clear"){
        var num=reverseNumber(getOutput()).toString();
        if(num){
            num=num.substring(0,num.length-1);
            printOutput(num);
        }
    }

    else{
        var output=getOutput();
        var history=getHistory();
        if(output==""&&history!=""){
            if(isNaN(history[history.length-1])){
                history= history.substr(0,history.length-1);
            }
        }
        if(output!=""|| history!=""){
            output= output==""?output:reverseNumber(output);
            history=history+output;
            if(this.id==="="){
                var result=eval(history);
                printOutput(result);
                printHistory("");
            }
            else{
                history=history+this.id;
                printHistory(history);
                printOutput("");

            }
        }
    }
 });
} 

var cnt=0;
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
   number[i].addEventListener("click",function(){
     var num=getOutput().toString();
        if(num!=NaN){
            num=num+this.id;
        }
        printOutput(num);
 });
} 


