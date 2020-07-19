
module.exports = {
  setupFiles: [
    'dotenv/config'
  ],
  collectCoverageFrom: [
    '**/*.{js,jsx}'
  ],
  testMatch: [
    '**/*.(spec).(js)'
  ],
  testPathIgnorePatterns: [
    '/node_modules/'
  ]
}
