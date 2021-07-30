let projeto = document.querySelector(".span");

let inputValorHora = document.querySelector("#valor-hora");

let inputHoraProjeto = document.querySelector("#horas-projeto");

function calcular (){
    
    let calcularProjeto = (inputValorHora.valueAsNumber * inputHoraProjeto.valueAsNumber).toFixed(2)

    //console.log (calcularProjeto)
    alert("O valor do seu projeto é de R$" + calcularProjeto + "!")
}