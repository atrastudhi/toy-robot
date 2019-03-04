const { place, move, left, right } = require('./controllers/toyController')

const command = process.argv.slice(2)

switch (command[0]) {
  case 'PLACE':
    place(command[1])
    break;
  case 'MOVE':
    move()
    break;
  case 'LEFT':
    left()
    break;
  case 'RIGHT':
    right()
    break;
  case 'REPORT':
  
    break;
  default:
    console.log('invalid input')
    break;
}
