const inventario = { // Objeto con la lista de productos
    productos: [ // Arreglo de productos
        { 
            nombre: "iPhone 11 ", 
            Almacenamiento: 128, 
            Precio: 300, 
            imagen: "./Recursos/Imagenes/iPhone_11.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 11 Pro", 
            Almacenamiento: 128, 
            Precio: 380, 
            imagen: "./Recursos/Imagenes/iPhone_11Pro.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 12", 
            Almacenamiento: 128, 
            Precio: 390, 
            imagen: "./Recursos/Imagenes/iPhone_12.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 12 Pro ", 
            Almacenamiento: 128, 
            Precio: 430, 
            imagen: "./Recursos/Imagenes/iPhone_12Pro.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 13", 
            Almacenamiento: 128, 
            Precio: 500, 
            imagen: "./Recursos/Imagenes/iPhone_13.webp" // URL de la imagen
        },
        { 
            nombre: "iPhone 13 Pro", 
            Almacenamiento: 128, 
            Precio: 600, 
            imagen: "./Recursos/Imagenes/iPhone_13Pro.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 14 ", 
            Almacenamiento: 128, 
            Precio: 570, 
            imagen: "./Recursos/Imagenes/iPhone_14.png" // URL de
        },
        { 
            nombre: "iPhone 14 Pro ", 
            Almacenamiento: 128, 
            Precio: 780, 
            imagen: "./Recursos/Imagenes/iPhone_14Pro.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 15 ", 
            Almacenamiento: 128, 
            Precio: 800, 
            imagen: "./Recursos/Imagenes/iPhone_15.webp" // URL de la imagen
        },
        { 
            nombre: "iPhone 15 Pro", 
            Almacenamiento: 128, 
            Precio: 970, 
            imagen: "./Recursos/Imagenes/iPhone_15Pro.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 16", 
            Almacenamiento: 128, 
            Precio: 1000, 
            imagen: "./Recursos/Imagenes/iPhone_16.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 16 Pro", 
            Almacenamiento: 128, 
            Precio: 1280, 
            imagen: "./Recursos/Imagenes/iPhone_16Pro.png"
        },
        { 
            nombre: "iPhone 16 Pro Max", 
            Almacenamiento: 256, 
            Precio: 1550, 
            imagen: "./Recursos/Imagenes/iPhone_16Pro.png"
        },        
    ]
};

const contenedor = document.getElementById('contenedor'); // Referencia al contenedor donde se mostrarán los productos

const productos = inventario.productos; // Simplifica el acceso a los productos

const renderizarProductos = (productosParaMostrar) => { // Función para mostrar productos en la página
    let contenidoHTML = ''; // Variable para almacenar el HTML de cada producto
    productosParaMostrar.forEach((producto) => { // Itera sobre cada producto en el arreglo
        contenidoHTML += `
            <div class="producto-item">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <div class="producto-detalle">
                    <h2>${producto.nombre}</h2>
                    <ul>
                        <li>Precio: $${producto.Precio}</li>
                        <li>Almacenamiento: ${producto.Almacenamiento}</li>
                    </ul>
                </div>
            </div>
        `; // Crea HTML con la información de cada producto
    });
    contenedor.innerHTML = contenidoHTML; // Inserta el HTML generado en el contenedor
};

renderizarProductos(productos); // Muestra inicialmente todos los productos

const botonFiltrar = document.getElementById('botonFiltrar'); // Referencia al botón de filtrar
const textoBusqueda = document.getElementById('textoBusqueda'); // Referencia al campo de texto de búsqueda

const manejadorFiltrar = () => { // Función para manejar el evento de filtro
    const valorABuscar = textoBusqueda.value.toLowerCase(); // Obtiene y convierte a minúsculas el valor de búsqueda
    const productosFiltrados = productos.filter((producto) => { // Filtra los productos según el valor de búsqueda
        return producto.nombre.toLowerCase().includes(valorABuscar); // Verifica si el nombre contiene el texto buscado
    });
    renderizarProductos(productosFiltrados); // Muestra solo los productos filtrados
};

botonFiltrar.addEventListener('click', manejadorFiltrar); // Asocia el clic en el botón de filtro con la función manejadora
textoBusqueda.addEventListener('input', manejadorFiltrar); // Activa la función de filtro mientras se escribe
