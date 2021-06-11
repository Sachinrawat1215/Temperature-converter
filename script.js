console.log("Hello World...");

let cel = document.getElementById("boxone");
let fah = document.getElementById("boxtwo");

cel.addEventListener("input", function(){
    let celsius = this.value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    fah.value = fahrenheit;
 
    function show(){
        let formula = document.querySelector(".main-formula");
        formula.innerHTML = `<p>(${celsius}°C × 9/5) + 32 = ${fahrenheit}°F</p>`
        console.log(formula);
    }
    show();
});

fah.addEventListener("input", function(){
    let fahrenheit = this.value;
    let celsius = (fahrenheit - 32) * 5 / 9;
    cel.value = celsius;

    function show(){
        let formula = document.querySelector(".main-formula");
        formula.innerHTML = `<p>(${fahrenheit}°F − 32) × 5/9 = ${celsius}°C</p>`
        console.log(formula);
    }
    show();
});