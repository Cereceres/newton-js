const assert = require('assert')

const Newton = require('../index')

describe('findRoot method', function () {
    it('should findRoot the x^2+2x', function * () {
        const result = yield Newton.findRoot('2x^2-8+x')
        assert.deepEqual(result, [-1,-1])
    })

    it('should findRoot the empty string', function * () {
        const result = yield Newton.findRoot('')
        assert(!result)
    })

    it('should findRoot the undefined', function * () {
        const error = yield Newton.findRoot().catch(err => err)
        assert(error.message === 'Undefined is not supported')
    })
})