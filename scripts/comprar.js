const carrito = [];
const miCarrito = document.querySelector("#carrito-sin-notificacion");
const botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
        comprar();

        
    });
    
});


function comprar() {
    miCarrito.classList.remove("header-carrito");
    miCarrito.classList.add("header-carrito-con-notificacion");

    const eleNotificacion = document.querySelectorAll(".sin-notificacion");

    for (const ele of eleNotificacion) { 
        ele.classList.remove("sin-notificacion");
        ele.classList.add("con-notificacion");
    }
}
miCarrito.addEventListener("click", () => {
    miCarrito.classList.remove("header-carrito-con-notificacion");
    miCarrito.classList.add("header-carrito");
    const eleNotificacion = document.querySelectorAll(".con-notificacion");

    for (const ele of eleNotificacion) {
        ele.classList.remove("con-notificacion");
        ele.classList.add("sin-notificacion");
        
    }
});

console.log(botones)





// function comprar(e) {
//     const idProducto = e.target.id;
// }

// console.log(idProducto)