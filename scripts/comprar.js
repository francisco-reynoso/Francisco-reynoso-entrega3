const carrito = [];
const miCarrito = document.getElementById("carrito-sin-notificacion");


const boton = document.getElementById("1");
boton.addEventListener("click", comprar);
function comprar() {
    miCarrito.classList.remove("header-carrito");
    miCarrito.classList.add("header-carrito-con-notificacion");

    const eleNotificacion = document.getElementsByClassName("sin-notificacion");

    for (const ele of eleNotificacion) {
        ele.classList.remove("sin-notificacion");
        ele.classList.add("con-notificacion");
    }
    

}

miCarrito.addEventListener("click", () => {
    miCarrito.classList.remove("header-carrito-con-notificacion");
    miCarrito.classList.add("header-carrito");
    const eleNotificacion = document.getElementsByClassName("con-notificacion");

    console.log(eleNotificacion)
    for (const ele of eleNotificacion) {
        ele.classList.remove("con-notificacion");
        ele.classList.add("sin-notificacion");
        
    }
});

const botones = document.querySelectorAll(".boton");

console.log(botones)
botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        comprar();
        
    });
    
});

// function comprar(e) {
//     const idProducto = e.target.id;
// }

// console.log(idProducto)