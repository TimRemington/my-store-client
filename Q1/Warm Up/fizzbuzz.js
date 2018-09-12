function fizzbuzz () {

  for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0){
      console.log('fizzbuzz')
    }
    if (i % 3 === 0) {
      console.log('fizz')
    }
    if (i % 5 === 0) {
      console.log('buzz')
    }
    else {
      console.log(i)
    }
  }
}


const expect = chai.expect

describe('fizzbuzz', function () {
  it('returns fizzbuzz(5)', function() {
    expect(fizzbuzz(5).to.deep(equal[1, 2, 'Fizz', 4, 'Buzz'])
  })
})

// One file has fizzbuzz
// One file is test.js
// to link js files
// module.exports fizzbuzz:fizzbuzz
