[![Build Status](https://travis-ci.org/fatmatto/throwable-http-errors.svg?branch=master)](https://travis-ci.org/fatmatto/throwable-http-errors)

# Throwable HTTP errors

Throwable HTTP errors for node APIs.

## Installation

```bash
npm i throwable-http-errors
```

## Usage

```javascript
const Errors = require('throwable-http-errors')

// for example, using express.js
router.post('/', wrap(async (req, res, next) => {
  try {
    if (!validatePet(req.body)) {
      throw new Errors.BadRequest()
    }

    const pet = await PetsController.create(req.body)
    res.send({ status: true, data: pet })
  } catch (e) {
    return next(e)
  }
}))
```

## Reason

Before async/await, I was used to send errors to the main error catching middleware just by running

```javascript
return next(new Errors.BadRequest())
```

Now, with async/await we can leverage try/catch blocks to handle errors. While I'm not quite happy with having try/catch blocks in every route, having **await** for promises improves code readablity (and quality in my opinion) a lot.