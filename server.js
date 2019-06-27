const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.listen(3000, () => {
  console.log(`App is running on port ${port}`);
})

app.get('/api/v1/constellations', (req, res) => {
  database('constellations').select()
    .then((constellations) => {
      constellations.length ? res.status(200).json(constellations)
        : res.status(404).json({ error: 'No constellation data exists.' })
    })
    .catch((error) => res.status(500).json({ error }));
});

app.get('/api/v1/constellations/:id', (req, res) => {
  database('constellations').where('id', req.params.id).select()
    .then((constellations) => {
      constellations.length ? res.status(200).json(constellations)
        : res.status(404).json({ error: 'No constellation data exists for that id.' })
    })
    .catch((error) => res.status(500).json({ error }));
});

app.get('/api/v1/stars', (req, res) => {
  database('stars').select()
    .then((stars) => {
      stars.length ? res.status(200).json(stars)
        : res.status(404).json({error: 'No star data exists.'})
    })
    .catch((error) => res.status(500).json({ error }));
});

app.get('/api/v1/stars/:id', (req, res) => {
  database('stars').where('id', req.params.id).select()
    .then((stars) => {
      stars.length ? res.status(200).json(stars)
        : res.status(404).json({ error: 'No star data exists for that id.' })
    })
    .catch((error) => res.status(500).json({ error }));
});

app.post('/api/v1/constellations', (req, res) => {
  const constellation = req.body;

  for (let requiredParameter of ['name', 'mythology', 'first_appeared', 'genitive_form']) {
    if (!constellation[requiredParameter]) {
      return res
        .status(422).json({ error: `Expected format: { name: <String>, mythology: <String>, first_appeared: <String>, genitive_form: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('constellations').insert(constellation, 'id')
    .then(constellation => res.status(201).json({ id: constellation[0] }))
    .catch(error => res.status(500).json({ error }));
});

app.post('/api/v1/stars', (req, res) => {
  const star = req.body;

  for (let requiredParameter of ['name', 'constellation_id', 'link', 'magnitude']) {
    if (!star[requiredParameter]) {
      return res
        .status(422).json({ error: `Expected format: { name: <String>, constellation_id: <Number>, link: <String>, magnitude: <String> }. You're missing a "${requiredParameter}" property.` });
    }
  }

  database('stars').insert(star, 'id')
    .then(star => res.status(201).json({ id: star[0] }))
    .catch(error => res.status(500).json({ error }));
});

app.delete('/api/v1/:table/:id', (req, res) => {
  const { table, id } = req.params;

  database(table).where('id', id).select()
    .del()
    .then(result => {
      console.log(result)
      !result ? res.status(404).json(`Nothing found for ${id} in ${table}.`)
        : res.status(200).json('Successfully deleted.')
    })
    .catch(error => res.status(500).json({ error }));
});