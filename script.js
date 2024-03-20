const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output"); 


convertBtn.addEventListener("click", myFunction);

function myFunction(){
  const text = document.getElementById("number").value;

  const output = document.getElementById("output"); 
  output.innerHTML = ""; 

  if(text === ""){
    output.innerHTML += '<p id="output-text-error">Please enter a valid number</p>'; 
    return; 
  } 

  let number = parseInt(text); 

  if(number<1){
    output.innerHTML = '<p id="output-text-error">Please enter a number greater than or equal to 1</p>'; 
    return; 
  }else if(number >=4000){
    output.innerHTML = '<p id="output-text-error">Please enter a number less than or equal to 3999</p>'; 
    return; 
}

  let outputText = ""; 

  if(number >=1000){
    const values = addNumeral(number, 'M', 1000);
    number = values[0]; 
    outputText += values[1]; 
  }
  if(number >= 900){
    const values = addNumeral(number, 'CM', 900);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 500){
    const values = addNumeral(number, 'D', 500);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 400){
    const values = addNumeral(number, 'CD', 400);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 100){
    const values = addNumeral(number, 'C', 100);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 90){
    const values = addNumeral(number, 'XC', 90);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 50){
    const values = addNumeral(number, 'L', 50);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 40){
    const values = addNumeral(number, 'XL', 40);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 10){
    const values = addNumeral(number, 'X', 10);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 9){
    const values = addNumeral(number, 'IX', 9);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 5){
    const values = addNumeral(number, 'V', 5);
    number = values[0]; 
    outputText += values[1]; 
  }
   if(number >= 4){
    const values = addNumeral(number, 'IV', 4);
    number = values[0]; 
    outputText += values[1]; 
  }
  if(number >= 1){
    const values = addNumeral(number, 'I', 1);
    number = values[0]; 
    outputText += values[1]; 
  }
  
  output.innerHTML = `<p id="output-text">${outputText}</p>`; 
    return; 
  
}

function addNumeral(currNum, letter, digit){
  let amount = Math.floor(currNum/digit);
  let remainder = currNum%digit; 
  let outText = ""; 
  for(let i = 0; i<amount; i++){
    outText += letter; 
  }
  return [remainder, outText]; 
}
