const ten = require('./10-index.json')
const assert = (msg) => {
  const d = {
    'missing-links': () => {
      throw new Error('missing links')
    }
  }
  return d[msg]()
}
const init = () => {
  ten.collection.forEach((refA) => {
    !refA.links && assert('missing-links')
    for (let i = 0; i < refA.links.length; i++) {
      //console.log('logical path')
      //console.log('if additional data fills the possibility space will the given constraint still match?')
      //console.log(refA.links[i].rel)
    }
  })
  return ten
}

module.exports = init
