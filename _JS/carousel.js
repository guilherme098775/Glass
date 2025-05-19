// script.js

const carouselImages = document.querySelector('.carousel-images');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function startAutoScroll() {
    setInterval(showNextImage, 3000); // Change image every 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    startAutoScroll();
});


document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carrossel-35-track');
    const images = Array.from(track.children);
    const prevBtn = document.querySelector('.carrossel-35-btn.prev');
    const nextBtn = document.querySelector('.carrossel-35-btn.next');
    const visible = 4; // Quantas imagens aparecem ao mesmo tempo
    let index = 0;

    // Clona as primeiras e últimas imagens para efeito infinito
    for (let i = 0; i < visible; i++) {
        track.appendChild(images[i].cloneNode(true));
        track.insertBefore(images[images.length - 1 - i].cloneNode(true), track.firstChild);
    }

    const total = images.length;
    let current = visible;

    function update() {
        const imgWidth = track.children[0].offsetWidth + 16; // largura + margin
        track.style.transform = `translateX(${-current * imgWidth}px)`;
    }

    // Inicializa posição
    setTimeout(update, 100);

    nextBtn.addEventListener('click', () => {
        current++;
        update();
        if (current === total + visible) {
            setTimeout(() => {
                current = visible;
                track.style.transition = 'none';
                update();
                setTimeout(() => track.style.transition = '', 20);
            }, 500);
        }
    });

    prevBtn.addEventListener('click', () => {
        current--;
        update();
        if (current === 0) {
            setTimeout(() => {
                current = total;
                track.style.transition = 'none';
                update();
                setTimeout(() => track.style.transition = '', 20);
            }, 500);
        }
    });

    // Responsivo: atualiza ao redimensionar
    window.addEventListener('resize', update);
});


function enableCarouselDrag(carouselTrackSelector, visible = 1) {
    const track = document.querySelector(carouselTrackSelector);
    if (!track) return;

    let isDown = false;
    let startX;
    let scrollLeft;
    let moved = false;

    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft || 0;
        moved = false;
        track.style.cursor = 'grabbing';
    });

    track.addEventListener('mouseleave', () => {
        isDown = false;
        track.style.cursor = '';
    });

    track.addEventListener('mouseup', (e) => {
        isDown = false;
        track.style.cursor = '';
        if (moved) {
            e.preventDefault();
        }
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        moved = true;
        const x = e.pageX - track.offsetLeft;
        const walk = (x - startX);
        track.scrollLeft = scrollLeft - walk;
    });

    // Touch events para mobile
    track.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - track.offsetLeft;
        scrollLeft = track.scrollLeft || 0;
        moved = false;
    });

    track.addEventListener('touchend', () => {
        isDown = false;
    });

    track.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - track.offsetLeft;
        const walk = (x - startX);
        track.scrollLeft = scrollLeft - walk;
        moved = true;
    });
}

// Ative para todos os carrosseis desejados:
enableCarouselDrag('.carousel-images');      // Carrossel principal
enableCarouselDrag('.carrossel-35-track', 4); // Carrossel de 35 imagens

document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.carrossel-35-track');
    const prevBtn = document.querySelector('.carrossel-35-btn.prev');
    const nextBtn = document.querySelector('.carrossel-35-btn.next');
    const carrosselSection = document.querySelector('.carrossel-35');
    const viewport = document.querySelector('.carrossel-35-viewport');
    const visible = 3.5; // 3 imagens e meia visíveis
    let images = Array.from(track.querySelectorAll('img'));

    // Envolve cada imagem em um wrapper para overlay +
    images.forEach((img, i) => {
        const wrap = document.createElement('div');
        wrap.className = 'carrossel-35-img-wrap';
        img.parentNode.insertBefore(wrap, img);
        wrap.appendChild(img);
        // Adiciona overlay +
        const plus = document.createElement('div');
        plus.className = 'carrossel-35-img-plus';
        plus.innerHTML = '<span>+</span>';
        wrap.appendChild(plus);

        // Clique para expandir
        wrap.addEventListener('click', function (e) {
            // Evita conflito com drag
            if (wrap.classList.contains('expanded')) return;
            expandCarousel(img.src, img.alt, i);
        });
    });

    images = Array.from(track.querySelectorAll('.carrossel-35-img-wrap'));

    // Clona as primeiras e últimas imagens para efeito infinito
    for (let i = 0; i < Math.ceil(visible); i++) {
        track.appendChild(images[i].cloneNode(true));
        track.insertBefore(images[images.length - 1 - i].cloneNode(true), track.firstChild);
    }

    const total = images.length;
    let current = Math.ceil(visible);

    function update() {
        const imgWidth = track.children[0].offsetWidth + 16; // largura + margin
        track.style.transform = `translateX(${-current * imgWidth}px)`;
    }

    setTimeout(update, 100);

    nextBtn.addEventListener('click', () => {
        current++;
        update();
        if (current === total + Math.ceil(visible)) {
            setTimeout(() => {
                current = Math.ceil(visible);
                track.style.transition = 'none';
                update();
                setTimeout(() => track.style.transition = '', 20);
            }, 500);
        }
    });

    prevBtn.addEventListener('click', () => {
        current--;
        update();
        if (current === 0) {
            setTimeout(() => {
                current = total;
                track.style.transition = 'none';
                update();
                setTimeout(() => track.style.transition = '', 20);
            }, 500);
        }
    });

    // Drag/Swipe
    let isDown = false, startX, scrollLeft, moved = false;
    track.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX;
        moved = false;
        track.style.cursor = 'grabbing';
    });
    track.addEventListener('mouseleave', () => {
        isDown = false;
        track.style.cursor = '';
    });
    track.addEventListener('mouseup', (e) => {
        if (!isDown) return;
        isDown = false;
        track.style.cursor = '';
        if (moved) {
            const diff = e.pageX - startX;
            if (diff > 50) prevBtn.click();
            else if (diff < -50) nextBtn.click();
        }
    });
    track.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        moved = true;
    });

    // Touch events para mobile
    track.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX;
        moved = false;
    });
    track.addEventListener('touchend', (e) => {
        if (!isDown) return;
        isDown = false;
        if (moved) {
            const diff = e.changedTouches[0].pageX - startX;
            if (diff > 50) prevBtn.click();
            else if (diff < -50) nextBtn.click();
        }
    });
    track.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        moved = true;
    });

    window.addEventListener('resize', update);

    // Função para expandir imagem e carrossel
    function expandCarousel(src, alt, index) {
        // Cria overlay
        const overlay = document.createElement('div');
        overlay.className = 'carrossel-expand-overlay';
        overlay.innerHTML = `
            <div class="carrossel-expand-content">
                <div class="carrossel-expand-nav">
                    <button class="carrossel-expand-btn prev">&#10094;</button>
                    <button class="carrossel-expand-btn next">&#10095;</button>
                </div>
                <img src="${src}" alt="${alt}">
            </div>
            <button class="carrossel-expand-close">&times;</button>
        `;
        document.body.appendChild(overlay);

        // Fecha ao clicar no botão ou fora da imagem
        overlay.querySelector('.carrossel-expand-close').onclick = () => overlay.remove();
        overlay.onclick = (e) => {
            if (e.target === overlay) overlay.remove();
        };

        // Navegação prev/next
        const allImgs = Array.from(document.querySelectorAll('.carrossel-35-track img'));
        let currentIndex = index;

        function showImg(idx) {
            const img = overlay.querySelector('img');
            img.src = allImgs[idx].src;
            img.alt = allImgs[idx].alt;
            currentIndex = idx;
        }

        overlay.querySelector('.carrossel-expand-btn.prev').onclick = (e) => {
            e.stopPropagation();
            let idx = (currentIndex - 1 + allImgs.length) % allImgs.length;
            showImg(idx);
        };
        overlay.querySelector('.carrossel-expand-btn.next').onclick = (e) => {
            e.stopPropagation();
            let idx = (currentIndex + 1) % allImgs.length;
            showImg(idx);
        };
    }
});

