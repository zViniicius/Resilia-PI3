const cors = require('cors');
const express = require('express');
const jsonServer = require('json-server');

const app = express();
const port = 9999 || 9989;
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

//Start server
app.listen(port, () => {
	console.log(`JSON Server is running http://localhost:${port}`);
});
