let d = document.getElementById('disp');
function add(val){
    
    d.value += val;
}
function calculate(){
    d.value = eval(d.value);
}
function CE(){
    console.log(d.value)
    d.value = "";
}