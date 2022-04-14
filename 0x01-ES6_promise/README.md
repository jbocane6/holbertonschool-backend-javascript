<p align="center">
    <a href=#><img src="https://raw.githubusercontent.com/jbocane6/logos/main/holberton-logo.png" alt="holberton" /></a></p>
  
  <p align="center">
    <a href="https://twitter.com/juanoso07555284" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/twitter.svg" alt="juanoso07555284" height="30" width="40" /></a>
  <a href="https://linkedin.com/in/juan-camilo-bocanegra-osorio-18b1821a6" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="juan-camilo-bocanegra-osorio-18b1821a6" height="30" width="40" /></a>
  </p>
  
0x01. ES6 Promises
==================

<p align="center"><a href=#><img src="https://github.com/jbocane6/logos/blob/main/hbtn/promises.jpeg" alt="Promises" /></a></p>

Resources
---------

**Read or watch**:

*   [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
*   [JavaScript Promise: An introduction](https://web.dev/promises/)
*   [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
*   [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw)

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/), **without the help of Google**:

*   Promises (how, why, and what)
*   How to use the `then`, `resolve`, `catch` methods
*   How to use every method of the Promise object
*   Throw / Try
*   The await operator
*   How to use an `async` function

Requirements
------------

*   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension
*   Your code will be tested using `Jest` and the command `npm run test`
*   Your code will be verified against lint using ESLint
*   All of your functions must be exported

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
 
    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
    

### Install Jest, Babel, and ESLint

in your project directory:

*   Install Jest using: `npm install --save-dev jest`
*   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
*   Install ESLint using: `npm install --save-dev eslint`

Files
-----

### `package.json`
    
    {
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
      },
      "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
      }
    }

### `babel.config.js`

    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };

### `utils.js`

Use when you get to tasks requiring `uploadPhoto` and `createUser`.
    
    export function uploadPhoto() {
      return Promise.resolve({
        status: 200,
        body: 'photo-profile-1',
      });
    }

### `.eslintrc.js`
   
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };

### and…

Don’t forget to run `$ npm install` when you have the `package.json`

Response Data Format
--------------------

`uploadPhoto` returns a response with the format

    {
      status: 200,
      body: 'photo-profile-1',
    }
    

`createUser` returns a response with the format

    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
    

Tasks
-----

### 0\. Keep every promise you make and only make promises you can keep

Mandatory

Return a Promise using this prototype `function getResponseFromAPI()`

    camilo@home-laptop:~$ cat 0-main.js
    import getResponseFromAPI from "./0-promise.js";
    
    const response = getResponseFromAPI();
    console.log(response instanceof Promise);
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 0-main.js 
    true
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`0-promise.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/0-promise.js)

-----
### 1\. Don't make a promise...if you know you can't keep it

Mandatory

Using the prototype below, return a `promise`. The parameter is a `boolean`.

    getFullResponseFromAPI(success)
    

When the argument is:

*   `true`
    *   resolve the promise by passing an object with 2 attributes:
        *   `status`: `200`
        *   `body`: `'Success'`
*   `false`
    *   reject the promise with an error object with the message `The fake API is not working currently`

Try testing it out for yourself

    camilo@home-laptop:~$ cat 1-main.js
    import getFullResponseFromAPI from './1-promise';
    
    console.log(getFullResponseFromAPI(true));
    console.log(getFullResponseFromAPI(false));
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 1-main.js 
    Promise { { status: 200, body: 'Success' } }
    Promise {
      <rejected> Error: The fake API is not working currently
        ...
        ...
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`1-promise.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/1-promise.js)

-----
### 2\. Catch me if you can!

Mandatory

Using the function prototype below

    function handleResponseFromAPI(promise)
    

Append three handlers to the function:

*   When the Promise resolves, return an object with the following attributes
    *   `status`: `200`
    *   `body`: `success`
*   When the Promise rejects, return an empty `Error` object
*   For every resolution, log `Got a response from the API` to the console

Testing:

    camilo@home-laptop:~$ cat 2-main.js
    import handleResponseFromAPI from "./2-then";
    
    const promise = Promise.resolve();
    handleResponseFromAPI(promise);
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 2-main.js 
    Got a response from the API
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`2-then.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/2-then.js)

-----

### 3\. Handle multiple successful promises

Mandatory

In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

    function handleProfileSignup()
    

In the event of an error, log `Signup system offline` to the console

    camilo@home-laptop:~$ cat 3-main.js
    import handleProfileSignup from "./3-all";
    
    handleProfileSignup();
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 3-main.js 
    photo-profile-1 Guillaume Salva
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`3-all.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/3-all.js)

-----
### 4\. Simple promise

Mandatory

Using the following prototype

    function signUpUser(firstName, lastName) {
    }
    

That returns a resolved promise with this object:

    {
      firstName: value,
      lastName: value,
    }
    

    camilo@home-laptop:~$ cat 4-main.js
    import signUpUser from "./4-user-promise";
    
    console.log(signUpUser("Bob", "Dylan"));
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 4-main.js 
    Promise { { firstName: 'Bob', lastName: 'Dylan' } }
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`4-user-promise.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/4-user-promise.js)

-----
### 5\. Reject the promises

Mandatory

Write and export a function named `uploadPhoto`. It should accept one argument `fileName` (string).

The function should return a Promise rejecting with an Error and the string `$fileName cannot be processed`

    export default function uploadPhoto(filename) {
    
    }
    

    camilo@home-laptop:~$ cat 5-main.js
    import uploadPhoto from './5-photo-reject';
    
    console.log(uploadPhoto('guillaume.jpg'));
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 5-main.js 
    Promise {
      <rejected> Error: guillaume.jpg cannot be processed
      ..
        ..
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`5-photo-reject.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/4-user-promise.js)

