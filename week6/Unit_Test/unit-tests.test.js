const {reverse, returnVowels, isPalindrome} = require('./end')



//example test function
function testFunction(str){
  if(!str){
    throw new Error('Please provide a string')
  }
  return str
  }

describe('testFunction', () => {

  test('should return a string', () => {
    const myStr = testFunction('John')
    expect(myStr).toBeTruthy()
    expect(myStr).toEqual('John')
  })

  test('should return an error when no string is provided', () => {
      //testing errors
  expect(() => testFunction()).toThrow(Error)
  })
})

//create test for reverse function
describe('reverse', () => {

  it('returns a reversed string', () => {

  const myRevesrsedStr = reverse('hello')

  expect(myRevesrsedStr).toEqual('olleh')
  })
})

describe('returnVowels', () => {

  it('does the string have vowels',  () => {

const hasVowels = returnVowels('hello')

expect(hasVowels).toBeGreaterThan(0)
  })

  it('returns correct number of vowels', () => {
    const hasVowels = returnVowels('hello')

    expect(hasVowels).toEqual(2)
  })
})

