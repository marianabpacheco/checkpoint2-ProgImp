// 2º Checkpoint de Programação Imperativa
// Aula do dia 28/06/2021
/*A váriavel tempo é o tempo definido pela pessoa que usa o microondas e a váriavel tempoPadrao é o tempo definido pelo exercício*/
/*Criando uma função que define os tempos padrões referentes às comidas*/
function microondas(prato,tempo){
    let tempoPadrao;

    switch (prato){
        case 'Pipoca':
        tempoPadrao = 10;
        setarTempo(tempo, tempoPadrao);
            break;

        case 'Macarrão':
        tempoPadrao = 8;
        setarTempo(tempo, tempoPadrao);
            break;

        case 'Carne':
        tempoPadrao = 15;
        setarTempo(tempo, tempoPadrao);
            break;

        case 'Feijão':
        tempoPadrao = 12;
        setarTempo(tempo, tempoPadrao);
            break;
           
        case 'Brigadeiro':
        tempoPadrao = 8;
        setarTempo(tempo, tempoPadrao);
            break;

        default: 
            console.log('O prato é inexistente')
    }
}


/* Criando uma função para que a pessoa defina o tempo de uso do microondas e as respectivas mensagens*/ 
/* Essa função é chamada durante o switch*/ 
function setarTempo(tempo,tempoPadrao){
    if (tempo < tempoPadrao){
        console.log("O tempo é insuficiente");
    }
    else if (tempo >= 3*tempoPadrao){
        console.log("Kabum");
    }
    else if (tempo >= 2*tempoPadrao){
        console.log("A comida queimou");
    }
    
    else{
    console.log("O pedido está pronto");
    }
}


microondas('Pipoca', 10);
microondas('Carne', 10);
microondas('Macarrão', 10);
microondas('Feijão', 24);
microondas('Brigadeiro', 80);
microondas('Arroz',10);
