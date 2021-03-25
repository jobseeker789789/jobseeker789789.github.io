const obj_value = document.getElementById('value');
const obj_one = document.getElementById("one");
const obj_plus = document.getElementById("plus");
const obj_equal = document.getElementById("equal");

obj_one.addEventListener("click" , method_input_one);
function method_input_one(){
    if(obj_value.innerText == "0"){
        obj_value.innerText = "1";
    }else{
        obj_value.innerText += "1";
    }
}
obj_plus.addEventListener("click" , method_plus);
function method_plus(){
    obj_value.innerText += "+";
}
obj_equal.addEventListener("click" , method_result);
function method_result(){
    obj_value.innerText = eval(obj_value.innerText);
}

