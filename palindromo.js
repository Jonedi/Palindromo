function palindromo() {
    var txt = document.getElementById("palindromo").value;
    const newTxt = txt.replace(/[\W_]/g, "").toLowerCase();
    const txtReverse = newTxt.split("").reverse().join("");

    const result = newTxt === txtReverse ? "El texto es palíndromo" : "El texto no es palíndromo";
    var print = document.getElementById("response");

    print.innerHTML = result
}