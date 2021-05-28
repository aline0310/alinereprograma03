//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles.
// Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisao(num1, num2){
    if(num1/num2 % 2 === 0){
        return num1/num2  + ' é par'
    }else{
        return num1/num2
    }
}
       
   console.log(divisao(51,2)) 
