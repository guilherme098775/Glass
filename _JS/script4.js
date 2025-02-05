document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibir feedback no modal
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.innerText = 'Mensagem enviada com sucesso!';
    document.getElementById('modal').style.display = 'block';

    // Limpar o formulário
    this.reset();

    // Fazer o modal desaparecer após 3 segundos
    setTimeout(function() {
        document.getElementById('modal').style.display = 'none';
    }, 3000); // 3000 milissegundos = 3 segundos
});

