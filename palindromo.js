function palindromo() {
    var txt = document.getElementById("palindromo").value;
    const newTxt = txt.replace(/[\W_]/g, "").toLowerCase();
    const txtReverse = newTxt.split("").reverse().join("");

    document.getElementById("response").innerHTML = newTxt === txtReverse ? "El texto es palindromo" : "El texto no es palindromo"
}