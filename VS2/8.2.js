const numero4 = prompt("Informe um numero: ")
const numero5 = prompt("Informe outro numero:")

if ((numero4 % numero5) == 0) {
 console.log("O numero ", numero4, " é divisivel por ", numero5)
} 
else {
    console.log("A divisao não é exata")
}