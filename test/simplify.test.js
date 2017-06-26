const assert = require('assert')

const Newton = require('../index')

describe('Simplify method', function () {
    it('should simplify the (x+1)^2', function * () {
        const result = yield Newton.simplify('(x+1)^2')
        assert(result === 'x^2 + 2 x + 1')
    })

    it('should simplify the empty string', function * () {
        const result = yield Newton.simplify('')
        assert(!result)
    })

    it('should simplify the undefined', function * () {
        const error = yield Newton.simplify().catch(err => err)
        assert(error.message === 'Undefined is not supported')
    })
})