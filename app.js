/* INPUT */
const userInput = document.querySelector("#userText");
const initialMsg = document.querySelector(".noMsg");

/* OUTPUT */
const encryptOutput = document.querySelector("#encryptOutput")
const encryptedResult = document.querySelector(".encrypted")

/* BUTTONS */
const encryptBtn = document.querySelector(".btnEncrypt");
encryptBtn.addEventListener("click", encryption);

const clipboardBtn = document.querySelector(".btnCopy")
clipboardBtn.addEventListener("click", clipboard)
/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

/* HIDE RESULT DIV */

encryptedResult.style.display = "none";

/* ENCRYPTION FUNCTION */

function encryption() {

    let forEncryption = userInput.value;

    /* LOGIC FOR ENCRYPTION */

    let encrypted = forEncryption
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    /* HIDE INITIAL MSG AND SWAP WITH RESULT */

    if (forEncryption.length != 0) {
        encryptedResult.style.display = "block";
        initialMsg.style.display = "none"
        userInput.value = "¡Encriptación realizada con éxito!"
        encryptOutput.textContent = encrypted;

    }

}

/* CLIPBOARD TEXT */

function clipboard() {
    encryptOutput.select();
    encryptOutput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(encryptOutput.value);

    let tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiado";
}

