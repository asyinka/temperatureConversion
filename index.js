
let temp;
temp = Number(temp);

document.getElementById("submitButton").onclick = function(){
    temp = document.getElementById("tempInput").value;
    if (document.getElementById("celsiusUnit").checked) {
        temp = toCelsius(temp)
        document.getElementById("answer").innerHTML = `${temp} degrees celsius`;
    } else if (document.getElementById("fahrenheitUnit").checked) {
        temp = toFahrenheit(temp)
        document.getElementById("answer").innerHTML = `${temp} degrees Fahrenheit`
    } else {
        document.getElementById("answer").innerHTML = `Choose a Unit`
    }
}

function toCelsius(temp){
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp){
    return temp * 9/5 + 32;
}
