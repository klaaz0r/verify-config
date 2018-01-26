const verify = require('../dist/index')

const properties = {
  a: {
    required: true,
    type: Number
  },
  b: {
    required: true,
    type: Number
  }
}


function add(input) {
  const { a, b } = verify(properties, input)
  return a + b
}

console.log('function wrapper for add(1, 1)')
const result = add({ a: 1, b: 1 })
console.log('function result: ', result)
