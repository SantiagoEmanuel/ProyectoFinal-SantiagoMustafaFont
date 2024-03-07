import { register } from "./user/functions/register.js";
import { login } from "./user/functions/login.js";
import { logout } from "./user/functions/logout.js";

// Inicializamos la base de datos de los usuarios u obtenemos la misma.
const users = JSON.parse(localStorage.getItem("usersDB")) || []

document.addEventListener("DOMContentLoaded", () => {

    // Registro - Inicio de sesión
    const form = document.getElementById("form");
    form?.addEventListener("submit", (e) => {
        e.preventDefault();
        if (form.classList.contains("login")) {
            login(e.target.email.value, e.target.password.value, users);
        } else {
            const fullName = e.target.name.value;
            const email = e.target.email.value;
            const password = e.target.password.value;
            const passwordConfirmation = e.target.confirmation.value;

            register(
                fullName,
                email.toLowerCase(),
                password,
                passwordConfirmation,
                users
            );
        }
    });

    // Comprobamos si el usuario inició sesión para mostrar el contenido de la página
    const userLogin = JSON.parse(localStorage.getItem("userIsLogin"));
    // Inicializamos el almacenamiento del carrito de compras u obtenemos los valores del usuario.
    const carrito = JSON.parse(localStorage.getItem('carrito')) ?
        JSON.parse(localStorage.getItem('carrito')) :
        (userLogin.carrito.length != 0 ? userLogin.carrito : []);
    if (userLogin?.isLogin) {
        const userNotLogin = document.getElementById("userNotLogin");
        const navUserLogin = document.getElementById('navUserIsLogin');
        const navUserNotLogin = document.getElementById('navUserNotLogin');

        const app = document.getElementById("app");

        userNotLogin.classList.add("hidden");
        userNotLogin.classList.add('d-none')
        navUserLogin.classList.remove('hidden');
        navUserNotLogin.classList.add('hidden');

        app.classList.remove("hidden");
    }

    // Cerrar sesión del usuario
    const btnLogout = document.getElementById("logout");
    btnLogout?.addEventListener("click", () => {
        logout(carrito, users, userLogin);
    });

    const buttons = document.getElementsByTagName("button");
    for (const btn of buttons) {
        btn.addEventListener("click", () => {
            carrito.push(btn.name);
            localStorage.setItem("carrito", JSON.stringify(carrito));

            const toastLive = document.getElementById('liveToast')
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLive)

            toastBootstrap.show()


        });
    }

    const carritoBtn = document.getElementById('carritoBtn');
    const canvas = document.getElementById('carrito')
    carritoBtn.addEventListener('click', () => {
        if (carrito.length > 0) {
            fetch('../data/products.json')
                .then(r => r.json())
                .then((data) => {
                    const article = document.createElement('article')
                    var total = 0;
                    data.products.forEach((product) => {
                        const x = `${product.product} de ${product.litros}lts`
                        const y = `${product.product} ${product.kilos}kg`
                        carrito.forEach(selected => {
                            if (y == selected) {
                                const div = document.createElement('div')
                                div.innerHTML = `${product.product} de ${product.kilos}kg: <span>$${product.price}</span>`
                                div.classList.add('d-flex');
                                div.classList.add('justify-content-between')
                                div.classList.add('align-items-center')
                                article.append(div)
                                total = total + product.price;
                            }
                            if (x == selected) {
                                const div = document.createElement('div')
                                div.classList.add('d-flex');
                                div.classList.add('justify-content-between')
                                div.classList.add('align-items-center')
                                div.innerHTML = `${product.product} de ${product.litros}lts: <span>$${product.price}</span>`
                                article.append(div)
                                total = total + product.price;
                            }
                        })
                    })
                    canvas.innerHTML = `
                        <div class="d-flex flex-column gap-1 p-2 border text-capitalize">
                            ${article.innerHTML}       
                        </div>
                        <div class="d-flex justify-content-between align-items-center border p-2 text-capitalize">
                            Total: <span>$${total}</span>
                        </div>
                        <input type="button" class="btn btn-danger" value="Comprar carrito" id="comprarElCarrito"/>
                    `
                    document.getElementById('comprarElCarrito')?.addEventListener('click', () => {
                        localStorage.removeItem('carrito')
                        carrito.splice(0, carrito.length)
                        canvas.innerHTML = `
                            <div> Felicidades, compraste tu carrito! </div>
                        `;
                    })
                })
        } else {
            canvas.innerHTML = `
                <p class="h5 d-flex flex-column gap-2 align-items-center justify-content-center" style="margin-top: 3rem;">
                <img src="../assets/error-404.webp" alt="No hay nada que mostrar en tu carrito de compras" width="300"/>
                    Aún no tienes nada en tu carrito!
                </p>
            `
        }
    })
});
