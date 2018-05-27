const getAisData = require('./getAisData')
describe('getAisData', () => {
  it('throws on call with invalid url', () => {
    return expect(getAisData('notvalidurl')).rejects.toThrow()
  })
  it('returns array of ais data objects', async () => {
    const result = await getAisData('http://ais.rs.no/aktive_pos.json')
    const props = ['MMSI', 'SOG', 'COG', 'Time_stamp', 'Decimal_Latitude', 'Decimal_Longitude']
    props.forEach(prop => {
      expect(result[0]).toHaveProperty(prop)
    })
  })
})
