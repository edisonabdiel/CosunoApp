<h1 align="center">CosunoApp</h1>

<img width="1438" alt="Screenshot 2021-11-26 at 10 54 05" src="https://user-images.githubusercontent.com/43752457/143562144-2d8078ce-97a1-41ea-8c5f-7521180dc8e3.png">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#dependencies">Dependencies</a></li>
    <li><a href="#architecture">Architecture</a></li>
    <li><a href="#challenges">Challanges</a></li>
    <li><a href="#further-improvements">Further Improvements</a></li>
    <li><a href="#API">API</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
  </ol>
</details>

## About The Project

A SPA displaying fictional Construction Companies details, integrated with a search and filtering solution

### Key Features

- Modern and Clean UI
- Extremely easy to use and intuitive
- Display a list of companies and their specific details
- Search for companies by name or/and speciality
- Teastable & Scalable
- Resposinve to different screen sizes

## Built With:

- [React](https://reactjs.org/)
- [Ant Design](https://ant.design/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/)

### Dependencies

- Ant Design Icons
- React Icons


## Architecture

The app was initialised with create-react-app.

It retrives the data from a dedicated [JSON SERVER API](https://github.com/edisonabdiel/RomeoTaskDB) and displays it in cohesive manner.

Components were built in a fashion that allows for a more responsive, dynamic and scalable experience.

The UI is meant to be minimalistic yet engaging and intuitive. It was built using AntDesign to allow great control and autonomy over the layout of the app and also the design/feel of all the elements within it.

## Challenges

Bulding this app was a fun and challenging experience. Filtering based on the checkboxes values was tricky for which I ended up combining native hooks and handler functions.

## Further Improvements

- The filtering itself it could be improved as filter methods don't stack with eachother.
- Unit tests could be added to the app.
- Refactor it into TypeScript.

## API

Refer to the ```cosuno-server``` folder for more information on how to get the server running and how to use it.

```cd``` into the ```server``` folder and run the following command:

```json-server companies.json``` 

| method | path               | description            |
|--------|--------------------|------------------------|
| GET    | /api/companies     | Get list of companies  |

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Getting Started

Clone the repository and run the following commands in the terminal:

Install the dependencies 

```bash
npm install
# or
yarn add install
```

Run the development server:

```bash
npm start
# or
yarn start
```

Build 

```bash
npm run build
# or
yarn build
```


Open [http://localhost:3001](http://localhost:3001) in your browser to see the result.


<h4 align="center">Made with loads of ❤️‍🔥</h4>