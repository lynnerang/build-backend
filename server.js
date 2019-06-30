//import libraries for server creation and database interaction
const express = require('express');
const app = express();
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration);
const cors = require('cors');

app.use(express.json());
app.use(cors());

//set up port for server to run for dev and prod environments
app.set('port', process.env.PORT || 3000);

//run the server on the port
app.listen(app.get('port'), () => {
  console.log(`App is running.`);
});

//set up a response for the root end point
app.get('/', (req, res) => {
	res.status(200).json('Hello world!');
});

//set up a get method for all constellation data
app.get('/api/v1/constellations', (req, res) => {
  //select all data from the constellation table in our database
	database('constellations')
		.select()
    .then(constellations => {
      //check if the array returned has constellations
      constellations.length
        //if so, send happy response w/ data
        ? res.status(200).json(constellations)
        //if not, send sad no data response
				: res.status(404).json({ error: 'No constellation data exists.' });
    })
    //if we get a critical error, send backend error response
		.catch(error => res.status(500).json({ error }));
});

//set up a get method for specific constellation data
app.get('/api/v1/constellations/:id', (req, res) => {
  //select the record with the id in the endpoint from the constellation table in our database
	database('constellations')
		.where('id', req.params.id)
		.select()
		.then(constellations => {
			//check if the array returned has a constellation
      constellations.length
        //if so, send happy response w/ data
        ? res.status(200).json(constellations)
        //if not, send sad no data response
			  : res.status(404).json({ error: 'No constellation data exists for that id.' })
    })
    //if we get a critical error, send backend error response
		.catch(error => res.status(500).json({ error }));
});

//set up a get method for all stars data
app.get('/api/v1/stars', (req, res) => {
  //select all data from the constellation table in our database
	database('stars')
		.select()
    .then(stars => {
      //check if the array returned has a constellation
      stars.length
        //if so, send happy response w/ data
        ? res.status(200).json(stars)
        //if not, send sad no data response
        : res.status(404).json({ error: 'No star data exists.' });
    })
    //if we get a critical error, send backend error response
		.catch(error => res.status(500).json({ error }));
});

//set up a get method for specific star data
app.get('/api/v1/stars/:id', (req, res) => {
	//select the record with the id in the endpoint from the constellation table in our database
	database('stars')
		.where('id', req.params.id)
		.select()
    .then(stars => {
      //check if the array returned has a constellation
      stars.length
        //if so, send happy response w/ data
        ? res.status(200).json(stars)
        //if not, send sad no data response
        : res.status(404).json({ error: 'No star data exists for that id.' });
    })
    //if we get a critical error, send backend error response
		.catch(error => res.status(500).json({ error }));
});

//set up post method to add new constellation to our database
app.post('/api/v1/constellations', (req, res) => {
  //set variable for the constellation data being posted
	const constellation = req.body;

  //set up condition that ensures required fields are provided, otherwise send error
	for (let requiredParameter of [ 'name', 'mythology', 'first_appeared', 'genitive_form' ]) {
		if (!constellation[requiredParameter]) {
			return res.status(422).json({
	      error: `Expected format: { name: <String>, mythology: <String>, first_appeared: <String>, genitive_form: <String> }. You're missing a "${requiredParameter}" property.`
			});
		}
	}

  //insert a new record into our constellations table in our database
	database('constellations')
		.insert(constellation, 'id')
    .then(constellation => res.status(201).json({ id: constellation[0] }))
    //throw an error if critical issue occurs
		.catch(error => res.status(500).json({ error }));
});

//set up post method to add new star to our database
app.post('/api/v1/stars', (req, res) => {
  //set variable for the star data being posted
	const star = req.body;

  //set up condition that ensures required fields are provided, otherwise send error
	for (let requiredParameter of [ 'name', 'constellation_id', 'link', 'magnitude' ]) {
		if (!star[requiredParameter]) {
			return res
				.status(422)
				.json({
					error: `Expected format: { name: <String>, constellation_id: <Number>, link: <String>, magnitude: <String> }. You're missing a "${requiredParameter}" property.`
				});
		}
	}

  //insert a new record into our constellations table in our database
	database('stars')
		.insert(star, 'id')
    .then(star => res.status(201).json({ id: star[0] }))
    //throw an error if critical issue occurs
		.catch(error => res.status(500).json({ error }));
});

//set up a delete method for any record in constellations or stars
app.delete('/api/v1/:table/:id', (req, res) => {
  //pull out the table and id from the end point url
	const { table, id } = req.params;

  //select the record from the table where the id matches the endpoint id
	database(table)
		.where('id', id)
    .select()
    //delete the record
    .del()
    .then(result => {
      //add condition to check if the delete method returned a number of rows deleted above 0
      !result
        //sad path response if 0 was returned
        ? res.status(404).json(`Nothing found for ${id} in ${table}.`)
        //happy path if at least one row was returned as deleted
				: res.status(200).json('Successfully deleted.');
    })
    //throw an error if critical issue occurs
		.catch(error => res.status(500).json({ error }));
});
