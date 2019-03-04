const fs = require('fs')

module.exports = {
  place: (option) => {
    const newOption = option.split(',')
    let posisition = {
      x: newOption[0],
      y: newOption[1],
      face: newOption[2]
    }
    if (Number(posisition.x) < 0 || Number(posisition.y) > 4) {
      console.log('out of range')
    }
    fs.writeFile('place.json', JSON.stringify(posisition), (err) => {
      if (err) console.log(err)
    })
  }
}