// Carrossel simples
const lista = document.querySelector('.galeria-lista');
const slides = document.querySelectorAll('.galeria-slide');
const prev = document.querySelector('.galeria-prev');
const next = document.querySelector('.galeria-next');
let index = 0;
const total = slides.length;
const slideWidth = slides[0].offsetWidth + 14; // 14px gap

function updateCarrossel() {
  lista.style.transform = `translateX(-${index * slideWidth}px)`;
}
prev.onclick = () => {
  index = (index - 1 + total) % total;
  updateCarrossel();
};
next.onclick = () => {
  index = (index + 1) % total;
  updateCarrossel();
};
window.addEventListener('resize', updateCarrossel);

// Expansão de imagem com navegação lateral visual
document.querySelectorAll('.galeria-slide').forEach((slide, idx) => {
    slide.addEventListener('click', function () {
        const slides = Array.from(document.querySelectorAll('.galeria-slide img:not(.hovergaleria)'));
        let current = idx;

        function showOverlay(index) {
            // Remove overlay antigo se existir
            const old = document.querySelector('.galeria-expand-overlay');
            if (old) old.remove();

            // Calcula índices circularmente
            const prevIdx = (index - 1 + slides.length) % slides.length;
            const nextIdx = (index + 1) % slides.length;

            // Cria overlay
            const overlay = document.createElement('div');
            overlay.className = 'galeria-expand-overlay';
            overlay.innerHTML = `
                <div class="galeria-expand-content">
                    <div class="galeria-expand-side galeria-expand-prev">
                        <img src="${slides[prevIdx].src}" alt="" />
                        <button class="galeria-expand-btn prev">&#10094;</button>
                    </div>
                    <div class="galeria-expand-center">
                        <img src="${slides[index].src}" alt="" />
                    </div>
                    <div class="galeria-expand-side galeria-expand-next">
                        <img src="${slides[nextIdx].src}" alt="" />
                        <button class="galeria-expand-btn next">&#10095;</button>
                    </div>
                </div>
                <button class="galeria-expand-close">&times;</button>
            `;
            document.body.appendChild(overlay);

            // Fechar overlay
            overlay.querySelector('.galeria-expand-close').onclick = () => overlay.remove();
            overlay.onclick = (e) => {
                if (e.target === overlay) overlay.remove();
            };

            // Navegação
            overlay.querySelector('.galeria-expand-btn.prev').onclick = (e) => {
                e.stopPropagation();
                showOverlay(prevIdx);
            };
            overlay.querySelector('.galeria-expand-btn.next').onclick = (e) => {
                e.stopPropagation();
                showOverlay(nextIdx);
            };
            // Clique nas imagens laterais também navega
            overlay.querySelector('.galeria-expand-prev img').onclick = (e) => {
                e.stopPropagation();
                showOverlay(prevIdx);
            };
            overlay.querySelector('.galeria-expand-next img').onclick = (e) => {
                e.stopPropagation();
                showOverlay(nextIdx);
            };
        }

        showOverlay(current);
    });
});

document.getElementById('menu-hamburguer').onclick = function() {
    document.getElementById('nav-menu').classList.toggle('ativo');
};