-----
### 6\. Handle multiple promises

Mandatory

Import `signUpUser` from `4-user-promise.js` and `uploadPhoto` from `5-photo-reject.js`.

Write and export a function named `handleProfileSignup`. It should accept three arguments `firstName` (string), `lastName` (string), and `fileName` (string). The function should call the two other functions. When the promises are all settled it should return an array with the following structure:

    [
        {
          status: status_of_the_promise,
          value: value or error returned by the Promise
        },
        ...
      ]
    

    camilo@home-laptop:~$ cat 6-main.js
    import handleProfileSignup from './6-final-user';
    
    console.log(handleProfileSignup("Bob", "Dylan", "bob_dylan.jpg"));
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 6-main.js 
    Promise { <pending> }
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`6-final-user.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/6-final-user.js)

-----
### 7\. Load balancer

Mandatory

Write and export a function named `loadBalancer`. It should accept two arguments `chinaDownload` (Promise) and `USDownload` (Promise).

The function should return the value returned by the promise that resolved the first.

    export default function loadBalancer(chinaDownload, USDownload) {
    
    }
    

    camilo@home-laptop:~$ cat 7-main.js
    import loadBalancer from "./7-load_balancer";
    
    const ukSuccess = 'Downloading from UK is faster';
    const frSuccess = 'Downloading from FR is faster';
    
    const promiseUK = new Promise(function(resolve, reject) {
        setTimeout(resolve, 100, ukSuccess);
    });
    
    const promiseUKSlow = new Promise(function(resolve, reject) {
        setTimeout(resolve, 400, ukSuccess);
    });
    
    const promiseFR = new Promise(function(resolve, reject) {
        setTimeout(resolve, 200, frSuccess);
    });
    
    const test = async () => {
        console.log(await loadBalancer(promiseUK, promiseFR));
        console.log(await loadBalancer(promiseUKSlow, promiseFR));
    }
    
    test();
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 7-main.js 
    Downloading from UK is faster
    Downloading from FR is faster
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`7-load_balancer.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/6-final-user.js)

-----
### 8\. Throw error / try catch

Mandatory

Write a function named `divideFunction` that will accept two arguments: `numerator` (Number) and `denominator` (Number).

When the `denominator` argument is equal to 0, the function should throw a new error with the message `cannot divide by 0`. Otherwise it should return the numerator divided by the denominator.

    export default function divideFunction(numerator, denominator) {
    
    }
    

    camilo@home-laptop:~$ cat 8-main.js
    import divideFunction from './8-try';
    
    console.log(divideFunction(10, 2));
    console.log(divideFunction(10, 0));
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 8-main.js 
    5
    ..../8-try.js:15
      throw Error('cannot divide by 0');
      ^
    .....
    
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`8-try.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/6-final-user.js)

-----
### 9\. Throw an error

Mandatory

Write a function named `guardrail` that will accept one argument `mathFunction` (Function).

This function should create and return an array named `queue`.

When the `mathFunction` function is executed, the value returned by the function should be appended to the queue. If this function throws an error, the error message should be appended to the queue. In every case, the message `Guardrail was processed` should be added to the queue.

Example:

    [
      1000,
      'Guardrail was processed',
    ]
    

    camilo@home-laptop:~$ cat 9-main.js
    import guardrail from './9-try';
    import divideFunction from './8-try';
    
    console.log(guardrail(() => { return divideFunction(10, 2)}));
    console.log(guardrail(() => { return divideFunction(10, 0)}));
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 9-main.js 
    [ 5, 'Guardrail was processed' ]
    [ 'Error: cannot divide by 0', 'Guardrail was processed' ]
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`9-try.js`](https://github.com/jbocane6/holbertonschool-backend-javascript/blob/master/0x01-ES6_promise/6-final-user.js)

-----
### 10\. Await / Async

Advanced

Import `uploadPhoto` and `createUser` from `utils.js`

Write an async function named `asyncUploadUser` that will call these two functions and return an object with the following format:

    {
      photo: response_from_uploadPhoto_function,
      user: response_from_createUser_function,
    }
    

If one of the async function fails, return an empty object. Example:

    {
      photo: null,
      user: null,
    }
    

    camilo@home-laptop:~$ cat 100-main.js
    import asyncUploadUser from "./100-await";
    
    const test = async () => {
        const value = await asyncUploadUser();
        console.log(value);
    };
    
    test();
    
    camilo@home-laptop:~$ 
    camilo@home-laptop:~$ npm run dev 100-main.js 
    {
      photo: { status: 200, body: 'photo-profile-1' },
      user: { firstName: 'Guillaume', lastName: 'Salva' }
    }
    camilo@home-laptop:~$ 
    

**Repo:**

*   GitHub repository: [`holbertonschool-backend-javascript`](https://github.com/jbocane6/holbertonschool-backend-javascript)
*   Directory: [`0x01-ES6_promise`](https://github.com/jbocane6/holbertonschool-backend-javascript/tree/master/0x01-ES6_promise)
*   File: [`100-await.js`]()

-----
Copyright © 2022 Holberton Inc, All rights reserved.
