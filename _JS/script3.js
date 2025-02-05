let currentIndex = 0;
const imagesToShow = 4; // Número de imagens a serem exibidas por vez
const intervalTime = 3000; // Tempo em milissegundos para a auto rolagem
let autoScroll;

function moveSlide(direction) {
    const images = document.querySelectorAll('#img img');
    const totalImages = images.length;

    currentIndex = (currentIndex + direction + totalImages) % totalImages;

    // Calcular o deslocamento com base no número de imagens a serem exibidas
    const offset = -currentIndex * (100 / imagesToShow); // Move pela largura de 4 imagens
    document.querySelector('.container').style.transform = `translateX(${offset}%)`;
    
    resetAutoScroll(); // Reinicia a auto rolagem ao interagir
}

function startAutoScroll() {
    autoScroll = setInterval(() => {
        moveSlide(1); // Mover para a próxima imagem
    }, intervalTime);
}

function resetAutoScroll() {
    clearInterval(autoScroll); // Limpa o intervalo atual
    startAutoScroll(); // Reinicia a auto rolagem
}

// Inicia a auto rolagem ao carregar a página
window.onload = startAutoScroll;


// script formulario 

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=seunumerodetelefone&text=Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    
    window.open(whatsappUrl, '_blank');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação simples
    if (!name || !email || !message) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    if (stmt.execute()) {
        alert("Mensagem enviada com sucesso!");
    } else {
        alert("Erro ao enviar a mensagem. Tente novamente.");
    }

    const whatsappUrl = `https://api.whatsapp.com/send?phone=seunumerodetelefone&text=Nome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;
    
    // Enviar dados para o servidor
    fetch('seu_script_php.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
    })
    .then(response => {
        if (response.ok) {
            feedback.style.display = 'block';
            feedback.innerText = "Mensagem enviada com sucesso!";
            feedback.style.color = 'green';
            window.open(whatsappUrl, '_blank');
        } else {
            feedback.style.display = 'block';
            feedback.innerText = "Erro ao enviar a mensagem. Tente novamente.";
            feedback.style.color = 'red';
        }
    })
    .catch(error => {
        feedback.style.display = 'block';
        feedback.innerText = "Erro ao enviar a mensagem. Tente novamente.";
        feedback.style.color = 'red';
    });
});