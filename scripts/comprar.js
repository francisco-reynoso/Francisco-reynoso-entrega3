const carrito = document.getElementById("carrito-sin-notificacion");


const boton = document.getElementById("1");
boton.addEventListener("click", comprar);
function comprar() {
    carrito.classList.remove("header-carrito");
    carrito.classList.add("header-carrito-con-notificacion");

    const eleNotificacion = document.getElementsByClassName("sin-notificacion");

    for (const ele of eleNotificacion) {
        ele.classList.remove("sin-notificacion");
        ele.classList.add("con-notificacion");
    }
    

}

carrito.addEventListener("click", () => {
    carrito.classList.remove("header-carrito-con-notificacion");
    carrito.classList.add("header-carrito");
    const eleNotificacion = document.getElementsByClassName("con-notificacion");

    console.log(eleNotificacion)
    for (const ele of eleNotificacion) {
        ele.classList.remove("con-notificacion");
        ele.classList.add("sin-notificacion");
        
    }
});



