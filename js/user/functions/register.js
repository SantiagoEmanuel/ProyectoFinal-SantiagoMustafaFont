// Import User Class
import { User } from "../class/user.js";
import { login } from "./login.js";

/**
 * Registra un nuevo usuario en la base de datos.
 * @param {String} username - Nombre de usuario
 * @param {String} mail - Correo electrónico del usuario
 * @param {String} password - Contraseña del usuario
 * @param {String} passwordConfirmation - Confirmación de la contraseña del usuario
 * @param {Array} users - Lista de usuarios registrados en la base de datos
 */
export function register(
    username,
    email,
    password,
    passwordConfirmation,
    users
) {
    const err = document.getElementById("err");
    if (password.length < 8 || password.length > 64) {
        err.innerHTML = `<span class="err"> La Contraseña no cumple con los requisitos. </span>`;
        err.classList.remove("hidden");
        return;
    }
    // Comprobamos que las contraseñas coincidan.
    if (password === passwordConfirmation) {
        if (users.length != 0) {
            for (const user of users) {
                if (user.email == email) {
                    err.innerHTML = `<span class="err"> Este correo electrónico ya existe.</span>`;
                    err.classList.remove("hidden");
                    return;
                }
            }
        }

        users.push(new User(username, email, password, false));
        localStorage.setItem("usersDB", JSON.stringify(users));
    } else {
        // Avisamos que las contraseñas no coinciden.
        err.innerHTML = `<span class="err"> Las contraseñas no coinciden </span>`;
        err.classList.remove("hidden");
        return;
    }
    // Iniciamos sesión.
    return login(email, password, users);
}
