import { describe, expect, test, vi } from 'vitest'
import { hello } from '../src'

console.log = vi.fn()

describe('hello', () => {
  test('should work', () => {
    hello('World')
    expect(console.log).toHaveBeenCalledWith('Hello, World!')

    hello('NPM')
    expect(console.log).toHaveBeenCalledWith('Hello, NPM!')
  })
})
