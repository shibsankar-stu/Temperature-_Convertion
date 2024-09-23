let userInput = document.getElementById("userInput");
let result = document.getElementById("result");
let myBtn = document.getElementById("myBtn");
let form = document.getElementById("temp");
myBtn.addEventListener("click" ,() => {
    let userData = userInput.value
    let radioValue = form.elements["temp"].value;
    if (radioValue == "Fahrenheit" ) {
        let fahrenheit =   (userData * (9/5)) + 32
        result.innerHTML = `${fahrenheit}°F`
    } else {
        let celsius = (userData - 32) * 5/9
         result.innerHTML = `${celsius}°C`
    }

})