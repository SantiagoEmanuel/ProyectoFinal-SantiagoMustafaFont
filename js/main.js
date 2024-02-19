// Evitamos magic strings
const vacio = "";
const a = "A";
const b = "B";

// "Base de datos" de los productos disponibles [no maneja stock aún].
const products = [
    { product: "Bidon de agua", litros: 20, price: 700 },
    { product: "Bidon de agua", litros: 10, price: 500 },
    { product: "Bolsa de hielo", kilos: 12, price: 1000 },
    { product: "Bolsa de hielo", kilos: 3, price: 500 },
];

// "Base de datos" de los usuarios registrados.
const users = [];

// Clase Usuarios
class User {
    /**
     * Constructor de la clase User
     * @param {String} username - Nombre del usuario
     * @param {String} mail - Correo electrónico del usuario
     * @param {String} password - Contraseña del usuario
     */
    constructor(username, mail, password) {
        this.username = username;
        this.mail = mail;
        this.password = password;
    }
}
/**
 * Registra un nuevo usuario en la base de datos.
 * @param {string} username - Nombre de usuario
 * @param {string} mail - Correo electrónico del usuario
 * @param {string} password - Contraseña del usuario
 * @param {string} passwordConfirmation - Confirmación de la contraseña del usuario
 * @returns {string} - Nombre de usuario registrado
 */
function register(username, mail, password, passwordConfirmation) {
    // Comprobamos que las contraseñas coincidan.
    if (password == vacio || mail == vacio || username == vacio) {
        alert('Debes ingresar todos los datos solicitados')
    }
    if (password === passwordConfirmation) {
        // Recorremos la lista de usuarios
        for (const user of users) {
            // Comprobamos si ya existe el correo en la "base de datos"
            if (user.mail == mail) {
                alert('Ya hay una cuenta existente con ese correo')
                return false;
            }


            // Ingresamos al usuario a la base de datos.
            users.push(new User(username, mail, password));
        }
        // Verificamos que haya algo en la lista de usuarios
        if (users.length == 0) {
            users.push(new User(username, mail, password));
        }
    } else {
        // Avisamos que las contraseñas no coinciden.
        alert("Los las contraseñas no coinciden.");
        return false;
    }

    // Iniciamos sesión.
    const isLogin = login(mail, password);

    return [isLogin, username];
}

/**
 * Inicia sesión del usuario con el correo electrónico y contraseña proporcionados.
 * @param {string} mail - Correo electrónico del usuario
 * @param {string} password - Contraseña del usuario
 */
function login(mail, password) {
    // Corroboramos que los datos ingresados coincidan con algún usuario en la base de datos.
    if (users.some((e) => e.mail == mail && e.password == password)) {
        alert(`Bienvenido!`);
        return true;
    } else {
        alert("Lo datos ingresados están mal o no coinciden con ningún usuario.");
        return false;
    }
}

/**
 * Genera el pedido del cliente (producto y cantidad).
 * @param {string} user - Nombre del usuario
 * @returns {Array} - Índice del producto seleccionado y cantidad
 */
function generarPedido(user) {
    do {
        pedido = parseInt(
            prompt(
                `Bienvenido, ${user} a Agua Santa Ángela \n\nSelecciona tu pedido \n1)Bidón de Agua x 20lts \n2)Bidón de Agua x 10lts \n3)Bolsa de hielo x 12kg \n4)Bolsa de hielo x 3kg`
            )
        );
    } while (isNaN(pedido) || (pedido <= 0 || pedido >= 5));

    do {
        cantidad = parseInt(
            prompt(`Ingrese la cantidad de productos que necesitas`)
        );
    } while (isNaN(cantidad) || (cantidad <= 0));

    return [pedido - 1, cantidad];
}

/**
 * Obtiene el tipo de factura (A o B) del usuario.
 * @returns {string} - Tipo de factura seleccionado
 */
function tipoFactura() {
    do {
        x = prompt("Ingresa el tipo de factura que deseas hacer (A o B)");
        x = x.toUpperCase();
    } while (x != a && x != b);

    return x;
}

/**
 * Pide ingresar el CUIT al usuario como dato para la Factura.
 * @returns {String} - Número CUIT del usuario
 */
function pedirCuit() {
    do {
        cuit = prompt("Ingresa tu CUIT");
    } while (cuit == vacio);

    return cuit;
}

/**
 * Genera el valor del producto con IVA para la factura A.
 * @param {Number} precio - valor del producto sin IVA
 * @returns {Number} - Valor del producto más IVA
 */
function calcularIVA(precio) {
    return precio * 1.21;
}

/**
 * Genera la factura A o B y es impresa en consola.
 * @param {Number} producto - Índice del producto seleccionado
 * @param {Number} cantidad - Cantidad de productos requeridos por el usuario
 * @param {String} user - Nombre del usuario
 * @param {Array} products - Lista de productos disponibles
 */
function generarFactura(producto, cantidad, user, products) {
    const factura = tipoFactura();

    // Pedimos los datos para realizar la Factura.
    const cuit = pedirCuit();

    if (factura == a) {
        const precioConIVA = calcularIVA(products[producto].price)

        console.log(`Nombre: ${user} | CUIT: ${cuit}`)
        console.log(`Producto ${products[producto].product} | Precio unitario: ${precioConIVA} | Cantidad de productos solicitados: ${cantidad} | TOTAL: ${precioConIVA * cantidad}`);

    } else {
        console.log(`Nombre: ${user} | CUIT: ${cuit}`)
        console.log(`Producto ${products[producto].product} | Precio unitario: ${products[producto].price} | Cantidad de productos solicitados: ${cantidad} | TOTAL: ${products[producto].price * cantidad}`);
    }
}


function iniciarEmulador(products) {
    alert("Comencemos por crear una cuenta!");
    const username = prompt("Ingresa tu nombre y apellido").toUpperCase();
    const mail = prompt("Ingresa tu correo electrónico").toLowerCase();
    const password = prompt("Ingresa tu contraseña").toLowerCase();
    const passwordConfirmation = prompt("Confirma tu contraseña").toLowerCase();

    // Registramos al usuario y guaramos su nombre.
    const [isRegister, user] = register(username, mail, password, passwordConfirmation);

    if (isRegister) {
        // Registramos el pedido del usuario, guardamos el producto desea y la cantidad del mismo.
        const [producto, cant] = generarPedido(user);

        // Generamos la factura de la compra.
        generarFactura(producto, cant, user, products);
    }
}

/**
 * Inicia la emulación de compra y facturación de un usuario en una planta de agua y hielo.
 * @param {Array} products - Array de productos disponibles
 */
iniciarEmulador(products);
