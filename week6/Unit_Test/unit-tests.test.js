function testFunction(str){
  return str
  }

describe('testFunction', () => {

  it('should return a string', () => {
    const myStr = testFunction('Rico')

    expect(myStr).toBeTruthy()
  })
})