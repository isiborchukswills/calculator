let output = document.getElementById("OutPut");
let sum = document.getElementById("equal");


function display(numbers){
   output.value += numbers;
}
function calculate(){
    try{
        output.value = eval(output.value).toFixed(5)
    } 
    catch(error){
        output.value = error;
    }
}
function Clear(){
    output.value = "";
}
function Delete(){
    output.value = output.value.slice(0, -1);
}
