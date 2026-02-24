//Projeto: Calculadora (JavaScript)
//Arquivo: main.js
//Objetivo: praticar funções e execução com Node.js (sem loops complexos).

function somar(a,b) {
    return a+b;
}
    function subtrair(a,b){
        return(a-b)
    }
    function multiplicar(a,b){
        return a*b;
    }
    function dividir(a,b){a/b
        return a/b;
    }
function potencia(a,b){
   return Math.pow (a,b)
}
    let x=7.5;
    let y=2.5;

    console.log("=== CALCULADORA BASICA===");
    console.log("Valores:",x,"e",y);
    console.log("Soma:", somar(x,y));
    console.log("subtração:",subtrair(x,y));
    console.log("Multiplição:",multiplicar(x,y));
    console.log("divisão:", dividir(x,y));
        console.log("potencia:", potencia(x,y));