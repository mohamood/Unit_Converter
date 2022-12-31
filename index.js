/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputValue=document.getElementById("input-field");
const convertBtn=document.getElementById("convert-btn");

const meterFeet=document.getElementById("meter-feet");
const litersGallons=document.getElementById("liters-gallons");
const kgsPounds=document.getElementById("kg-pounds");

convertBtn.addEventListener("click",function(){
    const input=Number(inputValue.value);
    length(input);
    volume(input);
    mass(input);
  })

function length(input){
    const meterToFeet=(input*3.281);
    const feetToMeter=((1/3.281)*input);
    const result =meterFeet.textContent=`${input} meters = ${meterToFeet.toFixed(3)} feet | ${input} feet = ${feetToMeter.toFixed(3)} meters`;
    
    return result
}

function volume(input){
    const litersToGallons=(input* 0.264);
    const gallonsToLiters=((1/ 0.264)*input);
    const result = litersGallons.textContent=`${input} liters = ${litersToGallons.toFixed(3)} gallons | ${input} gallons = ${gallonsToLiters.toFixed(3)} liters`;
    
    return result
}

function mass(input){
    const kgsToPounds=(input*2.204);
    const poundsToKgs=((1/2.204)*input);
    const result=kgsPounds.textContent=`${input} kilos = ${kgsToPounds.toFixed(3)} pounds | ${input} pounds = ${poundsToKgs.toFixed(3)} kilos`;
    
    return result
}
