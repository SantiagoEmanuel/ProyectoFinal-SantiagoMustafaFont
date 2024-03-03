import { register } from "./user/functions/register.js";
import { login } from "./user/functions/login.js";
import { logout } from "./user/functions/logout.js";

// Inicializamos el almacenamiento del carrito de compras u obtenemos los valores del usuario.
const carrito = JSON.parse(localStorage.getItem("carrito")) || []

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

    // Cerrar sesión del usuario
    const btnLogout = document.getElementById("logout");
    btnLogout?.addEventListener("click", () => {
        logout();
    });

    // Comprobamos si el usuario inició sesión para mostrar el contenido de la página
    const userLogin = JSON.parse(localStorage.getItem("userIsLogin"));
    if (userLogin?.isLogin) {
        const appNoLogin = document.getElementById("noLogin");
        const app = document.getElementById("app");
        const nav = document.getElementById('nav');

        appNoLogin?.classList.add("hidden");
        app?.classList.remove("hidden");
        nav?.classList.remove('hidden');
        nav?.classList.add('nav')
    }

    // Carrito de compras
    const carritoNotificaciones = document.getElementById(
        "carritoNotificaciones"
    );
    const buttons = document.getElementsByTagName("button");
    if (carrito.length > 0) {
        carritoNotificaciones.classList.remove("hidden")
        carritoNotificaciones.innerHTML = `${carrito.length}`;
    }
    for (const btn of buttons) {
        btn.addEventListener("click", () => {
            carrito.push(btn.name);
            localStorage.setItem("carrito", JSON.stringify(carrito));
            carritoNotificaciones.innerHTML = `${carrito.length}`;
            carritoNotificaciones.classList.remove("hidden");
        });
    }

    // página de carrito de compras
    const carritoCompras = document.getElementById('carritoCompras') || false;
    if (carritoCompras) {
        const div = document.createElement('article')
        if (carrito.length > 0) {
            carrito.forEach((element) => {
                const x = document.createElement('div')
                x.innerHTML = `${element}`
                div.append(x)
            })
            carritoCompras.append(div)
        } else {
            div.innerHTML = `
            <h2> No tienes nada en tu carrito! </h2>
            `
            carritoCompras.append(div)
        }

        const comprar = document.getElementById('comprar')
        carrito.length == 0 ? comprar.classList.add('hidden') :
            comprar.addEventListener('click', () => {
                localStorage.removeItem('carrito')
                const realizado = document.getElementById('comprado')
                realizado.classList.remove('hidden')
                realizado.classList.add('comprado')
                carritoCompras.classList.add('hidden')
                setTimeout(() => {
                    realizado.classList.add('hidden')
                    realizado.classList.remove('comprado')
                    window.location.reload();
                }, 1000)
            })
    }
});
