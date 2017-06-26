# newton-js
newton api https://newton.now.sh wrap to nodejs 
## API

### simplify(String) -> Promise

example :

```js

yield newton.simplify('x(x+1)') // x^2 + x
```

### factorize(String) -> Promise

example: 
```js

yield newton.factorize('x^2-x') // x(x-1)
```
### derive(String) -> Promise

```js

yield newton.derive('x^2+2x-1') // 2x -1
```
### findRoot(String) -> Promise
```js

yield newton.findRoot('x^2+3x+2') // [-1, -2]
```    
### integrate(String[, a, b]) -> Promise
```js

yield newton.integrate('x^2+x') // 1/3 x^3+1/2 x^2

// if a and b are given the integrate is defined

yield newton.integrate('x^2+x',0,1) // 1/3 + 1/2

```
### findTangent(String, a=0) -> Promise
```js

yield newton.findTangent('x*x+ x*x*x-3x') // -3 x + -30
```