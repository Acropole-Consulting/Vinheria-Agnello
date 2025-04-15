const header = document.querySelector('header');
let timeout; // Variável para armazenar o temporizador

document.addEventListener('mousemove', function(event) {
    // Se o mouse está próximo do topo da página
    if (event.clientY < 100) {
        clearTimeout(timeout); // Cancela o temporizador anterior, se houver
        header.style.top = '0'; // Exibe o cabeçalho
    } else {
        // Se o mouse não estiver no topo, esconde o cabeçalho após um pequeno atraso (200ms)
        timeout = setTimeout(() => {
            header.style.top = '-80px'; // Esconde o cabeçalho
        }, 200); // Ajuste o tempo conforme necessário
    }
});
