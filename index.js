const inventario = {
    productos: [
        { 
            nombre: "iPhone 16", 
            Almacenamiento: 128, 
            Precio: 1000, 
            stock: 10,
            imagen: "https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/seo/Iphone-16-colores-66eec9bfa7bc6-O.png"
        },
        { 
            nombre: "iPhone 16 Pro", 
            Almacenamiento: 128, 
            Precio: 1280, 
            stock: 5,
            imagen: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121031-iphone-16-pro.png"
        },
        { 
            nombre: "iPhone 16 Pro Max", 
            Almacenamiento: 256, 
            Precio: 1550, 
            stock: 8,
            imagen: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121032-iphone-16-pro-max.png"
        }
    ]
};


// Referenciar el contenedor
const contenedor = document.getElementById('contenedor');

// Simplificar arreglo
const productos = inventario.productos;

// Función para renderizar productos
const renderizarProductos = (productosParaMostrar) => {
    let contenidoHTML = '';
    productosParaMostrar.forEach((producto) => {
        contenidoHTML += `
            <div class="producto-item">
                <img src="${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
                <div class="producto-detalle">
                    <h2>${producto.nombre}</h2>
                    <ul>
                        <li>Precio: $${producto.Precio}</li>
                        <li>Stock: ${producto.stock}</li>
                    </ul>
                </div>
            </div>
        `;
    });
    contenedor.innerHTML = contenidoHTML;
};

// Renderizado inicial de todos los productos
renderizarProductos(productos);

// EVENTOS --------------------------------
const botonFiltrar = document.getElementById('botonFiltrar');
const textoBusqueda = document.getElementById('textoBusqueda');

// Manejador del evento filtro
const manejadorFiltrar = () => {
    // Extraer el valor del campo búsqueda
    const valorABuscar = textoBusqueda.value.toLowerCase();

    // Filtrar el arreglo
    const productosFiltrados = productos.filter((producto) => {
        return producto.nombre.toLowerCase().includes(valorABuscar);
    });

    // Volver a renderizar con los productos filtrados
    renderizarProductos(productosFiltrados);
};

// Asociar eventos
botonFiltrar.addEventListener('click', manejadorFiltrar);
textoBusqueda.addEventListener('input', manejadorFiltrar);
