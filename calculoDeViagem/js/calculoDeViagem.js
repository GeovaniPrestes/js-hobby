
const nomesMes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const mesComTrintaDias = [3, 5, 8, 10]; 
const mesComVinteEOitoDias = 1; 
const mesComTrintaEUmDias = [0, 2, 4, 6, 7, 9, 11]; 

const diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

function PreencherMesAtual() {
    const dataAtual = new Date();
    const nomeMesAtual = nomesMes[dataAtual.getMonth()];
    document.getElementById("nomeMes").innerText = nomeMesAtual;
}

function PreencherDiasDaSemana() {
    const container = document.getElementById("s-0");
    diasDaSemana.forEach(dia => {
        const div = document.createElement("div");
        div.classList.add("dia-semana");
        div.innerText = dia;
        container.appendChild(div);
    });
}

function PreencherDiasDoMesAtual() {
    const dataAtual = new Date();
    const mesAtual = dataAtual.getMonth();
    let totalDias;

    if (mesComTrintaDias.includes(mesAtual)) {
        totalDias = 30;
    } else if (mesAtual === mesComVinteEOitoDias) {
        totalDias = 28; 
    } else {
        totalDias = 31;
    }
}

PreencherMesAtual();
PreencherDiasDaSemana();
