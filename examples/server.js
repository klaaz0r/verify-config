const verify = require('../dist/index')

const props = {
  port: {
    required: false,
    type: Number,
    default: 8080
  },
  version: {
    required: true,
    type: String
  }
}

const config = {
  version: '0.0.1'
}

const { port, version } = verify(props, config)

console.log('api version: ', version)
console.log('running server on port: ', port)
