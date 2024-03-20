# Agua Santa Angela

Agua Santa Angela es una aplicación web que permite a los usuarios registrar, iniciar sesión, realizar compras de agua y hielo, y gestionar su carrito de compras. Esta aplicación proporciona una experiencia de usuario intuitiva y satisfactoria, con una interfaz moderna y receptiva basada en el framework Bootstrap.

## Tabla de Contenidos

1. [Funcionalidades](#funcionalidades)
2. [Instalación](#instalación)
3. [Estructura del Proyecto](#estructura-del-proyecto)
4. [Tecnologías Utilizadas](#tecnologías-utilizadas)
5. [Autor](#autor)
6. [Licencia](#licencia)

## Funcionalidades

- **Registro de Usuarios:** Los usuarios pueden registrarse en la plataforma proporcionando un nombre de usuario, correo electrónico y contraseña. Se aplican validaciones para garantizar la seguridad de las credenciales de usuario.
  
- **Inicio de Sesión:** Los usuarios pueden iniciar sesión utilizando su correo electrónico y contraseña. Se utiliza el almacenamiento local para recuperar el carrito de compras guardado previamente al iniciar sesión.
  
- **Cerrar Sesión:** Los usuarios pueden cerrar sesión en cualquier momento. El carrito de compras se guarda automáticamente en el almacenamiento local para que los usuarios puedan retomar su sesión en futuras visitas.
  
- **Carrito de Compras:** Los usuarios pueden agregar productos al carrito de compras y realizar compras de manera conveniente. La plataforma proporciona una vista detallada del carrito de compras, incluyendo los productos agregados y su precio total.

## Instalación

Para probar Agua Santa Angela en tu máquina local, sigue estos pasos:

1. Clona este repositorio a tu máquina local utilizando el siguiente comando:

    ```
    git clone https://github.com/SantiagoEmanuel/ProyectoFinal-SantiagoMustafaFont.git
    ```

2. Abre el archivo `index.html` en tu navegador web favorito para comenzar a explorar la aplicación.

## Estructura del Proyecto

La estructura del proyecto es la siguiente:

```project root
    agua-santa-angela/
    │
    ├── assets/
    │ ├── fonts/
    │ │ ├── CascadiaCodePL-Bold.ttf
    │ │ ├── CascadiaCodePL-Light.ttf
    │ │ ├── CascadiaCodePL-Regular.ttf
    │ │ ├── CascadiaCodePL-SemiBold.ttf
    │ │ └── CascadiaCodePL-SemiLight.ttf
    │ └── img/
    │   ├── envases/
    │   │ └── envase-20.webp
    │   ├── hielo/
    │   │ └── hielo-3.png
    │   └── icons/ 
    │    ├── alert.png
    │    ├── carrito.png
    │    ├── email-icon.png
    │    ├── error-404.png
    │    ├── password-icon.png
    │    └── user-icon.png
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
    ├── LICENSE
    │
    └── README.md
```

## Tecnologías Utilizadas

- **HTML/CSS/JavaScript:** Para el desarrollo de la aplicación web.
  
- **Bootstrap:** Framework de CSS para una interfaz de usuario moderna y receptiva.
  
- **LocalStorage:** Para el almacenamiento de datos de usuarios y el carrito de compras.

## Autor

Este proyecto fue creado por Santiago Emanuel Mustafa Font

## Licencia

Este proyecto está bajo la Licencia [MIT](LICENSE), lo que significa que puedes usarlo, copiarlo, modificarlo, fusionarlo, publicarlo, distribuirlo, sublicenciarlo y/o venderlo bajo los términos de la Licencia MIT.

