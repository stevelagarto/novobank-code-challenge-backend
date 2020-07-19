const { Contact } = require('../../models')
const stubs = require('./stubs')

const { findAll } = require('../contact')

jest.mock('../../models')

describe('Contact Controller', () => {
  beforeEach(() => {
    stubs.res.json.mockReset()
    stubs.res.status.mockReset()
  })
  describe('findAll action', () => {
    it('should return 200 status and contact list', async () => {
      Contact.findAll.mockImplementation(() => Promise.resolve(stubs.contacts))
      await findAll(stubs.req, stubs.res)

      expect(Contact.findAll).toHaveBeenCalled()
      expect(stubs.res.status).toHaveBeenCalledWith(200)
      expect(stubs.res.json).toHaveBeenCalledWith({ contacts: stubs.contacts })
    })
    it('should return 500 status and error response', async () => {
      Contact.findAll.mockImplementation(() => Promise.reject(new Error(stubs.errorMessage)))
      await findAll(stubs.req, stubs.res)

      expect(Contact.findAll).toHaveBeenCalled()
      expect(stubs.res.status).toHaveBeenCalledWith(500)
      expect(stubs.res.json).toHaveBeenCalledWith({ error: stubs.errorMessage })
    })
  })
  describe('create action', () => {

  })
})
