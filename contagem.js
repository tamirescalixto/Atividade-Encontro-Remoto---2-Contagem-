// Para cada aluno na lista de alunos:
    // se o numeroAluno é 0:
        // mostrar: o número é ZERO
    // senao se o numeroAluno é par:
        // mostrar: o número x é PAR
    // senao se o numeroAluno é impar:
        // mostrar: o número x é IMPAR




let listaAlunos = ["Gael", "Noah", "Tamires", "Luigi", "Brigite", "Chiara"]

for(let numero = 0; numero < listaAlunos.length; numero++) {

    if(numero == 0) {
        console.log("O número é ZERO")
    } else if (numero % 2 == 0) {
        console.log(`O número ${numero} é PAR`)
    } else if (numero % 2 == 1){
        console.log(`O múmero ${numero} é IMPAR`)
    }

}




// 7 / 2 -> 3 e sobra 1 
// 6 / 2 -> 3 e sobra 0
// % -> resto