const ano = prompt("Informe o ano para saber se é bissexto: ")
if (ano % 400 == 0 ) {
    console.log("O ano ", ano, " é bissexto")
} else {
    console.log(" O ano ", ano, " nao é bissexto")
}