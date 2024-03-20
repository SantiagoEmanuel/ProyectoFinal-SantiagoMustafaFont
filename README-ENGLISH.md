# Agua Santa Angela

Agua Santa Angela is a web application that allows users to register, log in, purchase water and ice, and manage their shopping cart. This application provides an intuitive and satisfying user experience, with a modern and responsive interface based on the Bootstrap framework.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Project Structure](#project-structure)
4. [Technologies Used](#technologies-used)
5. [Author](#author)
6. [License](#license)

## Features

- **User Registration:** Users can register on the platform by providing a username, email, and password. Validations are applied to ensure the security of user credentials.
  
- **Login:** Users can log in using their email and password. Local storage is used to retrieve the previously saved shopping cart upon login.
  
- **Logout:** Users can log out at any time. The shopping cart is automatically saved in local storage so that users can resume their session on future visits.
  
- **Shopping Cart:** Users can add products to the shopping cart and make purchases conveniently. The platform provides a detailed view of the shopping cart, including the added products and their total price.

## Installation

To try out Agua Santa Angela on your local machine, follow these steps:

1. Clone this repository to your local machine using the following command:

    ```
    git clone https://github.com/SantiagoEmanuel/ProyectoFinal-SantiagoMustafaFont.git
    ```

2. Open the `index.html` file in your favorite web browser to start exploring the application.

## Project Structure

The project structure is as follows:

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

## Technologies Used

- **HTML/CSS/JavaScript**: For the development of the web application.

- **Bootstrap**: CSS framework for a modern and responsive user interface.

- **LocalStorage**: For storing user data and the shopping cart.

## Author

This project was created by Santiago Emanuel Mustafa Font. For any questions or suggestions, feel free to contact us.

## License

This project is licensed under the [MIT](LICENSE) License, which means you can use, copy, modify, merge, publish, distribute, sublicense, and/or sell it under the terms of the MIT License.