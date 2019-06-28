const data = require('../../../data/cleaner');

const createCon = (knex, constellation) => {
  return knex('constellations').insert({
    name: constellation.name,
    mythology: constellation.mythology,
    first_appeared: constellation.first_appeared,
    genitive_form: constellation.genitive_form,
    brightest_star: constellation.brightest_star
  }, 'id')
    .then(constellationID => {
      let starPromises = [];
      constellation.stars.forEach(star => {
        starPromises.push(createStar(knex, {
          name: star.name,
          magnitude: star.magnitude,
          link: star.link,
          constellation_id: constellationID[0]
        }, 'id')
        )
      })

      return Promise.all(starPromises);
    })
}

const createStar = (knex, star) => knex('stars').insert(star)

exports.seed = function (knex) {
  return knex("stars").del()
    .then(() => knex("constellations").del())
    .then(() => {
      let conPromises = [];
      data.conData.forEach(con => conPromises.push(createCon(knex, con)))
      return Promise.all(conPromises)
    })
    .catch(error => console.log(`Error sending data: ${error}`));
};
