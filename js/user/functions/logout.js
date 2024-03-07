/**
 * Cerrar la sesión del usuario, eliminar el carrito de compras del usuario y redirigir a la página principal
 */
export function logout(carritoDeCompra, users, userLogin) {

    const newUser = {
        ...userLogin,
        carrito: carritoDeCompra
    }
    users.splice(users.findIndex((user) => user.email == userLogin.email), 1, newUser)
    localStorage.setItem('usersDB', JSON.stringify(users))
    localStorage.removeItem("carrito");
    localStorage.removeItem("userIsLogin");

    window.location.reload()
}
