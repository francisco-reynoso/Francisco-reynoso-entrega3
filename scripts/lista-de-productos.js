const lista = [];

lista.push(new Producto("bleu de chanel", "chanel", 95000,1));
lista.push(new Producto("sauvage", "dior", 105000,2));
lista.push(new Producto("eros", "versace", 100000,3));
lista.push(new Producto("allure homme sport", "chanel", 70500,4));
lista.push(new Producto("nautica voyage", "nautica voyage", 85000,5));
lista.push(new Producto("la nuit del homme", "yves saint laurent", 90000,6));
lista.push(new Producto("the one", "dolce && gabbana", 90000,7));
lista.push(new Producto("cool water", "davidoff", 89000,8));
lista.push(new Producto("aventus", "cred", 200000,9));

function crearTabla() {
    const bodyTabla = document.querySelector(`#tabla`);
    bodyTabla.innerHTML = ` `;
    lista.forEach((item) => {
        bodyTabla.innerHTML = bodyTabla.innerHTML + `
            <div class="tarjetas">
                <h2>${item.nombre}</h2>
                <div class="perfume">
                    <img src="./assets/imagenes/${item.nombre}.jpg" alt="" class="muestra">
                </div>
                <p>$${item.precio}</p>
                <img src="./assets/imagenes/anadir-al-carrito.png" alt="" class="boton" id = "${item.id}"> 
            </div>
        `
    });
}
crearTabla();

