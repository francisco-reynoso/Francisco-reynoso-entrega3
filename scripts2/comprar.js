let carrito = [];
const miCarrito = document.querySelector("#carrito-sin-notificacion");
const botones = document.querySelectorAll(".boton");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    comprar();
    const producto = boton.parentElement;
    const miProducto = document.querySelectorAll(".tarjetas");
    for (const i of miProducto) {
        i.addEventListener("click",() =>{
          carrito.push(i[0]);
          console.log(carrito)
          
          // const miTabla= document.querySelector("#item");
          // const total = document.querySelector("#total");
          // miTabla.innerHTML = ``;
          // carrito.forEach(({producto:{nombre,marca,precio},cantidad},index) =>{
          //     miTabla.innerHTML += `
          //     <tr>
          //         <td>${nombre || ""}</td>
          //         <td>${marca || ""}</td>
          //         <td>$${precio || ""}</td>
          //         <td>${cantidad || ""}</td>
          //         <td>$${precio*cantidad || ""}</td>
          //         <td><button id="item-${index}" class ="btn btn-danger">eliminar</button></td>
                  
          //     </tr>
          //     `;
      
          //     // const eliminar = document.querySelectorAll(`.btn.btn-danger`);
          //     // eliminar.forEach((eliminarBoton,index) =>{
          //     //     eliminarBoton.addEventListener("click",()=>{
          //     //         carrito.splice(index,1);
          //     //         dibujarTabla();
          //     //         localStorage.setItem("carrito",JSON.stringify(carrito));
          //     //     });
          //     // });
          //     // const vaciar= document.querySelector("#vaciar");
          //     // vaciar.addEventListener("click",()=>{
          //     //     carrito= [];
          //     //     dibujarTabla();
          //     //     localStorage.setItem("carrito",JSON.stringify(carrito));
          //     // });
      
          // });
          // total.textContent=(`$${carrito.reduce((accu,item)=> accu+ item.producto.precio*item.cantidad,0)}`);
      
        })
    }
    
  });

});

function comprar() {
  miCarrito.classList.remove("header-carrito");
  miCarrito.classList.add("header-carrito-con-notificacion");

    miCarrito.addEventListener("click", () => {
        const modal = document.querySelectorAll(".modal");
        
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
