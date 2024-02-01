cronocampnote/
│
├── backend/                  # Carpeta per tot el codi del servidor Node.js/Express
│   ├── src/
│   │   ├── controllers/      # Controladors per a manejar la lògica de negoci
│   │   ├── middleware/       # Middleware d'Express per a la gestió d'autenticació, errors, etc.
│   │   ├── models/           # Models per a la gestió de dades (si utilitzes ORM com Mongoose)
│   │   ├── routes/           # Definicions de rutes d'Express
│   │   └── app.js            # Arxiu principal d'Express
│   ├── .env                  # Variables d'entorn
│   ├── package.json          # Dependències i scripts del backend
│   └── package-lock.json
│
├── frontend/                 # Carpeta per tot el codi del client React
│   ├── public/               # Fitxers estàtics com index.html, imatges, etc.
│   ├── src/
│   │   ├── components/       # Components de React reutilitzables
│   │   ├── pages/            # Components React que actuen com a "pàgines" en l'aplicació.
│   │   ├── assets/           # Imatges, estils, i altres fitxers estàtics.
│   │   │   ├── images/
│   │   │   └── styles/       
│   │   ├── App.js            # Component principal de React
│   │   ├── index.js          # Punt d'entrada de l'aplicació React
│   │   └── reportWebVitals.js
│   ├── package.json          # Dependències i scripts del frontend
│   └── package-lock.json
│
├── .gitignore                # Fitxers i carpetes ignorats per Git
└── README.md                 # Documentació del projecte




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
