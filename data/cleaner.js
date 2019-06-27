const constellations = require('./constellations.json');
const stars = require('./stars.json')

const brightData = require('./brightestStars.json');

const starData = stars.reduce((acc, con) => {
  con.stars.forEach(star => {

    if (!acc.map(i => i.name).includes(star.name)) {
      acc.push({ ...star, constellation: con.constName })
    } 
  })
  return acc;
}, [])

const conData = constellations.map(con => {
  const stars = starData.filter(star => star.constellation === con.name)
  return ({
    name: con.name,
    brightest_star: con.brightestStar,
    first_appeared: con.appeared,
    genitive_form: con.genitiveForm,
    mythology: con.mythology,
    stars
  })
})



module.exports = { starData, conData, brightData };