# Cockpit Frontend

Frontend of my portfolio website [https://florianrehder.de](https://florianrehder.de).

This website is a React app which was developed with Typescript and is fed with content via an REST API provided by a headless CMS called [Cockpit](https://getcockpit.com/).

## Techstack

### Backend

-   REST API with [Cockpit CMS](https://getcockpit.com/)

### Frontend

-   [Typescript](https://www.typescriptlang.org/)

    -   [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)

-   [React](https://reactjs.org/)

    -   State Management: [Redux](https://redux.js.org/) via [Redux Toolkit](https://redux-toolkit.js.org/)
    -   Routing: [React Router DOM](https://reactrouter.com/)
    -   HTTP Client: [Axios](https://github.com/axios/axios)
    -   Styling: [styled-components](https://styled-components.com/)

-   Image handling: [BaguetteBox Image Lightbox](https://github.com/feimosi/baguetteBox.js/) and [Browser level lazy loading](https://web.dev/browser-level-image-lazy-loading/)

## Available Scripts

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run lint`

Run ESLint linting with `--fix` argument.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

### `npm test`

Launches the test runner in the interactive watch mode. See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Future TODO

-   Add testing with [Jest](https://jestjs.io/)
