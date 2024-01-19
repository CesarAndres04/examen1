// Función para manejar el clic en las casillas
function casillaOnClic(x, y) {
    // Elimina la clase "selected" de todas las casillas
    document.querySelectorAll('.casilla').forEach(casilla => casilla.classList.remove('selected'));

    // Agrega la clase "selected" a la casilla clicada y sus adyacentes
    marcarCasillas(x, y);

    
    const xDerecho = 7 - x;
    const yDerecho = 7 - y;

    
    marcarCasillas(xDerecho + 8, yDerecho);

   
}

// Función para marcar las casillas adyacentes
function marcarCasillas(x, y) {
    const casillasAdyacentes = [
        { dx: 0, dy: 0 },
        { dx: -1, dy: 0 },
        { dx: 1, dy: 0 },
        { dx: 0, dy: -1 },
        { dx: 0, dy: 1 },
    ];

    casillasAdyacentes.forEach(ad => {
        const nuevaX = x + ad.dx;
        const nuevaY = y + ad.dy;

        // Verifica los límites del tablero
        if (nuevaX >= 0 && nuevaX < 8 && nuevaY >= 0 && nuevaY < 8) {
            const idCasilla = nuevaX + '_' + nuevaY;
            const casilla = document.getElementById(idCasilla);
            casilla.classList.add('selected');
        }
    });
}

// Asigna la función casillaOnClic a todos los botones con la clase "casilla"
document.querySelectorAll('.casilla').forEach(casilla => casilla.addEventListener('click', function () {
    const coordenadas = this.id.split('_');
    const x = parseInt(coordenadas[0]);
    const y = parseInt(coordenadas[1]);
    casillaOnClic(x, y);
}));
