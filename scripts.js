function calcularNivelRanqueadas(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return {
        saldoVitorias: saldoVitorias,
        nivel: nivel
    };
}

let vitoriasDoHeroi = 60;
let derrotasDoHeroi = 20;

let resultadoRanqueadas = calcularNivelRanqueadas(vitoriasDoHeroi, derrotasDoHeroi);

console.log(`O Herói tem um saldo de ${resultadoRanqueadas.saldoVitorias} está no nível de ${resultadoRanqueadas.nivel}`);
