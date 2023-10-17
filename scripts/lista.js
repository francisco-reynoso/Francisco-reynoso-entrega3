
let lista= [];

fetch(`productos.json`)
.then(res => res.json())
.then(data =>{
    console.log(data[]);
});