const words = require('an-array-of-english-words')
const { chain } = require('lodash')

const results = chain(words)
  .filter(word => word.includes('th'))
  .filter(word => {
    let [word1, word2] = word.split('th')
    word1 = word1 + 't'
    word2 = 'h' + word2
    const match = words.includes(word1) && words.includes(word2)
    if (match) {
      console.log(word1, word2)
    }
    return match
  })
  .value()

// console.log(results.join("\n"))