document.querySelectorAll('.zoomable').forEach(img => {
    img.addEventListener('click', function() {
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modalImage');
        
        modal.style.display = "block"; // Exibe o modal
        modalImage.src = this.src; // Define a imagem do modal
    });
});

// Fecha o modal ao clicar no "X"
document.getElementById('closeModal').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

// Fecha o modal ao clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// MODAL PORTAS

const images = document.querySelectorAll('.zoomable');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0; // Índice da imagem atual

// Função para abrir o modal com a imagem clicada
images.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndex = index; // Atualiza o índice da imagem atual
        modal.style.display = "flex"; // Exibe o modal
        modalImage.src = this.src; // Define a imagem do modal
    });
});

// Função para fechar o modal
document.getElementById('closeModal').onclick = function() {
    modal.style.display = "none";
}

// Fecha o modal ao clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Função para mostrar a imagem anterior
prevBtn.onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1; // Volta para a imagem anterior ou vai para a última
    modalImage.src = images[currentIndex].src; // Atualiza a imagem no modal
}

// Função para mostrar a próxima imagem
nextBtn.onclick = function() {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0; // Avança para a próxima imagem ou volta para a primeira
    modalImage.src = images[currentIndex].src; // Atualiza a imagem no modal
}

//JANELAS SCRIPT

const imagesJan = document.querySelectorAll('.zoomablejan');
const modalJan = document.getElementById('modaljan');
const modalImageJan = document.getElementById('modalImagejan');
const prevBtnJan = document.getElementById('prevBtnjan');
const nextBtnJan = document.getElementById('nextBtnjan');

let currentIndexJan = 0; // Índice da imagem atual

// Função para abrir o modal com a imagem clicada
imagesJan.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndexJan = index; // Atualiza o índice da imagem atual
        modalJan.style.display = "flex"; // Exibe o modal
        modalImageJan.src = this.src; // Define a imagem do modal
    });
});

// Função para fechar o modal
document.getElementById('closeModaljan').onclick = function() {
    modalJan.style.display = "none";
}

// Fecha o modal ao clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modalJan) {
        modalJan.style.display = "none";
    }
}

// Função para mostrar a imagem anterior
prevBtnJan.onclick = function() {
    currentIndexJan = (currentIndexJan > 0) ? currentIndexJan - 1 : imagesJan.length - 1; // Volta para a imagem anterior ou vai para a última
    modalImageJan.src = imagesJan[currentIndexJan].src; // Atualiza a imagem no modal
}

// Função para mostrar a próxima imagem
nextBtnJan.onclick = function() {
    currentIndexJan = (currentIndexJan < imagesJan.length - 1) ? currentIndexJan + 1 : 0; // Avança para a próxima imagem ou volta para a primeira
    modalImageJan.src = imagesJan[currentIndexJan].src; // Atualiza a imagem no modal
}
 
// ESQUADRIAS SCRIPT

const imagesEcpi = document.querySelectorAll('.zoomableecpi');
const modalEcpi = document.getElementById('modalecpi');
const modalImageEcpi = document.getElementById('modalImageecpi');
const prevBtnEcpi = document.getElementById('prevBtnecpi');
const nextBtnEcpi = document.getElementById('nextBtnecpi');

let currentIndexEcpi = 0; // Índice da imagem atual

// Função para abrir o modal com a imagem clicada
imagesEcpi.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndexEcpi = index; // Atualiza o índice da imagem atual
        modalEcpi.style.display = "flex"; // Exibe o modal
        modalImageEcpi.src = this.src; // Define a imagem do modal
    });
});

// Função para fechar o modal
document.getElementById('closeModalecpi').onclick = function() {
    modalEcpi.style.display = "none";
}

// Fecha o modal ao clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modalEcpi) {
        modalEcpi.style.display = "none";
    }
}

// Função para mostrar a imagem anterior

prevBtnEcpi.onclick = function() {
    currentIndexEcpi = (currentIndexEcpi > 0) ? currentIndexEcpi - 1 : imagesEcpi.length - 1; // Volta para a imagem anterior ou vai para a última
    modalImageEcpi.src = imagesEcpi[currentIndexEcpi].src; // Atualiza a imagem no modal
}

// Função para mostrar a próxima imagem
nextBtnEcpi.onclick = function() {
    currentIndexEcpi = (currentIndexEcpi < imagesEcpi.length - 1) ? currentIndexEcpi + 1 : 0; // Avança para a próxima imagem ou volta para a primeira
    modalImageEcpi.src = imagesEcpi[currentIndexEcpi].src; // Atualiza a imagem no modal
}

// SCRIPT VIDRO 

const imagesVidro = document.querySelectorAll('.zoomablevidro');
const modalVidro = document.getElementById('modalvidro');
const modalImageVidro = document.getElementById('modalImagevidro');
const prevBtnVidro = document.getElementById('prevBtnvidro');
const nextBtnVidro = document.getElementById('nextBtnvidro');

let currentIndexVidro = 0; // Índice da imagem atual

// Função para abrir o modal com a imagem clicada
imagesVidro.forEach((img, index) => {
    img.addEventListener('click', function() {
        currentIndexVidro = index; // Atualiza o índice da imagem atual
        modalVidro.style.display = "flex"; // Exibe o modal
        modalImageVidro.src = this.src; // Define a imagem do modal
    });
});

// Função para fechar o modal
document.getElementById('closeModalvidro').onclick = function() {
    modalVidro.style.display = "none"; // Oculta o modal
}

// Fecha o modal ao clicar fora da imagem
window.onclick = function(event) {
    if (event.target == modalVidro) {
        modalVidro.style.display = "none"; // Oculta o modal
    }
}

// Função para mostrar a imagem anterior
prevBtnVidro.onclick = function() {
    currentIndexVidro = (currentIndexVidro > 0) ? currentIndexVidro - 1 : imagesVidro.length - 1; // Volta para a imagem anterior ou vai para a última
    modalImageVidro.src = imagesVidro[currentIndexVidro].src; // Atualiza a imagem no modal
}

// Função para mostrar a próxima imagem
nextBtnVidro.onclick = function() {
    currentIndexVidro = (currentIndexVidro < imagesVidro.length - 1) ? currentIndexVidro + 1 : 0; // Avança para a próxima imagem ou volta para a primeira
    modalImageVidro.src = imagesVidro[currentIndexVidro].src; // Atualiza a imagem no modal
}
 

