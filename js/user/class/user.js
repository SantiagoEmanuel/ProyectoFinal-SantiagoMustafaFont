// Clase Usuarios
export class User {
    /**
     * Constructor de la clase User
     * @param {String} username - Nombre del usuario
     * @param {String} email - Correo electrónico del usuario
     * @param {String} password - Contraseña del usuario
     * @param {Boolean} isLogin - Indica si el usuario está activo
     */
    constructor(username, email, password, isLogin) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.isLogin = isLogin;
        this.carrito = []
    }
}