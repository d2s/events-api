const fetch = require('node-fetch');

module.exports = async () => {
  const request = await fetch('https://api.github.com/users/d2s')
  const data = await request.json()

  return data
}
