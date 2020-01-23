//created variable names for each so I wouldn't repeat myself lie before
const flight = document.getElementById("flight")
const mindreading = document.getElementById("mindreading")
const xray = document.getElementById("xray")
//created an array powerList to loop through 
const powerList = [flight, mindreading, xray]
//toggled through each powers classlist
const togglePower = (power) => {
    power.classList.toggle("disabled")
    power.classList.toggle("enabled")
}
//the DOM has an id activate-____ that will listen for a click event and perform the function toggle(__power__)
document.querySelector("#activate-flight").addEventListener("click", function() { togglePower(flight)})
document.querySelector("#activate-mindreading").addEventListener("click", function() { togglePower(mindreading)})
document.querySelector("#activate-xray").addEventListener("click", function() { togglePower(xray)}) 
//to enable all run each power of the array through a loop and toggle them as enabled
function enableAll() {
    for (const power of powerList) {
        power.classList.toggle("enabled")
    }
}
//to disable all do same except toggle as disabled
function disableAll() {
    for (const power of powerList) {
        power.classList.toggle("disabled")  
    }
}
//in the DOM query for id activate all and listen for click event. when click event performed, do function enableAll
document.querySelector("#activate-all").addEventListener("click", function () {
    enableAll()
})
document.querySelector("#deactivate-all").addEventListener("click", function () {
    disableAll()
})

//old repetitive code that may still be useful later
 /*  const flightHandler = () => {
    flight.classList.toggle("enabled");
    flight.classList.toggle("disabled");

}

 const mindReadingHandler = () => {
    mindreading.classList.toggle("enabled");
    mindreading.classList.toggle("disabled");
}

const xrayHandler = () => {
    xray.classList.toggle("enabled");
    xray.classList.toggle("disabled");

}  */ 


