function Calculadora(){
    let Operac = prompt("Digite a operação desejada (+, -, * ou /).");
    let Valor1 = prompt("Digite o primeiro valor.");
    let Valor2 = prompt("Digite o segundo valor.");
    let Result;
    switch(Operac){
        case '+':
            Result = Number(Valor1) + Number(Valor2);
            alert(`Resultado: ${Result}.`);
        break;
        case '-':
            Result = Number(Valor1) - Number(Valor2);
            alert(`Resultado: ${Result}.`);
        break;
        case '*':
            Result = Number(Valor1) * Number(Valor2);
            alert(`Resultado: ${Result}.`);
        break;
        case '/':
            Result = Number(Valor1) / Number(Valor2);
            alert(`Resultado: ${Result}.`);
        break;
    }
}
function Banco(){
    let Saldo = prompt("Digite o saldo da conta.");
    let Valor = prompt("Digite o valor da compra.");
    if(Number(Saldo) >= Number(Valor)){
        alert(`A compra foi realizada com sucesso. O seu novo saldo é de R$${Number(Saldo)-Number(Valor)}.`);
    }
    else{
        alert("A compra não foi realizada. Saldo insuficiente.");
    }
}
function Media(){
    let Max = prompt("Digite quantos números deseja digitar.");
    let Sum = 0;
    for(let i = 0;i<Number(Max);i++){
        let num = prompt(`Digite o número ${i}.`);
        Sum = Number(Sum) + Number(num);
    }

    Sum = Number(Sum) / Number(Max);
    alert(`A média dos números é igual a ${Sum}.`);
}
function SomIm(){
    let Min = prompt("Digite o número mínimo.");
    let Max = prompt("Digite o número máximo.");
    let Sum = 0;
    let Aux = Min;

    if(Max<Min){
        Aux = Min;
        Min = Max;
        Max = Aux;
        Aux = Min;
    }
    
    if(Number(Min)%2 == 0){
        Min = Number(Min) + 1;
    }

    while(Number(Min)<=Number(Max)){
        Sum = Number(Sum) + Number(Min);
        Min = Number(Min) + 2;
    }

    alert(`A soma dos números ímpares entre ${Aux} e ${Max} é igual a ${Sum}.`);
}
function Pot(){
    let Base = prompt("Digite o número que deseja elevar.");
    let Exp = prompt("Deseja elevar a qual expoente?");
    alert(`A potência de ${Base} por ${Exp} é igual a ${Math.pow(Number(Base), Number(Exp))}`);
}

function Idade(){
    const ano = 2022;
    let birth = prompt("Digite seu ano de nascimento: ");
    let nome = prompt("Digite seu nome: ");
    let idade = (ano - birth);
    alert(`Olá, seu nome é ${nome} e você tem ${idade} anos.`);
}