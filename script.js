let screen = document.getElementById("screen")
let  buttons = document.querySelectorAll("button")
let screenvalue = ""
for(items of buttons){
    items.addEventListener('click',(e)=>{

buttonText = e.target.innerText
console.log("button text is " ,buttonText)

if(buttonText==="X"){
    buttonText = "*"
    screenvalue  +=buttonText 
    screen.value = screenvalue
}
else if (buttonText==="C"){
  screenvalue = ""
    screen.value = screenvalue
}
else if (buttonText==="="){
  screen.value = eval(screenvalue)
}
else{
  screenvalue += buttonText
  screen.value = screenvalue
}





    })
}




