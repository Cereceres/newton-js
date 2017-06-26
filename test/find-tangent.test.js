const assert = require('assert')

const Newton = require('../index')

describe('findTangent method', function () {
    it('should findTangent the x*x+ x*x*x-3x', function * () {
        const result = yield Newton.findTangent('x*x+ x*x*x-3x')
        assert(result === '-3 x + -30')
    })

    it('should findTangent the empty string', function * () {
        const result = yield Newton.findTangent('')
        assert(result === '0 x + 0')
    })

    it('should findTangent the undefined', function * () {
        const error = yield Newton.findTangent().catch(err => err)
        assert(error.message === 'Undefined is not supported')
    })
})