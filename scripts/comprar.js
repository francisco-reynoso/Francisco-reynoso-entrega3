const eleNotificacion = document.getElementsByClassName("sin-notificacion");
const carrito = document.getElementById("carrito-sin-notificacion");


const boton = document.getElementById("1");
boton.addEventListener("click", comprar);
function comprar() {
    carrito.classList.remove("header-carrito");
    carrito.classList.add("header-carrito-con-notificacion");
    // const bodyTabla = document.querySelector(`#carrito`);
    // bodyTabla.innerHTML = ` `;
    // lista.forEach((item) => {
    //     if (item.id == 1) {
    //         bodyTabla.innerHTML = bodyTabla.innerHTML + `
    //         <section class="productos-carrito">
    //             <img src="./assets/imagenes/${item.nombre}.jpg" alt="" class="icono">
    //             <div class="info">
    //                 <p>${item.nombre}</p>
    //                 <p>$${item.precio}</p>
    //             </div>
    //             <img src="./assets/imagenes/cerrar.png" alt="" class="borrar" >
    //         </section>
    //     `
            
    //     }
       
    // });
    for (const ele of eleNotificacion) {
        ele.classList.remove("sin-notificacion");
        ele.classList.add("con-notificacion");
    }
    

}

carrito.addEventListener("click", () => {
    carrito.classList.remove("header-carrito-con-notificacion");
    carrito.classList.add("header-carrito");
    
    for (const ele of eleNotificacion) {
        ele.classList.remove("con-notificacion");
        ele.classList.add("sin-notificacion");
        
    }
});







