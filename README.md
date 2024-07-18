## Sample React + NEXT Structure

One of the best features of the framework is how it lets you make most of the decisions around tooling, build tools and folder structures, and you should embrace that. I hope this structure will give you more flexiblity in terms of coding & help you to build larger React applications with proper format.

This is the basic structure that will help you at the time of initial development of any project.

# Boilerplate Preview

https://watch.screencastify.com/v/89g0Yr2Z0Aa2qU0KR2Ry

# Structure Overview

The project structure is outlined below:

- `/src/api` folder contains handling for API calls.
- `/src/assets` folder contains fonts, global CSS, and static images.
- `/src/components` folder contains reusable components, and the `pages` folder contains all main route components, layouts, modals, and charts.
- `/src/constants` folder contains API endpoint constants, messages, regex, and validation schemas defined using Yup, as well as the API URL paths and any static text.
- `/src/i18n` folder contains the i18n configuration file and all language translation JSON files.
- `/src/navigation` folder contains the sidebar menu list in an array format.
- `/src/pages` folder contains the main components for each specific router, with the router and component filenames matching.
- `/src/redux` folder contains the Redux store configuration file, actions for API calls, reducers, and action types.
- `/src/router` folder contains all public and private routes separately.
- `/src/utils` folder contains utility files, including common functions.
- `/src/index.js` file is the root file and the entry point for the website.
- `.editorconfig` file contains the default configuration for Visual Studio Code.
- `.env` file contains secure configured details.
- `.eslintignore` file ignores certain Code Standards rules.
- `.eslintrc.js` file defines Code Standards rules.
- `.gitignore` file ignores specified folders in the Git repository.
- `.nvmrc` file contains the Node version.
- `package.json` file contains a list of all downloaded dependencies and scripts.

## Prerequisites

- React v18.2.0
- Node v16.13.2
- Axios v1.3.0
- React-redux v8.0.5
- React-hot-toast v2.4.0
- React-data-table-component v7.5.3
- Formik v2.2.9
- Yup v0.32.11
- React-router-dom v6.8.0
- Bootstrap v5.2.3
- I18next v22.4.9
- Nookies v2.5.2
- Apexcharts v3.37.0
- React-feather v2.0.10
- react-paginate v8.1.4
- sass v1.57.1

## Installation

#### 1. Clone this project or Download that ZIP file

```sh
$ git clone https://github.com/pruthvidarji1993/react-next-boilerplate.git
```

#### 2. Make sure you have [npm](https://www.npmjs.org/) installed globally

More details [here](https://nodejs.org/en/download/)

#### 3. On the command prompt run the following commands

```sh
$ cd `project-directory`
```

```sh
$ npm install
```

### `npm start` or `yarn start`

Runs the app in development mode.
Open [http://localhost:3000/](http://localhost:3000/) to view it in the browser.

By default, for build generate and deploy on server then.

### `npm run build` or `yarn build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also [includes a service worker](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app) so that your app loads from local cache on future visits.

# React to Next.js Conversion

To convert your React project to use Next.js, follow these steps:

### 1. Uninstall React dependencies

```bash
$ npm uninstall react-scripts react-router-dom
```

### 2. Install Next.js

```bash
$ npm install next
```

### 3. Update Scripts in Package.json

Change the scripts in your `package.json` file to the following:

```bash
"scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
```

### 4. Remove Unnecessary Files

Delete the following files:

- `index.js`
- `router` folder

### 5. Update \_app.js

Uncomment the `_app.js` file.

### 6. Update Redux Store File

Update the Redux store file according to the comments in the file.

### 7. Update Navigation Redirects

Change all `useNavigate` redirects to `useRouter` redirects of `next/router`.

### 8. Update Link Components

Use `Link` from `react-router-dom` to `Link` from `next/link`. Note that `next/link` should be used instead of `Navlink` from `react-router-dom`, as Next.js does not provide a `Navlink` component.

### 9. Update Image Component

In Next.js, use `next/image` instead of the `img` tag.

### 10. Add Authentication in SSR

Add authentication to your Server Side Rendering (SSR) implementation.
