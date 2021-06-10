console.log("Hello World...");

let cel = document.getElementById("boxone");
let fah = document.getElementById("boxtwo");

cel.addEventListener("input", function(){
    let celsius = this.value;
    let fahrenheit = (celsius * 9 / 5) + 32;
    fah.value = fahrenheit;
});

fah.addEventListener("input", function(){
    let fahrenheit = this.value;
    let celsius = (fahrenheit - 32) * 5 / 9;
    cel.value = celsius;
});