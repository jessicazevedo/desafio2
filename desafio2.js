function calcularRankeada(vitorias, derrotas) {
    // Calcula o saldo de Rankeadas
    let saldoRankeada = vitorias - derrotas;

    // Determina a classificação com base no número de vitórias
    let classificacao;
    
    if (vitorias < 10) {
        classificacao = "Ferro";
    } else if (vitorias <= 20) {
        classificacao = "Bronze";
    } else if (vitorias <= 50) {
        classificacao = "Prata";
    } else if (vitorias <= 80) {
        classificacao = "Ouro";
    } else if (vitorias <= 90) {
        classificacao = "Diamante";
    } else if (vitorias <= 100) {
        classificacao = "Lendário";
    } else {
        classificacao = "Imortal";
    }

    // Exibe a mensagem de saída
    let mensagem = `O jogador possui um saldo de Rankeadas de ${saldoRankeada}. Classificação: ${classificacao}`;
    console.log(mensagem);

    // Retorna a classificação se necessário
    return classificacao;
}

// Exemplo de uso
let vitoriasExemplo = 15;
let derrotasExemplo = 5;
calcularRankeada(vitoriasExemplo, derrotasExemplo);
