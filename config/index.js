module.exports = {
  'SERVER_PORT': process.env.SERVER_PORT || 3000,
  'DB': process.env.DB || 'mongodb://localhost:27017/tfk',
  'ZIPCODE_URL': process.env.ZIPCODE_URL || 'https://www.bring.no/postnummerregister-ansi.txt'
}
