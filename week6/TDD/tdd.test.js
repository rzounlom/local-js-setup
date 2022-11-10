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