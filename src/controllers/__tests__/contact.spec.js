const { Contact } = require('../../models')
const stubs = require('./stubs')

const { findAll, createContact } = require('../contact')

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
      expect(stubs.res.json).toHaveBeenCalledWith(stubs.contacts)
    })
    it('should return 500 status and error response', async () => {
      Contact.findAll.mockImplementation(() =>
        Promise.reject(new Error(stubs.errorMessage))
      )
      await findAll(stubs.req, stubs.res)

      expect(Contact.findAll).toHaveBeenCalled()
      expect(stubs.res.status).toHaveBeenCalledWith(500)
      expect(stubs.res.json).toHaveBeenCalledWith({
        error: stubs.errorMessage
      })
    })
  })
  describe('create action', () => {
    it('should return 201 status and created contact', async () => {
      Contact.findOne.mockImplementation(() => Promise.resolve(null))
      Contact.create.mockImplementation(() => Promise.resolve(stubs.contact))
      await createContact(stubs.req, stubs.res)

      expect(Contact.create).toHaveBeenCalledWith(stubs.req.body)
      expect(stubs.res.status).toHaveBeenCalledWith(201)
      expect(stubs.res.json).toHaveBeenCalledWith(stubs.contact)
    })
    it('should return 400 status and error response', async () => {
      Contact.findOne.mockImplementation(() => Promise.resolve(null))
      Contact.create.mockImplementation(() =>
        Promise.reject(new Error(stubs.errorMessage))
      )
      await createContact(stubs.req, stubs.res)

      expect(Contact.create).toHaveBeenCalledWith(stubs.req.body)
      expect(stubs.res.status).toHaveBeenCalledWith(400)
      expect(stubs.res.json).toHaveBeenCalledWith({
        error: stubs.errorMessage
      })
    })
    it('should return 400 status and email exists error message if email exists', async () => {
      Contact.findOne.mockImplementation(() => Promise.resolve(stubs.contact))
      await createContact(stubs.req, stubs.res)
      expect(stubs.res.status).toHaveBeenCalledWith(400)
      expect(stubs.res.json).toHaveBeenCalledWith({
        error: stubs.emailExistsErrorMessage
      })
    })
  })
})
