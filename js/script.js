var hora = document.querySelector(".secao-hora .secao__rodape__valor span");
var inputGanhoMes = document.querySelector("#ganho-mes");
var inputGanhoHoraDia = document.querySelector("#horas-dia");

//hora.textContent = 1.15;

function calcularValorHora (){
    var calculoHoraMes = inputGanhoHoraDia.valueAsNumber * 21;

    var valorHora = (inputGanhoMes.valueAsNumber / calculoHoraMes).toFixed(2);

    //console.log (valorHora)
    hora.textContent = valorHora

}




//<input id="ganho-mes" type="number" value="0" />

//<input id="horas-dia" type="number" value="0"></input>

//<span id="resposta">R$ 0,00</span><small>/hora</small>
