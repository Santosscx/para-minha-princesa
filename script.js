// Função para expandir a imagem ao passar o mouse (hover)
function expandirImagem(photoElement) {
    photoElement.style.transform = 'scale(1.1)';
    photoElement.style.transition = 'transform 0.3s ease';
}

// Função para reduzir a imagem ao retirar o mouse
function reduzirImagem(photoElement) {
    photoElement.style.transform = 'scale(1)';
}

