import assert from 'assert'
import verifyConfig from './index'

describe('test verify config', function() {
  describe('all tests', function() {
    it('simple example', function(cb) {
      const properties = {
        api_key: {
          required: true,
          type: String
        }
      }

      const config = {
        api_key: '1234'
      }

      const { api_key } = verifyConfig(properties, config)
      assert.equal(api_key, config.api_key)
      cb()
    })
    it('example with default fallback', function(cb) {
      const properties = {
        api_key: {
          required: true,
          type: String
        },
        ttl: {
          required: false,
          type: Number,
          default: 800
        }
      }

      const config = {
        api_key: '1234'
      }

      const { api_key, ttl } = verifyConfig(properties, config)

      assert.equal(api_key, config.api_key)
      assert.equal(ttl, 800)
      cb()
    })
    it('example with a function', function(cb) {
      const properties = {
        api_key: {
          required: true,
          type: String
        },
        route: {
          required: true,
          type: Function
        }
      }

      const redirect = function(req, res, next) {
        res.redirect('/', next)
      }

      const config = {
        api_key: '1234',
        route: redirect
      }

      const output = verifyConfig(properties, config)

      console.log('input:', config)
      console.log('output:', output)

      assert.equal(output.route, config.route)
      cb()
    })
    it('real world example', function(cb) {
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

      const redirect = function(req, res, next) {
        res.redirect('/', next)
      }

      const config = {
        api_key: '1234',
        route: redirect
      }

      const output = verifyConfig(properties, config)

      console.log('input:', config)
      console.log('output:', output)

      assert.equal(output.route, config.route)
      assert.equal(output.api_key, config.api_key)
      assert.equal(output.port, 8080)
      cb()
    })
  })
})
