# PinMeTo Node.JS Back-End assignment

## Table of contents

* [Summary](#summary)
* [Installation and Running](#installation-and-running)
* [Testing](#testing)
* [Using](#using)

## Summary
My interview assignment (available in [this](https://github.com/HosseinDotLink/pinmeto-test/blob/main/robot.me) link) was about calculating robot position.


##### Tech
 - Javascript
 - Node.JS
 - Express
 - Joi (validation)
 - morgan (logging)
 - Jest and SuperTest (Testing)

##### Usefull links
 - [Hosted demo](https://pinmeto.hossein.link)
 - [Postman api documentation](https://github.com/HosseinDotLink/pinmeto-test/blob/main/pinmeto-test.postman_collection.json)

## Installation and Running

It requires [Node.js](https://nodejs.org/) v14+ to run.

Clone from git repository.
```sh
git clone https://github.com/hosseinDotLink/pinmeto-test
cd pinmeto-test
```
After cloning It's time to make our .env file and editing it (Just set the server port).
```sh
cp .env.example .env
```
Install the dependencies and devDependencies and start the server.
```sh
npm i
npm start
```

## Testing

If you want to run tests, run the `npm test` command after installation.

> Note 1: Tests are written with `Jest` and `supertest`.

##### Why Jest?
 - Easy to use (low complixity)
 - Fast

##### Why supertest?
 - Sending request to our router endpoints.

## Using

> Note 2: Before starting this section, You can install [postman](https://www.postman.com/) and use [this](https://github.com/HosseinDotLink/pinmeto-test/blob/main/pinmeto-test.postman_collection.json) postman document to skip this part.

> Note 3: You can replace `https://pinmeto.hossein.link` with `http[s]://YOUR_LINK`.

 ###### Calculate
 [POST - https://pinmeto.hossein.link/api/calculate]()
body: 
```json
 {
    "room": "square", // square or circular
    "roomSize": 5,
    "start": [1, 2], // [x, y]
    "instructions": "HGHGGHGHG"
}
```