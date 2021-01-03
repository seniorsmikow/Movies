const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const { cors } = require('cors');


const app = express();

const PORT = 3005;

mongoose.connect('...my data...', { useUnifiedTopology: true, useNewUrlParser: true });

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const dbConnection = mongoose.connection;

dbConnection.on('error', error => console.log(`Connection error: ${error}`));

dbConnection.once('open', () => console.log("Connected to db!"));

app.listen(PORT, error => {
    error ? console.log(error) : console.log("Server started!");
});