/**
 * Inicia sesión del usuario con el correo electrónico y contraseña proporcionados.
 * @param {String} mail - Correo electrónico del usuario
 * @param {String} password - Contraseña del usuario
 * @param {Array} users - Lista de usuarios registrados en la base de datos
 */
export function login(email, password, users) {
    if (password.length < 8 || password.length > 64) {
        err.innerHTML = `<span class="err"> La Contraseña no cumple con los requisitos. </span>`;
        err.classList.remove("hidden");
        return;
    }
    // Corroboramos que los datos ingresados coincidan con algún usuario en la base de datos.
    if (users.some((e) => e.email == email && e.password == password)) {
        let user = users.find((e) => e.email == email);
        user.isLogin = true;
        return (

            localStorage.setItem("userIsLogin", JSON.stringify(user)),
            window.location.replace("http://127.0.0.1:5500/index.html")
        );
    } else {
        const err = document.getElementById("err");
        err.innerHTML = `<span class="err"> La Contraseña es incorrecta. </span>`;
        err.classList.remove("hidden");
        return;
    }
}
