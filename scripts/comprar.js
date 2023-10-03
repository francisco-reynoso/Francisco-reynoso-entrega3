const carrito = [];
const miCarrito = document.querySelector("#carrito-sin-notificacion");
const botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    comprar();

    const producto = boton.parentNode;
    console.log(producto);
  });
});

function comprar() {
  miCarrito.classList.remove("header-carrito");
  miCarrito.classList.add("header-carrito-con-notificacion");

    miCarrito.addEventListener("click", () => {
        const modal = document.querySelectorAll(".modal");
        console.log(modal);
        for (const i of modal) {
            i.classList.remove("modal");
            i.classList.add("mostrar-modal");
        }
    });

  const eleNotificacion = document.querySelectorAll(".sin-notificacion");

  for (const ele of eleNotificacion) {
    ele.classList.remove("sin-notificacion");
    ele.classList.add("con-notificacion");
  }
}
miCarrito.addEventListener("click", () => {
    const eleNotificacion = document.querySelectorAll(".con-notificacion");

    for (const ele of eleNotificacion) {
        ele.classList.remove("con-notificacion");
        ele.classList.add("sin-notificacion");
    }
});
const cerrar_modal = document.querySelector("#cerrar-modal");
cerrar_modal.addEventListener("click", () => {
    const modal = document.querySelectorAll(".mostrar-modal");
    console.log(modal);
    for (const i of modal) {
        i.classList.remove("mostrar-modal");
        i.classList.add("modal");
        }
});


console.log(botones);

// function comprar(e) {
//     const idProducto = e.target.id;
// }

// console.log(idProducto)
