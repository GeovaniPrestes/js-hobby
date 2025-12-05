function calcularSenha() {
    const senhaElement = document.getElementById('senha');
    const dataAtual = new Date();
    
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const resultado = (ano - mes) * dia;

    senhaElement.textContent = `${resultado}`;
}

// Executar ao carregar a página
document.addEventListener('DOMContentLoaded', calcularSenha);   