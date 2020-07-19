exports.req = { body: jest.fn() }
exports.res = {
  json: jest.fn(),
  status: jest.fn()
}
exports.contacts = [{ name: 'jhon' }]
exports.errorMessage = 'Error Message'
exports.contact = {
  first_name: 'Me',
  last_name: 'You',
  email: 'email@email.com',
  phone: 12345677
}
