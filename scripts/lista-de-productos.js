function crearTabla() {
    const bodyTabla = document.querySelector(`#tabla`);
    bodyTabla.innerHTML = ` `;
    lista.forEach((item) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML + `
            <div class="tarjetas">
                <h2>${item.nombre}</h2>
                <div class="perfume">
                    <img src="${item.img}" alt="" class="muestra">
                </div>
                <p>$${item.precio}</p>
                <img src="./assets/imagenes/anadir-al-carrito.png" alt="" class="boton" id = "${item.id}"> 
            </div>
        `
    });
}
crearTabla();




