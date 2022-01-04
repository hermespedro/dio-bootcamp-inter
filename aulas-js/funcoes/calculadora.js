function calculadora(){
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)"));

    if(!operacao || operacao >= 7){
        alert("Erro - operação inválida");
        calculadora();
     } else {
        let number1 = Number(prompt("Digite o primeiro numero"));
        let number2  = Number(prompt ("Digite o segundo numero"));
        let resultado; 
        
        if(!number1 || !number2){
            alert("Erro - Parametros inválidos"); 
            calculadora();
        } else {
            
        function soma(){
            resultado = number1 +number2;
            alert(`${number1} + ${number2} = ${resultado}`);
            novaOperacao();
    
        }
    
        function soma(){
            resultado = number1 +number2;
            alert(`${number1} + ${number2} = ${resultado}`);
            novaOperacao();
    
        }
    
        function subtracao(){
            resultado = number1 -number2;
            alert(`${number1} - ${number2} = ${resultado}`);
            novaOperacao();
    
        }
    
        function multiplicacao(){
            resultado = number1 *number2;
            alert(`${number1} * ${number2} = ${resultado}`);
            novaOperacao();
    
        }
    
        function divisaoReal(){
            resultado = number1/number2;
            alert(`${number1} / ${number2} = ${resultado}`);
            novaOperacao();
    
        }
        function divisaoInteira(){
            resultado = number1%number2;
            alert(`${number1} % ${number2} = ${resultado}`);
            novaOperacao();
    
        }
    
        function potencia(){
            resultado = number1**number2;
            alert(`${number1} ** ${number2} = ${resultado}`);
            novaOperacao();
    
        }
    
        function novaOperacao(){
            let opcao = prompt("Dedeja realizar uma nova operação?\n 1 - SIM\n 2 - NÂO");
            if (opcao == 1){
                calculadora();
            } else if(opcao ){
                alert("Até mais...");
            } else {
                alert("Digite uma opcao válida");
                novaOperacao();
            }
        }
        }

    
    
        if(operacao == 1){
            soma();
        } else if( operacao == 2){
            subtracao();
        }else if( operacao == 3){
            multiplicacao();
        }else if( operacao == 4){
            divisaoReal();
        }else if( operacao == 5){
            divisaoInteira();
        }else if( operacao == 6){
            potencia();
        }
     }
   
}

calculadora();

