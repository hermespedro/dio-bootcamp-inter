function compararN(n1, n2){
    const primeiraFase = criarPrimeirafase(n1, n2);
    const segundaFase = criarSegundaFase(n1, n2);

    return `${primeiraFase}${segundaFase}` 
}

function criarPrimeirafase(n1, n2){
    let saoIguais = "";

    if(n1!==n2){
        saoIguais = "Não!"
    }

    return `Os numeros ${n1} e ${n2} ${saoIguais} são iguais`
}

function criarSegundaFase(n1, n2) {
    const soma = n1 + n2;
    let resultado10 = 'menor';
    let resultado20 = 'menor';
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if(compara10){
        resultado10 = 'maior';
    }
    if(compara20){
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20 `
}

console.log(compararN(1,2));