const axios = require('axios')
const isUrl = require('is-url')
const getAisData = async (url) => {
  if (!isUrl(url)) throw new Error('Not an valid url')
  const response = await axios.get(url)
  return response
}

module.exports = getAisData
