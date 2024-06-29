let jugadores = ["Ana", "Carlos", "Pedro", "Amay", "Clara"];

console.log(`Los jugadores son: ${jugadores}`);

jugadores.splice(jugadores.indexOf("Carlos"), 1);
console.log(`Carlos ha sido elegido. Quedan: ${jugadores}`);

jugadores.splice(jugadores.indexOf("Lucas"), 1);
console.log(`Lucas ha sido elegido. Quedan: ${jugadores}`);

jugadores.unshift(jugadores.splice(jugadores.indexOf("Pedro"), 1)[0]);
console.log(`¡Ana se ha ocultado detrás de Pedro! Quedan: ${jugadores}`);

jugadores.push("Marta");
console.log(`¡Un nuevo jugador ha aparecido! Quedan: ${jugadores}`);

for (let jugador of jugadores) {
    console.log(jugador);
    if (jugador === "Ana") {
        break;
    }
}

let indiceDeAna = jugadores.indexOf("Ana");
console.log(`Ana se encuentra en: ${indiceDeAna}`);

console.log(`Los sobrevivientes son: ${jugadores}`);
