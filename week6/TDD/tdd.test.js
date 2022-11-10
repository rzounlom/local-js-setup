function testFunction(str){
  return str
  }

describe('testFunction', () => {

  test('should return a string', () => {
    const myStr = testFunction('Rico')

    expect(myStr).toBeTruthy()
  })
})