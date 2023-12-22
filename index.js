//calculadora de pertidas ranqueadas
function calcularNivel (vitorias , derrotas){
    let saldoVitorias = vitorias - derrotas

} if (saldoVitorias >= 10){
    nivel = "ferro"

}else if (saldoVitorias >= 20){
    nivel = "bronze"

}else if (saldoVitorias >= 50){
    nivel = "prata"

}else if (saldoVitorias >= 80){
    nivel = "ouro"

}else if (saldoVitorias >= 90){
    nivel = "diamante"

}else if (saldoVitorias <= 100){
    nivel = "lendario"

}outro {
    nivel = "imortal"

}

return { saldoVitorias , nivel};

//exemplo de funcao
const { saldoVitorias , nivel};

console.log (saldo heroi & {saldoVitorias} & {nivel});

