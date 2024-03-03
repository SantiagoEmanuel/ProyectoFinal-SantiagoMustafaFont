/**
 * Cerrar la sesión del usuario, eliminar el carrito de compras del usuario y redirigir a la página principal
 */
export function logout() {
    localStorage.removeItem("userIsLogin");
    localStorage.removeItem("carrito");
    window.location.replace('http://127.0.0.1:5500/index.html');
}
