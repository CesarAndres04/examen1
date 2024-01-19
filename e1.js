
   
        const rows = 16;
        const cols = 8;
        let board = Array.from({ length: rows }, () => Array(cols).fill(false));

        function casillaOnClic(row, col) {
            // Eliminar las casillas marcadas antes de volver a pintarlas
            resetBoard();

            // Pintar las casillas marcadas
            paintCells(row, col);

            // Actualizar la interfaz gráfica
            updateUI();

            
        }

        function resetBoard() {
            board = Array.from({ length: rows }, () => Array(cols).fill(false));
        }

        function paintCells(row, col) {
            // Marcar la casilla actual
            board[row][col] = true;

            // Marcar las casillas adyacentes
            markAdjacent(row - 1, col); // Arriba
            markAdjacent(row + 1, col); // Abajo
            markAdjacent(row, col - 1); // Izquierda
            markAdjacent(row, col + 1); // Derecha
        }

        function markAdjacent(row, col) {
            if (isValidCell(row, col)) {
                board[row][col] = true;
            }
        }

        function isValidCell(row, col) {
            return row >= 0 && row < rows && col >= 0 && col < cols;
        }

        function updateUI() {
            // Actualizar la interfaz gráfica según el estado del tablero
            for (let i = 0; i < rows; i++) {
                for (let j = 0; j < cols; j++) {
                    const cellId = `${i}_${j}`;
                    const button = document.getElementById(cellId);

                    if (board[i][j]) {
                        button.textContent = 'X';
                    } else {
                        button.textContent = '';
                    }
                }
            }
        }
   

//esta es la funcion espejo

  
