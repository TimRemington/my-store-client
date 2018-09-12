const expect = chai.expect

describe("check tests are running", () => {
  it("ran a test", () => {
    expect(true).to.equal(true);
  })
})

describe("check screen functionality", () => {
  it("can get/set the screen", () => {
    setScreen('test')
    expect(getScreen()).to.equal('test');
  })
  it("clears the Screen", () => {
    setScreen('test')
    clearScreen()
    expect(getScreen()).to.equal('');
  })
})

describe('BDD', () => {
  it('clear screen', () => {
    // set the Screen
    setScreen('testing123')
    // click clear button
    let clearButton = document.getElementById('clear')
    clearButton.click()
    // check the screen is clear
    expect(getScreen()).to.equal('');
  })
})

describe("calculating", () => {
  it("1 + 1 = 2", () => {
    calculate(num1, '+', num2)
    // calculate(num1, '+', num2)
    // calculate(num1, '+', num2)
    // calculate(num1, '+', num2)

    let result = calculate(1, "+", 1)
    expect(result).to.equal(2)

    expect(true).to.equal(true);
  })
})

describe("parses screen", () => {
  it("turns 1+1 into [1, '+', 1]", () => {
    expect(parseScreen('1+1')).to.deep.equal([1, '+', 1]);
  })
})
