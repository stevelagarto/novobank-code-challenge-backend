
const contact = require('../../models/contact')
const stubs = require('./stubs')

const { getAll, post } = require('../contact')

jest.mock('../../models/contact')

describe('Contact Controller', () => {
  beforeEach(() => {
    stubs.res.json.mockReset()
    stubs.res.sendStatus.mockReset()
    contact.getAll.mockReset()
  })
  it('should call getAll', () => {
    getAll(stubs.req, stubs.res)
    expect(stubs.res.json).toHaveBeenCalled()
    expect(contact.getAll).toHaveBeenCalled()
  })
  it('should call post', () => {
    post(stubs.req, stubs.res)
    expect(contact.set).toHaveBeenCalledWith(stubs.req.body)
    expect(stubs.res.sendStatus).toHaveBeenCalledWith(200)
    expect(contact.getAll).not.toHaveBeenCalled()
    expect(stubs.res.json).not.toHaveBeenCalled()
  })
})
