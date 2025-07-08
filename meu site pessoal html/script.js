// Obtém referências para o botão e para o parágrafo onde a mensagem será exibida
const mensagemBtn = document.getElementById('mensagemBtn'); // 
const mensagemTexto = document.getElementById('mensagemTexto'); // Onde a mensagem aparecerá 

// Adiciona um "ouvinte de evento" (event listener) ao botão
// Quando o botão é clicado, a função dentro dele é executada
mensagemBtn.addEventListener('click', function() {
    // Define a mensagem a ser exibida 
    const mensagens = [
        "Sua dedicação é a chave para o sucesso!",
        "Continue aprendendo, o futuro é seu!",
        "Grandes coisas vêm para aqueles que persistem. 💪",
        "Acredite no seu potencial! ✨",
        "Você é incrível! Tenha um ótimo dia!"
    ];

    // Escolhe uma mensagem aleatória do array
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];

    // Define o texto do parágrafo com a mensagem escolhida
    mensagemTexto.textContent = mensagemAleatoria;

    // Torna o parágrafo visível (o CSS inicial o deixou 'display: none')
    mensagemTexto.style.display = 'block';

    // Opcional: Adicionar um efeito de fade-in (desvanecer) para a mensagem
    // Você pode remover ou ajustar se não quiser.
    mensagemTexto.style.opacity = 0;
    let opacity = 0;
    const fadeInInterval = setInterval(function() {
        if (opacity < 1) {
            opacity += 0.1;
            mensagemTexto.style.opacity = opacity;
        } else {
            clearInterval(fadeInInterval);
        }
    }, 50); // Ajuste este valor para controlar a velocidade do fade-in
});