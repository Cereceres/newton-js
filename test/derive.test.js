const assert = require('assert')

const Newton = require('../index')

describe('derive method', function () {
    it('should derive the x*x+ x*x*x-3x', function * () {
        const result = yield Newton.derive('x*x+ x*x*x-3x')
        console.log('result', result)
        assert(result === '3 x^2 + 2 x - 3')
    })

    it('should derive the empty string', function * () {
        const result = yield Newton.derive('')
        assert(!result)
    })
 
    it('should derive the undefined', function * () {
        const error = yield Newton.derive().catch(err => err)
        assert(error.message === 'Undefined is not supported')
    })
})