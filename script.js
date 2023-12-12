let numberOne = Number(prompt("Insira um número:"))
let numberTwo = Number(prompt("Insira outro número:"))

let soma = (numberOne + numberTwo).toFixed(2)
let subtração = (numberOne - numberTwo).toFixed(2)
let multiplicação = (numberOne * numberTwo).toFixed(2)
let divisão = (numberOne / numberTwo).toFixed(2)
let resto = (numberOne % numberTwo).toFixed(2)

alert(`A soma dos dois números é: ${soma}`)
alert(`A subtração dos dois números é: ${subtração}`)
alert(`A multiplicação dos dois números é: ${multiplicação}`) 
alert(`A divisão dos dois números é: ${divisão}`)
alert(`O resto da divisão dos dois números é: ${resto}`)

if (soma % 2 == 0) {
    alert("par")
} else {
  alert("impar")
}

if (numberOne == numberTwo) {
    alert("Os números são iguais")
} else if (numberOne != numberTwo) {
    alert("Os números são diferentes")
}