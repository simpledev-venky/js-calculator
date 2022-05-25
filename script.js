let screen = document.getElementById("screen")
let  buttons = document.querySelectorAll("button")
let screenvalue = ""//empty string
for(items of buttons){ //items is iterator
    items.addEventListener('click',(e)=>{

buttonText = e.target.innerText //grabbing the buttons innertext
console.log("button text is " ,buttonText)

//conditions on button text
if(buttonText==="X"){
    buttonText = "*"//setting buttontext to *
    screenvalue  +=buttonText 
    screen.value = screenvalue
}
else if (buttonText==="AC"){
  screenvalue = ""
    screen.value = screenvalue
}
else if (buttonText==="D"){
  screenvalue = screenvalue.slice(0,-1)
    screen.value = screenvalue
}
else if (buttonText==="="){
  screen.value = eval(screenvalue)
  screenvalue = ""
//empty the value in screenvariable
}
else{
  screenvalue += buttonText
  screen.value = screenvalue
}
// screenvalue variable is continsly updated on clicking the button intialy it is empty




    })
}




