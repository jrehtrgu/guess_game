let numeroSecreto = Math.floor(Math.random() * 200) + 1;

function adivinar(numeroUsuario) {
    let diferencia = Math.abs(numeroSecreto - numeroUsuario);

    if (diferencia === 0) {
        console.log("¡Adivinaste el número!");
    } else if (diferencia <= 5) {
        console.log(" ¡Muy caliente!");
    } else if (diferencia <= 15) {
        console.log(" Tibia");
    } else {
        console.log(" Fría");
    }
}
 console.log("Para jugar: adivinar(#)")