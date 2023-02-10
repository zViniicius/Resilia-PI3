const cors = require('cors');
const express = require('express');

const jsonServer = require('json-server');
const cRouters = require('./routers/custom-routers.json');

const app = express();
const port = 9999 || 9989;
const router = jsonServer.router('./db/db.json');
const middlewares = jsonServer.defaults();

//Cors
app.use(
	cors({
		origin: '*',
		optionsSuccessStatus: 200,
	}),
);

// // Handle status code
router.render = (req, res) => {
	let status = res.statusCode;
	let body = res.locals.data;
	switch (status) {
		case 200:
			return res.json(body);
		case 201:
			return res.json(body);
		case 400:
			return res.status(400).json('Bad request, please check again!');
		case 404:
			return res.status(404).json('ID or URL not found, please check again!');
		case 500:
			return res.status(500).json('Internal server error!');
		default:
			return res.json('Unknown error!');
	}
};

// Custom routes
app.use(jsonServer.rewriter(cRouters));

//Set Home page router
app.get('/', (req, res) => {
	res.send(`API Json-Server is running!`);
});

//Access Json Server DB and Mid status code
app.use(middlewares, router);

//Start server
app.listen(port, () => {
	console.log(`JSON Server is running http://localhost:${port}`);
});
