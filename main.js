function encrypt() {
    var input = document.getElementById("text-input").value;
    var output = input
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    document.getElementById("text-output").value = output;
}

function decrypt() {
    var input = document.getElementById("text-input").value;
    var output = input
        .replace(/ai/gi, "a")
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");
    document.getElementById("text-output").value = output;
}

function copytext() {
    const copytext = document.getElementById("text-output").value;
    if (navigator.clipboard) {
        navigator.clipboard
            .writeText(copytext)
            .then(() => {
                console.log("Se copio el texto");
            })
            .catch((err) => {
                console.error("No se pudo copiar el texto", err);
            });
    } else {
        alert(
            "No funciona el API para copiar el texto, recomendamos usar CTRL + C"
        );
    }
}
