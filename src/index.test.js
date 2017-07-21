import getExample from './index'

describe('index/getExample', () => {
  it('returns example', () => {
    expect(getExample()).toEqual('example')
  })
})
