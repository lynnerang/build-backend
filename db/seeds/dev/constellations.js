const data = require('../../../data/cleaner');

// const createBright = (knex, conID, bright) => knex('brightest_stars').insert({
//   name: bright.name,
//   object_type: bright.object_type,
//   constellation_id: conID,
//   magnitude: bright_magnitude,
//   bv_color: bright.bv_color,
//   right_ascension: bright.right_ascension,
//   declination: bright.decliantion,
//   distance: bright.distance,
//   proper_motion_spd: bright.proper_motion_spd,
//   proper_motion_pos: bright.proper_motion_pos,
//   absolute_mag: bright.absolute_mag
// }, 'id');


const createCon = (knex, constellation) => {
  return knex('constellations').insert({
    name: constellation.name,
    mythology: constellation.mythology,
    first_appeared: constellation.first_appeared,
    genitive_form: constellation.genitive_form
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

      // const bright = data.brightData.find(i => i.constellation === constellation.name);

      // createBright(knex, constellationID[0], bright);

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
