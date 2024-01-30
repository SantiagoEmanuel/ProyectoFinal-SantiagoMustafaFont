// Evitamos magic strings
const vacio = '';
const a = 'A'
const b = 'B'

// Función para Generar facturas
function generarFactura(tipoFactura) {

    // Pedimos los datos para realizar la Factura.
    cuil = prompt('Ingrese su CUIL')
    nombre = prompt('Ingrese su nombre')

    // Comprobamos que los datos no estén vacíos.
    while (cuil == vacio || nombre == vacio) {
        if (cuil == vacio) {
            cuil = prompt('Ingrese su CUIL')
        } else {
            nombre = prompt('Ingrese su nombre')
        }
    }

    // Pedimos el nombre del producto.
    do {
        producto = prompt('Ingrese el producto')
    } while (producto == vacio);

    // Pedimos que se ingrese el valor y cantidad del producto a facturar.
    // Además corroboramos los datos ingresados.
    do {
        precio = parseFloat(prompt('Ingrese el precio del producto'))
        cantidad = parseInt(prompt('Ingrese la cantidad de productos'))
    } while (precio == isNaN || cantidad == isNaN);

    if (tipoFactura == a) facturaA(tipoFactura, cuil, nombre, producto, precio, cantidad)
    else facturaB(tipoFactura, cuil, nombre, producto, precio, cantidad)
}

// Generamos factura A
function facturaA(tipoFactura, cuil, nombre, producto, precio, cantidad) {

    // Generamos el precio del producto con iva
    const precioConIva = (precio * .21) + precio;

    // Creamos los elementos.
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const p2 = document.createElement('p')

    // Completamos los datos de cada elemento.
    h2.innerHTML = `Factura ${tipoFactura}`
    p.innerHTML = `${cuil} | ${nombre}`
    p2.innerHTML = `${producto} a ${(precioConIva)} c/u || ${precioConIva * cantidad}.`

    // Agregamos a los padres los contenedores hijos.
    div2.append(h2)
    div2.append(p)
    div.append(div2)
    div.append(p2)

    // Recuperamos un elemento de la página.
    const factura = document.getElementById('factura')

    // Agregamos el elemento hijo.
    factura.append(div)
}

// Generamos Factura B
function facturaB(tipoFactura, cuil, nombre, producto, precio, cantidad) {
    // Creamos los elementos
    const div = document.createElement('div')
    const div2 = document.createElement('div')
    const h2 = document.createElement('h2')
    const p = document.createElement('p')
    const p2 = document.createElement('p')

    // Agregamos contenido a los elementos.
    h2.innerHTML = `Factura ${tipoFactura}`
    p.innerHTML = `${cuil} | ${nombre}`
    p2.innerHTML = `${producto} a ${precio} c/u || ${precio * cantidad}`

    // Agregamos a los padres los contenedores hijos.
    div2.append(h2)
    div2.append(p)
    div.append(div2)
    div.append(p2)

    // Recuperamos un elemento de la página.
    const factura = document.getElementById('factura')

    // Agregamos el elemento hijo.
    factura.append(div)
}
do {
    tipoFactura = prompt("Ingrese el tipo de factura que desea realizar (Utilizar mayúsculas)")
} while (tipoFactura == vacio || (tipoFactura != a && tipoFactura != b));

generarFactura(tipoFactura)