const assert = require('assert')

const Newton = require('../index')

describe('integrate method', function () {
    it('should integrate the x*x+ x*x*x-3x', function * () {
        const result = yield Newton.integrate('x*x+ x*x*x-3x')
        assert(result === '1/4 x^4 + 1/3 x^3 - 3/2 x^2')
    })

    it('should integrate the x+1', function * () {
        const [a,b] = ['1.001', '6.0001']
        const result = yield Newton.integrate('x+1',a, b)
        const _result = 22.4987
        assert.equal(result, _result )
    })

    it('should return zero if the interval is [a,a]', function * () {
        const [a,b] = [6, 6]
        const result = yield Newton.integrate('x+1',a, b)
        const _result = 0
        assert.equal(result, _result )
    })

    it('should return the integrate [a,b] equal to minor [b,a]', function * () {
        const [a,b] = [1, 6]
        const result = yield Newton.integrate('x+1', a, b)
        const _result = yield Newton.integrate('x+1', b, a)
        assert.equal(result, - _result )
    })

    it('should integrate the empty string', function * () {
        const result = yield Newton.integrate('')
        assert(!result)
    })

    it('should integrate the undefined', function * () {
        const error = yield Newton.integrate().catch(err => err)
        assert(error.message === 'Undefined is not supported')
    })
})