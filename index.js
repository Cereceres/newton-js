const Core = require('./lib/core')

const sdk =  class extends Core {
    simplify(exp){
        if(typeof exp === 'undefined') return Promise.reject(new Error('Undefined is not supported')) 
        
        return this.api('/simplify/' + exp).then(res => res.result)
    }
}

module.exports = new sdk()


