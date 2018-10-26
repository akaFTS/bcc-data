const fs = require('fs')

const file = fs.readFileSync('./rawNames.txt').toString()

const lines = file.split('\n')

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

const selectedLines = shuffle(lines)
  .slice(0, 50)
  .map((line, index) => `${index + 1}. ${line}`)
  .reduce((acc, cur) => acc + cur + '\n', '')

fs.writeFileSync('./pickedNames.txt', selectedLines)
