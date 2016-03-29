import { expect } from 'chai'
import usage from './usage'

describe('Usage utility', () => {
  it('should return a string', () => {
    expect(usage).to.be.a('string')
  })

  xit('should output usage instructions')
})
