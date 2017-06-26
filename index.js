const Core = require('./lib/core')

const sdk =  class extends Core {
    simplify(exp){
        if(typeof exp === 'undefined') return Promise.reject(new Error('Undefined is not supported')) 
        
        return this.api('/simplify/' + exp).then(res => res.result)
    }

    factorize(exp){
        if(typeof exp === 'undefined') return Promise.reject(new Error('Undefined is not supported')) 
        
        return this.api('/factor/' + exp).then(res => res.result)
    }

    derive(exp){
        if(typeof exp === 'undefined') return Promise.reject(new Error('Undefined is not supported')) 
        
        return this.api('/derive/' + exp).then(res => res.result)
    }

    
    integrate(exp, a, b){
        if(typeof exp === 'undefined') return Promise.reject(new Error('Undefined is not supported')) 

        const path = typeof a !== 'undefined' && typeof b !== 'undefined' ? 
        '/area/'+ a + ':' + b + '|' + exp : '/integrate/'+ exp
        return this.api(path).then(res => res.result)
    }
}

module.exports = new sdk()


