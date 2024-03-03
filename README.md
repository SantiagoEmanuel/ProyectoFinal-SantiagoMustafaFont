# Pre-entrega número dos - Emulador de Compra y Facturación de Agua y Hielo

Este proyecto es un emulador de compra y facturación para una planta de agua y hielo llamada "Agua Santa Ángela". Permite a los usuarios registrados realizar pedidos de productos disponibles y generar facturas correspondientes.

## Funcionalidades Principales

- **Registro de Usuarios**: Los usuarios pueden registrarse ingresando su nombre, correo electrónico y contraseña.
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña.
- **Generación de Pedidos**: Los usuarios pueden seleccionar productos disponibles.
- **Carrito de compras**: Los usuarios pueden ver sus productos seleccionados en carrito.

## Funciones Principales

### `register(username, mail, password, passwordConfirmation, users)`

Registra un nuevo usuario en la base de datos recibida como parámetro.

### `login(mail, password, users)`

Inicia sesión del usuario con el correo electrónico y contraseña proporcionados existentes en la base de datos recibida como parámetro.

### `generarPedido(user)` **deprecated**

Genera el pedido del cliente (producto y cantidad) seleccionando de una lista de productos disponibles.

### `tipoFactura()` **deprecated**

Obtiene el tipo de factura (A o B) del usuario.

### `pedirCuit()` **deprecated**

Pide ingresar el CUIT (Clave Única de Identificación Tributaria) al usuario como dato para la factura.

### `calcularIVA(precio)` **deprecated**

Genera el valor del producto con IVA para la factura A.

### `generarFactura(producto, cantidad, user, products)` **deprecated**

Genera la factura A o B y es impresa en consola.

### `iniciarEmulador(products)` **deprecated**

Inicia la emulación de compra y facturación de un usuario en una planta de agua y hielo.

## Uso

1. Clona el repositorio o descarga el código.
2. Abre `index.html` y crea tu cuenta.
3. Ya está lista para que emules tus compras!
