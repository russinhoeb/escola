const nota = prompt("Digite sua nota (0-100)")
if ( nota >= 60 ) {
    console.log("Aprovado")
} 
if (nota < 60) {
    console.log("Reprovado")
}
if ( 0 < nota > 100){
    console.log("Valor da nota inválida")
}