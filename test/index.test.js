import hello from '../src'

console.log = jest.fn()

describe('hello', () => {
  test('should work', () => {
    hello('World')
    expect(console.log).toHaveBeenCalledWith('Hello, World!')

    hello('NPM')
    expect(console.log).toHaveBeenCalledWith('Hello, NPM!')
  })
})
