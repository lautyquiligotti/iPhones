const inventario = { // Objeto con la lista de productos
    productos: [ // Arreglo de productos
        { 
            nombre: "iPhone 11 ", 
            Almacenamiento: 128, 
            Precio: 300, 
            imagen: "https://buenosairesimport.com/2464-large_default/iphone-11-128-gb.jpg" // URL de la imagen
        },
        { 
            nombre: "iPhone 11 Pro", 
            Almacenamiento: 128, 
            Precio: 380, 
            imagen: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple_iPhone-11-Pro_Colors_091019_big.jpg.large.jpg" // URL de la imagen
        },
        { 
            nombre: "iPhone 12", 
            Almacenamiento: 128, 
            Precio: 390, 
            imagen: "https://acdn.mitiendanube.com/stores/001/590/690/products/diseno-sin-titulo-911-1f3219897c4971f84d16449610963425-1024-1024.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 12 Pro ", 
            Almacenamiento: 128, 
            Precio: 430, 
            imagen: "https://www.compumacypc.com.ar/wp-content/uploads/Apple_iphone12mini-iphone12max-homepodmini-availability_iphone12promax-geo_110520_inline.jpg.large-1.jpg" // URL de la imagen
        },
        { 
            nombre: "iPhone 13", 
            Almacenamiento: 128, 
            Precio: 500, 
            imagen: "https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-color-lineup-220308_big_carousel.jpg.small_2x.jpg" // URL de la imagen
        },
        { 
            nombre: "iPhone 13 Pro", 
            Almacenamiento: 128, 
            Precio: 600, 
            imagen: "https://i0.wp.com/sixcolors.com/wp-content/uploads/2021/10/iphone13pro-lineup-new-6c.jpg?ssl=1" // URL de la imagen
        },
        { 
            nombre: "iPhone 14 ", 
            Almacenamiento: 128, 
            Precio: 570, 
            imagen: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/refurb-iphone-14-plus-midnight-202404_AV1_GEO_EMEA?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713205107544" // URL de la imagen
        },
        { 
            nombre: "iPhone 14 Pro ", 
            Almacenamiento: 128, 
            Precio: 780, 
            imagen: "https://www.macstation.com.ar/web/image/product.image/1985/image_1024/iPhone%2014%20Pro%20Max%20128GB%20-%20Plata?unique=d9de110" // URL de la imagen
        },
        { 
            nombre: "iPhone 15 ", 
            Almacenamiento: 128, 
            Precio: 800, 
            imagen: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_hero.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 15 Pro", 
            Almacenamiento: 128, 
            Precio: 970, 
            imagen: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/iphone_15_pro.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 16", 
            Almacenamiento: 128, 
            Precio: 1000, 
            imagen: "https://d28hi93gr697ol.cloudfront.net/9ef84dda-32dd-4016-7da3-1c0a824fffb4/seo/Iphone-16-colores-66eec9bfa7bc6-O.png" // URL de la imagen
        },
        { 
            nombre: "iPhone 16 Pro", 
            Almacenamiento: 128, 
            Precio: 1280, 
            imagen: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121031-iphone-16-pro.png"
        },
        { 
            nombre: "iPhone 16 Pro Max", 
            Almacenamiento: 256, 
            Precio: 1550, 
            imagen: "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121032-iphone-16-pro-max.png"
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
