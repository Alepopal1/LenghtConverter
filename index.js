let input = document.getElementById("input");
let result = document.getElementById("result");

let inputType = document.getElementById("inputType");
let resultType = document.getElementById("resultType");

let inputTypeValue, resultTypeValue;

input.addEventListener("keyup" , myResult);
inputType.addEventListener("change" , myResult);
resultType.addEventListener("change" , myResult);

inputTypeValue = inputType.value;
resultTypeValue = resultType.value;

function myresult(){
	inputTypeValue = inputType.value;
	resultTypeValue = resultType.value;
if (inputTypeValue === "meter" && resultTypeValue === "kilometer"){
	result.value = Number(input.value) * 0.001;
} else if(inputTypeValue === "meter" && resultTypeValue === "centimeter"){
	result.value = Number(input.value) * 100;
} else if(inputTypeValue === "meter" && resultTypeValue === "foot"){
	result.value = Number(input.value) * 3.28084;
}else if(inputTypeValue === "meter" && resultTypeValue === "inch"){
	result.value = Number(input.value) * 39.3700787402;
}else if(inputTypeValue === "meter" && resultTypeValue === "meter"){
	result.value * input.value;
}
}