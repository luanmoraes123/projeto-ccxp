
const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("minuto");
const segundo = document.getElementById("segundo");

let data = new Date("20 may 2023");

function timer(){
    
    let dataAtual = new Date();

    let segundosTotais = (data - dataAtual) / 1000;

    const dias = Math.floor(segundosTotais / 60 / 60 / 24);
    const horas = Math.floor(segundosTotais / 60 / 60) % 24;
    const minutos = Math.floor(segundosTotais / 60) % 60;
    const segundos = Math.floor(segundosTotais) % 60;

    dia.innerHTML = formatarTempo(dias) + "D";
    hora.innerHTML = formatarTempo(horas) + "H";
    minuto.innerHTML = formatarTempo(minutos) + "M";
    segundo.innerHTML = formatarTempo(segundos) + "S";
}

function formatarTempo(tempo){
    return tempo < 10? "0" + tempo: tempo;
}

setInterval(timer, 1000);