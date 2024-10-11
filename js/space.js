// Añade un listener al botón de búsqueda que se ejecuta cuando se hace clic en él.
document.getElementById('btnBuscar').addEventListener('click', () => {
    // Obtiene el valor ingresado en el campo de búsqueda, eliminando espacios en blanco al inicio y al final.
    let query = document.getElementById('inputBuscar').value.trim();

    // Si el campo de búsqueda no está vacío, realiza la búsqueda.
    if (query) {
        buscarImagenes(query);
    } else {
        // Si el campo está vacío, muestra una alerta para que el usuario ingrese un término de búsqueda.
        alert('Por favor, ingresa un término de búsqueda.');
    }
});

// Función que realiza la búsqueda de imágenes en la API de NASA.
function buscarImagenes(query) {
    // Construye la URL con el término de búsqueda ingresado por el usuario.
    let url = `https://images-api.nasa.gov/search?q=${query}`;

    // Realiza la solicitud a la API utilizando fetch.
    fetch(url)
        // Convierte la respuesta a formato JSON.
        .then(response => response.json())
        // Una vez obtenida la respuesta, verifica si hay resultados.
        .then(data => {
            // Si hay elementos en la colección de datos, muestra los resultados.
            if (data.collection.items.length > 0) {
                mostrarResultados(data.collection.items);
            } else {
                // Si no hay resultados, muestra un mensaje de error.
                mostrarError('No se encontraron resultados.');
            }
        })
        // Si ocurre algún error durante la solicitud, lo captura y lo muestra en la consola.
        .catch(error => console.error('Error al obtener los datos:', error));
}

// Función que muestra los resultados obtenidos en la interfaz.
function mostrarResultados(items) {
    // Obtiene el contenedor donde se mostrarán las tarjetas de imágenes.
    let contenedor = document.getElementById('contenedor');
    
    // Limpia cualquier contenido previo en el contenedor.
    contenedor.innerHTML = '';

    // Recorre cada item (imagen) en los resultados obtenidos.
    items.forEach(item => {
        // Desestructura el objeto para obtener los links y la data de la imagen.
        let { links, data } = item;
        // Desestructura la información de los datos obtenidos.
        let { title, description, date_created } = data[0];
        // Obtiene la URL de la imagen (si está disponible).
        let imageUrl = links ? links[0].href : '';

        // Inserta la tarjeta con la imagen y los detalles en el contenedor, utilizando clases de Bootstrap.
        contenedor.innerHTML += `
            <div class="col-lg-4 col-md-6 mb-4">
                ${crearTarjeta(imageUrl, title, description, date_created)}
            </div>
        `;
    });
}
// Función que genera la estructura HTML para mostrar cada tarjeta.
function crearTarjeta(imageUrl, title, description, date_created) {
    return `
    <div class="card h-100">
        <img src="${imageUrl}" class="card-img-top" alt="${title}">
        <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <!-- Si la descripción está disponible, la muestra. Si no, muestra 'Sin descripción disponible'. -->
            <p class="card-text" style="max-height: 100px; overflow-y: auto;">${description ? description : 'Sin descripción disponible.'}</p>
            <!-- Muestra la fecha de creación en formato local. -->
            <p class="card-text"><small class="text-muted">Fecha: ${new Date(date_created).toLocaleDateString()}</small></p>
        </div>
    </div>
    `;
}
// Función que muestra un mensaje de error en caso de no encontrar resultados.
function mostrarError(mensaje) {
    // Obtiene el contenedor y muestra el mensaje de error con estilo de texto centrado y color rojo.
    let contenedor = document.getElementById('contenedor');
    contenedor.innerHTML = `<p class="text-center text-danger">${mensaje}</p>`;
}
