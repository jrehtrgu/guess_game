let numeroSecreto = Math.floor(Math.random() * 200) + 1;

function adivinar() {

    let numeroUsuario = Number(document.getElementById("numeroUsuario").value);
    let diferencia = Math.abs(numeroSecreto - numeroUsuario);

    if (diferencia === 0) {
        mensaje.textContent= "¡Adivinaste el número!";
    } else if (diferencia <= 5) {
        mensaje.textContent = " ¡Muy caliente!";
    } else if (diferencia <= 15) {
        mensaje.textContent = " Tibia";
    } else {
        mensaje.textContent=" Fría";
    }
}

