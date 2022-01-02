let array = ['String', false, 1 ];

// adiciona um novo elemento no array
array.push('novo item');

// apaga o ultimo 
array.pop();

// apaga o primeiro elemento do array 
array.shift();

// adiciona um novo elemento no indice 0(primeira posição);
array.unshift();


function cons(){
   return array.forEach(element => {
        console.log(element);
    });
}

cons();

// OBJETOS 

var carro = {
    marca: "VW",
    modelo: "Gol",
    cor: "azul",
    financiado: false,
};

console.log(carro);

var { marca, modelo} = carro;
console.log(marca, modelo);