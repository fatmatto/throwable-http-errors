[![Build Status](https://travis-ci.org/fatmatto/throwable-http-errors.svg?branch=master)](https://travis-ci.org/fatmatto/throwable-http-errors)

# Throwable HTTP errors 
Throwable HTTP errors for node APIs.

## Installation

```
npm i throwable-http-errors
```

## Usage

```javascript
const Errors = require('httperrors/index.js')

// for example, using express.js

router.post('/', wrap(async (req, res, next) => {
  try {
    // isValid is some king of validation
    if (!isValid(req.body) ) {
       throw new Errors.BadRequest()
    }
    let pet = await PetsController.create(req.body)
    res.send({status: true, data: pet})
  } catch (e) {
    return next(e)
  }
}))
```

## Motivation
 Before async/await, I was used to send errors to the main error catching middleware just by running
 ```javascript
 return next(new Errors.BadRequest())
 ```
 Now, with async/await we can leverage try/catch blocks to handle errors. While i'm not quite happy with having try/catch blocks in every route, having **await** for promises improves code readablity (and quality in my opinion) a lot.
