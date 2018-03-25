module.exports = {
    "extends": "standard",
    "plugins": [
        "chai-friendly"
    ],
    "rules": {
      "no-unused-expressions": 0,
      "chai-friendly/no-unused-expressions": 2
    },
    "globals" : {
      "it" : true,
      "describe" : true,
      "before" : true,
      "after" : true
    }
};