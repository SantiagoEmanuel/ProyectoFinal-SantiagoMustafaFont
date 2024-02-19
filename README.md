# Pre-entrega número dos - Emulador de Compra y Facturación de Agua y Hielo

Este proyecto es un emulador de compra y facturación para una planta de agua y hielo llamada "Agua Santa Ángela". Permite a los usuarios registrados realizar pedidos de productos disponibles y generar facturas correspondientes.

## Funcionalidades Principales

- **Registro de Usuarios**: Los usuarios pueden registrarse ingresando su nombre, correo electrónico y contraseña.
- **Inicio de Sesión**: Los usuarios pueden iniciar sesión con su correo electrónico y contraseña.
- **Generación de Pedidos**: Los usuarios pueden seleccionar productos disponibles y especificar la cantidad deseada.
- **Generación de Facturas**: Se generan facturas para los pedidos realizados, aplicando el tipo de factura seleccionado por el usuario.

## Funciones Principales

### `register(username, mail, password, passwordConfirmation)`

Registra un nuevo usuario en la base de datos.

### `login(mail, password)`

Inicia sesión del usuario con el correo electrónico y contraseña proporcionados.

### `generarPedido(user)`

Genera el pedido del cliente (producto y cantidad) seleccionando de una lista de productos disponibles.

### `tipoFactura()`

Obtiene el tipo de factura (A o B) del usuario.

### `pedirCuit()`

Pide ingresar el CUIT (Clave Única de Identificación Tributaria) al usuario como dato para la factura.

### `calcularIVA(precio)`

Genera el valor del producto con IVA para la factura A.

### `generarFactura(producto, cantidad, user, products)`

Genera la factura A o B y es impresa en consola.

### `iniciarEmulador(products)`

Inicia la emulación de compra y facturación de un usuario en una planta de agua y hielo.

## Uso

1. Clona el repositorio o descarga el código.
2. Enlaza el código a un archivo **HTML5** para ejecutarlo.
3. Sigue las instrucciones en pantalla para registrarte, iniciar sesión, realizar un pedido y generar una factura.
