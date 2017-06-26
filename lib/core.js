const request = require('request')
const baseUrl = 'https://newton.now.sh'
const params = {baseUrl}
module.exports = class  {
    api(uri){
        return new Promise((resolve, reject) => {
            params.uri = uri
            request.get(params, (err, response) => {
                if(err) return reject(err)
                resolve(getBody(response.body))
            })
        })
    }
}

const getBody = (body) => {
    try {
        return JSON.parse(body)
    } catch (e) {
      return body  
    } 
}