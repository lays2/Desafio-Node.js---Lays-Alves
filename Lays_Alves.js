function imprimePares(N) {
    for (let i = 0; i <= N; i += 2) {
        console.log(i);
    }
}
console.log("Imprimindo Números Pares:");
imprimePares(10);
console.log("\n");

//  Soma dos Números de um Array
function somaArray(arrayDeNumeros) {
    let soma = 0;
    for (let i = 0; i < arrayDeNumeros.length; i++) {
      soma += arrayDeNumeros[i];
    }
    return soma;
  }
  
  console.log("Saída de somaArray([1, 2, 3, 4, 5]):");
  console.log(somaArray([1, 2, 3, 4, 5]));
  console.log("\n");
  
  //  identificar Número Primo
  function ePrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log("Saída de ePrimo(7):");
  console.log(ePrimo(7));
  console.log("Saída de ePrimo(10):");
  console.log(ePrimo(10));
  console.log("\n");
  
// FizzBuzz
function fizzBuzz() {
    for (let i = 1; i <= 50; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
  console.log("Saída de fizzBuzz():");
  fizzBuzz();
  console.log("\n");
  
  function contaVogais(str) {
    const vogais = "aeiouAEIOUáéíóúÁÉÍÓÚâêôÂÊÔàèìòùÀÈÌÒÙãõÃÕ";
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i])) {
        contador++;
      }
    }
    return contador;
  }
  
  console.log('Saída de contaVogais("Node.js é incrível"):');
  console.log(contaVogais("Node.js é incrível"));  
  
  //  Tabuada de um Número
  function tabuada(numero) {
    console.log(`Tabuada de ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numero} x ${i} = ${numero * i}`);
    }
  }
  
  console.log("Saída de tabuada(5):");
  tabuada(5);
  console.log("\n");
  
  // Corda inversora
  function inverteString(str) {
    return str.split("").reverse().join("");
  }
  
  console.log('Saída de inverteString("hello"):');
  console.log(inverteString("hello"));
  console.log("\n");
  
  //  Encontre o Maior Número
  function maiorNumero(arrayDeNumeros) {
    let maior = arrayDeNumeros[0];
    for (let i = 1; i < arrayDeNumeros.length; i++) {
      if (arrayDeNumeros[i] > maior) {
        maior = arrayDeNumeros[i];
      }
    }
    return maior;
  }
  
  console.log("Saída de maiorNumero([3, 10, 6, 2]):");
  console.log(maiorNumero([3, 10, 6, 2]));
  console.log("\n");
  
  //  Palíndromo
  function ePalindromo(str) {
    const cleanedStr = str.toLowerCase().replace(/\s/g, "");
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
  }
  
  console.log('Saída de ePalindromo("Ame a ema"):');
  console.log(ePalindromo("Ame a ema"));
  console.log('Saída de ePalindromo("Olá mundo"):');
  console.log(ePalindromo("Olá mundo"));
  console.log("\n");
  
  // Média de Notas
  function calculaMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    const media = soma / notas.length;
    if (media >= 7) {
      return `Aprovado - Média: ${media.toFixed(1)}`;
    } else {
      return `Reprovado - Média: ${media.toFixed(1)}`;
    }
  }
  
  console.log("Saída de calculaMedia([8, 7, 6]):");
  console.log(calculaMedia([8, 7, 6]));
  console.log("Saída de calculaMedia([5, 6, 4]):");
  console.log(calculaMedia([5, 6, 4]));