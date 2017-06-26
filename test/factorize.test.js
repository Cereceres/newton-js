const assert = require('assert')

const Newton = require('../index')

describe('factorize method', function () {
    it('should factorize the x*x+ x*x*x-3x', function * () {
        const result = yield Newton.factorize('x*x+ x*x*x-3x')
        assert(result === 'x (x^2 + x - 3)')
    })

    it('should factorize the empty string', function * () {
        const result = yield Newton.factorize('')
        assert(!result)
    })

    it('should factorize the undefined', function * () {
        const error = yield Newton.factorize().catch(err => err)
        assert(error.message === 'Undefined is not supported')
    })
})