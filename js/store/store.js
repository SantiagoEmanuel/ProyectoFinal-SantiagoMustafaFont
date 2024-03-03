// Actualmente implementado directamente en "main.js"
// import { logout } from '../user/functions/logout.js'

// document.addEventListener('DOMContentLoaded', () => {
//     const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
//     const div = document.createElement('div')
//     const carritoCompras = document.getElementById('carritoCompras') || false;

//     if (carritoCompras) {
//         if (carrito.length > 0) {
//             carrito.forEach((element) => {
//                 const x = document.createElement('div')
//                 x.innerHTML = `${element}`
//                 div.append(x)
//             })
//             carritoCompras.append(div)
//         } else {
//             div.innerHTML = `
//             <h2> No tienes nada en tu carrito! </h2>
//             `
//             carritoCompras.append(div)
//         }

//         const btnLogout = document.getElementById('logout')
//         btnLogout.addEventListener('click', () => {
//             logout();
//         })
//     }
// })