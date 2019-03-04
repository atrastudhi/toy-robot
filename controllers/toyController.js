const fs = require('fs')

class ToyController {
  static place (option) {
    return new Promise((resolve, reject) => {
      const newOption = option.split(',')
      let posisition = {
        x: newOption[0],
        y: newOption[1],
        face: newOption[2]
      }
      if (Number(posisition.x) < 0 || Number(posisition.y) > 4) {
        console.log('out of range')
        resolve()
      } else {
        fs.writeFile('place.json', JSON.stringify(posisition), (err) => {
          if (err) console.log(err)
          else resolve()
        })
      }
    })
  }

  static move () {
    return new Promise(function (resolve, reject) {
      fs.readFile('place.json', 'utf8',(err, data) => {
        if (err) {
          console.log('must place the toy robot')
          // FOR TESTING PURPOSE
          resolve('must place the toy robot')
        } else {
          let obj = JSON.parse(data)
          if (obj.face === 'NORTH') {
            if (Number(obj.y) === 4) {
              console.log('out of range')
              resolve()
            } else {
              obj.y = Number(obj.y) + 1
              fs.writeFileSync('place.json', JSON.stringify(obj))
              resolve()
            }
          } else if (obj.face === 'SOUTH') {
            if (Number(obj.y) === 0) {
              console.log('out of range')
              resolve()
            } else {
              obj.y = Number(obj.y) - 1
              fs.writeFileSync('place.json', JSON.stringify(obj))
              resolve()
            }
          } else if (obj.face === 'EAST') {
            if (Number(obj.x) === 4) {
              console.log('out of range')
              resolve()
            } else {
              obj.x = Number(obj.x) + 1
              fs.writeFileSync('place.json', JSON.stringify(obj))
              resolve()
            }
          } else if (obj.face === 'WEST') {
            if (Number(obj.x) === 0) {
              console.log('out of range')
              resolve()
            } else {
              obj.x = Number(obj.x) - 1
              fs.writeFileSync('place.json', JSON.stringify(obj))
              resolve()
            }
          } else {
            console.log('invalid input')
            resolve()
          }
        }
      })
    })
  }

  static left () {
    return new Promise ((resolve, reject) => {
      fs.readFile('place.json', 'utf8', (err, data) => {
        if (err) {
          console.log('must place the toy robot')
          resolve()
        } else {
          let obj = JSON.parse(data)
          if (obj.face === 'NORTH') {
            obj.face = 'WEST'
            fs.writeFileSync('place.json', JSON.stringify(obj))
            resolve()
          } else if (obj.face === 'SOUTH') {
            obj.face = 'EAST'
            fs.writeFileSync('place.json', JSON.stringify(obj))
            resolve()
          } else if (obj.face === 'EAST') {
            obj.face = 'NORTH'
            fs.writeFileSync('place.json', JSON.stringify(obj))
            resolve()
          } else if (obj.face === 'WEST') {
            obj.face = 'SOUTH'
            fs.writeFileSync('place.json', JSON.stringify(obj))
            resolve()
          }
        }
      })
    })
  }

  static right () {
    return new Promise((resolve, reject) => {
      fs.readFile('place.json', 'utf8', (err, data) => {
        if (err) {
          console.log('must place the toy robot')
        } else {
          let obj = JSON.parse(data)
          if (obj.face === 'NORTH') {
            obj.face = 'EAST'
            fs.writeFileSync('place.json', JSON.stringify(obj))
            resolve()
          } else if (obj.face === 'SOUTH') {
            obj.face = 'WEST'
            fs.writeFileSync('place.json', JSON.stringify(obj))
            resolve()
          } else if (obj.face === 'EAST') {
            obj.face = 'SOUTH'
            fs.writeFileSync('place.json', JSON.stringify(obj))
            resolve()
          } else if (obj.face === 'WEST') {
            obj.face = 'NORTH'
            fs.writeFileSync('place.json', JSON.stringify(obj))
            resolve() 
          }
        }
      })
    })
  }

  static report () {
    fs.readFile('place.json', 'utf8', (err, data) => {
      if (err) {
        console.log('must place the toy robot')
      } else {
        let obj = JSON.parse(data)
        console.log(`${obj.x},${obj.y},${obj.face}`)
      }
    })
  }
}

module.exports = ToyController