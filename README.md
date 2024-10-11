NASA Image Search

Este proyecto es una aplicación web que permite buscar imágenes a través de la API de la NASA. Al ingresar un término en el buscador, se muestra una galería de tarjetas con las imágenes obtenidas, junto con su título, descripción y fecha de creación. El diseño está basado en Bootstrap.

Características

Búsqueda de imágenes: Permite realizar consultas a la API de la NASA con el término ingresado por el usuario.
Visualización de resultados: Las imágenes se muestran en formato de tarjeta, incluyendo título, descripción y fecha.
Diseño responsivo: Utiliza Bootstrap para garantizar una interfaz amigable en cualquier dispositivo.

Tecnologías utilizadas

HTML5: Para la estructura de la página web.
CSS3: Para los estilos personalizados.
Bootstrap 5: Para el diseño responsivo y la creación de las tarjetas.
JavaScript (ES6): Para la interacción y consumo de la API.
NASA Images API: Para obtener los datos de las imágenes.

Instalación y uso

Requisitos previos

Un navegador web moderno.
Conexión a Internet para poder acceder a la API de la NASA.

Pasos para clonar y ejecutar el proyecto

Clona el repositorio a tu máquina local:

git clone https://github.com/sosoph11/Buscador_de_Galaxias.git
Abre el archivo index.html en tu navegador para visualizar la aplicación.

Ingresa un término de búsqueda (por ejemplo: "Jupiter", "Andromeda", etc.) y presiona el botón de "Buscar imágenes".

Estructura del proyecto

├── css/
│   ├── bootstrap.min.css  # Bootstrap CSS
│   ├── style.css          # Estilos personalizados
├── js/
│   ├── space.js           # Lógica de la aplicación y consumo de la API
├── index.html             # Página principal del proyecto
└── README.md              # Este archivo

API utilizada

Este proyecto utiliza la NASA Images API para obtener los datos de las imágenes espaciales. Los resultados incluyen información como el título de la imagen, una breve descripción, y la fecha de creación.

Ejemplo de URL de búsqueda: https://images-api.nasa.gov/search?q=andromeda

Ejemplo de uso

Al realizar una búsqueda, como por ejemplo "Andromeda", se mostrará una galería de imágenes relacionadas con ese término:
