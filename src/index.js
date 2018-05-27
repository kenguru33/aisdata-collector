const ais = require('./services/ais')
ais.getAisData('http://ais.rs.no/aktive_pos.json').then(data => {
  console.log(data)
})
