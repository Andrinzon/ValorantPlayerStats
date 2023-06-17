const buscarBtn = document.getElementById('buscar-btn');
const inputBorder = document.getElementById('input-border');
const tablaContainer = document.getElementById('tabla-container');

buscarBtn.addEventListener('click', () => {
    const playerName = inputBorder.value;
    if (playerName.trim() !== '') {
        obtenerEstadisticas(playerName);
    }
});

function obtenerEstadisticas(playerName) {
    const baseUrl = 'https://api.tracker.gg/api/v2/valorant/standard/profile/riot/';
    const platform = 'pc';
    const url = `${baseUrl}${playerName}?platform=${platform}`;

    axios.get(url)
        .then(response => {
            const data = response.data;
            // Procesa los datos y actualiza la tabla en tu HTML
            actualizarTabla(data);
        })
        .catch(error => {
            console.error(error);
        });
}

function actualizarTabla(data) {
    // Aquí puedes usar los datos devueltos para actualizar tu tabla HTML
    // Puedes acceder a las estadísticas específicas del jugador a través de `data.segments` u otros campos según la estructura de la respuesta
    // Puedes generar dinámicamente el HTML para la tabla y agregarlo al contenedor 'tablaContainer'
}