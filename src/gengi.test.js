import { expect } from 'chai'
import Gengi from './gengi'

describe('lib/gengi - unit', () => {
  it('should be a function', () => {
    expect(Gengi).to.be.a('function')
  })

  it('should set/get args', () => {
    const gengi = new Gengi()
    const fakeArgs = {
      currency: 'usd',
      value: 3,
      round: true,
    }
    gengi.args = fakeArgs

    expect(gengi.currency).to.equal('USD')
    expect(gengi.value).to.be.a('number')
    expect(gengi.value).to.equal(3)
    expect(gengi.round).to.be.a('boolean')
    expect(gengi.round).to.equal(true)
  })

  it('should handle invalid args', () => {
    const gengi = new Gengi()
    const fakeArgs = {
      currency: 'nope',
      value: 'nope',
      round: 'nope',
    }
    gengi.args = fakeArgs

    expect(gengi.currency).to.equal('')
    expect(gengi.value).to.be.a('number')
    expect(gengi.value).to.equal(1)
    expect(gengi.round).to.be.a('boolean')
    expect(gengi.round).to.equal(true)
  })

  it('should format numbers', () => {
    const gengi = new Gengi()
    const value = gengi._format(123.888)

    expect(value).to.equal(123.888)

    const fakeArgs = {
      round: true,
    }
    gengi.args = fakeArgs

    const up = gengi._format(123.5)
    expect(up).to.equal(124)
    expect(up % 1 != 0).to.equal(false) // eslint-disable-line eqeqeq

    const down = gengi._format(123.49)
    expect(down).to.equal(123)
    expect(down % 1 != 0).to.equal(false) // eslint-disable-line eqeqeq
  })
})

describe('lib/gengi - integration', () => {
  xit('should return array of currencies', (done) => {
    const gengi = new Gengi()
    gengi.list().then((currencies) => {
      expect(currencies).to.be.a('array')
      done()
    }).catch((err) => {
      expect(err).to.equal(false)
      done()
    })
  })

  xit('should return calculated and formatted number', (done) => {
    const gengi = new Gengi()
    const fakeArgs = {
      currency: 'usd',
      value: 3,
      round: true,
    }
    gengi.args = fakeArgs

    gengi.calculate().then((val) => {
      expect(val).to.be.a('number')
      expect(val % 1 != 0).to.equal(false) // eslint-disable-line eqeqeq
      done()
    }).catch((err) => {
      expect(err).to.equal(false)
      done()
    })
  })
})
