function crearTabla(lista) {
    const bodyTabla = document.querySelector(`#tabla`);
    bodyTabla.innerHTML = ` `;
    lista.forEach((item) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML + `
            <div class="tarjetas" id="tarjetas-${item.id}"">
                <h2>${item.nombre}</h2>
                <div class="perfume">
                    <img src="${item.img}" alt="" class="muestra">
                </div>
                <p class = "precio">$${item.precio}</p>
                <img src="./assets/imagenes/anadir-al-carrito.png" alt="" class="boton" id = "${item.id}"> 
            </div>
        `
    });
}

function cargarJSON() {
    fetch(`./mis-productos.json`)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        
        console.log(data);
       
    })
}

cargarJSON();





