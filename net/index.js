const models = require('./models/index')

const data = models()
const str = JSON.stringify(data)
console.log(str)
