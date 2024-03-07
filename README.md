# Planta de Agua y Hielo

¡Bienvenido al proyecto de la planta de agua y hielo "Agua Santa Ángela"! Esta aplicación web proporciona una plataforma para que los usuarios puedan registrarse, iniciar sesión, realizar compras de agua y hielo, y gestionar su carrito de compras. Con una interfaz moderna y receptiva basada en el framework Bootstrap, "Agua Santa Ángela" ofrece una experiencia de usuario intuitiva y satisfactoria.

## Funcionalidades

### Registro de Usuarios

Los usuarios pueden registrarse en la plataforma proporcionando un nombre de usuario, correo electrónico y contraseña. Se aplican validaciones para garantizar la seguridad de las credenciales de usuario.

### Inicio de Sesión

Los usuarios pueden iniciar sesión utilizando su correo electrónico y contraseña. Se utiliza el almacenamiento local (`LocalStorage`) para recuperar el carrito de compras guardado previamente al iniciar sesión.

### Cerrar Sesión

Los usuarios pueden cerrar sesión en cualquier momento. El carrito de compras se guarda automáticamente en `LocalStorage` para que los usuarios puedan retomar su sesión en futuras visitas.

### Carrito de Compras

Los usuarios pueden agregar productos al carrito de compras y realizar compras de manera conveniente. La plataforma proporciona una vista detallada del carrito de compras, incluyendo los productos agregados y su precio total.

## Instalación

Para probar la Planta de Agua y Hielo en tu máquina local, sigue estos pasos:

1. Clona este repositorio a tu máquina local utilizando el siguiente comando:

    ```git
    git clone https://github.com/tu_usuario/planta-agua-hielo.git
    ```

2. Abre el archivo `index.html` en tu navegador web favorito para comenzar a explorar la aplicación.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```project root
planta-agua-hielo/
│
├── assets/
│ ├── envases/
│ │ └── envase-20.webp
│ ├── hielo/
│ │ └── hielo-3.png
│ ├── alert.png
│ ├── carrito.png
│ ├── email-icon.png
│ ├── error-404.png
│ ├── password-icon.png
│ └── user-icon.png
│
├── data/
│ └── products.json
│
├── css/
│ └── style.css
│
├── js/
│ ├── user/
│ │ ├── class/
│ │ │ └── user.js
│ │ └── functions/
│ │   ├── register.js
│ │   ├── login.js
│ │   └── logout.js
│ └── main.js
│
├── pages/
│ ├── login.html
│ └── register.html
│
├── .gitignore
│
├── index.html
│
└── README.md
```

## Tecnologías Utilizadas

- **HTML/CSS/JavaScript**: Para el desarrollo de la aplicación web.
- **Bootstrap**: Framework de CSS para una interfaz de usuario moderna y receptiva.
- **LocalStorage**: Para el almacenamiento de datos de usuarios y el carrito de compras.s

## Autor

Este proyecto fue creado por Santiago Emanuel Mustafá Font. Para cualquier pregunta o sugerencia, no dudes en ponerte en contacto.
