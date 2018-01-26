# Verify Input

Verify the config for modules or functions, set the required properties and check the input.

```js

const verify = require('./dist/index.js')

const properties = {
  api_key: {
    required: true,
    type: String
  },
  route: {
    required: true,
    type: Function
  },
  port: {
    required: false,
    type: Number,
    default: 8080
  }
}

const config = {
  api_key: '1234',
  route: function(req, res, next) {
    res.redirect('/', next)
  }
}

const { route, api_key, port } = verify(properties, config)
// result: api_key = 1234, port = 8080
```
