const expect = require('chai').expect
const fs = require('fs')
const { place, move, left, right } = require('../controllers/toyController')

before(() => {
  place('0,0,NORTH')
  fs.unlink('place.json', (err) => {
    if (err) {
      console.log(err)
    }
  })
})

describe('TESTING TOY CLASS', () => {
  it('should not move bacause toy robot not place yet', (done) => {
    move()
    .then((data) => {
      expect(data).to.be.an('string')
      expect(data).to.equal('must place the toy robot')
      done()
    })
  })
  it('should place a toy robot', (done) => {
    place('0,0,NORTH')
    .then(() => {
      fs.readFile('place.json', 'utf8', (err, data) => {
        let position = JSON.parse(data)
        expect(err).to.be.null
        expect(position).to.be.an('object')
        expect(position).to.have.property('x')
        expect(position).to.have.property('y')
        expect(position).to.have.property('face')
        expect(position.x).to.equal('0')
        expect(position.y).to.equal('0')
        expect(position.face).to.equal('NORTH')
        done()
      })
    })
  })
  it('should move robot to north', (done) => {
    move()
    .then(() => {
      fs.readFile('place.json', 'utf8', (err, data) => {
        let position = JSON.parse(data)
        expect(err).to.be.null
        expect(position).to.be.an('object')
        expect(position).to.have.property('x')
        expect(position).to.have.property('y')
        expect(position).to.have.property('face')
        expect(position.x).to.equal('0')
        expect(position.y).to.equal(1)
        expect(position.face).to.equal('NORTH')
        done()
      })
    })
  })
  it('should change face robot to west', (done) => {
    left()
    .then(() => {
      fs.readFile('place.json', 'utf8', (err, data) => {
        let position = JSON.parse(data)
        expect(err).to.be.null
        expect(position).to.be.an('object')
        expect(position).to.have.property('x')
        expect(position).to.have.property('y')
        expect(position).to.have.property('face')
        expect(position.x).to.equal('0')
        expect(position.y).to.equal(1)
        expect(position.face).to.equal('WEST')
        done()
      })
    })
  })
  it('should change face robot to north', (done) => {
    right()
    .then(() => {
      fs.readFile('place.json', 'utf8', (err, data) => {
        let position = JSON.parse(data)
        expect(err).to.be.null
        expect(position).to.be.an('object')
        expect(position).to.have.property('x')
        expect(position).to.have.property('y')
        expect(position).to.have.property('face')
        expect(position.x).to.equal('0')
        expect(position.y).to.equal(1)
        expect(position.face).to.equal('NORTH')
        done()
      })
    })
  })
  it('should not change position because out of range', (done) => {
    place('0,0,NORTH')
    left()
    .then(() => {
      return move()
    })
    .then(() => {
      fs.readFile('place.json', 'utf8', (err, data) => {
        let position = JSON.parse(data)
        expect(err).to.be.null
        expect(position).to.be.an('object')
        expect(position).to.have.property('x')
        expect(position).to.have.property('y')
        expect(position).to.have.property('face')
        expect(position.x).to.equal('0')
        expect(position.y).to.equal('0')
        expect(position.face).to.equal('WEST')
        done()
      })
    })
  })
})