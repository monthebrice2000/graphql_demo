const dotenv = require('dotenv');
dotenv.config({ debug: true , path: './.env.dev'});

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const Users = require("./models/User")
const Posts = require("./models/Post")

const fs = require("fs");
const path = require("path");
const typeDefs = fs.readFileSync( './typeDefs.graphql', 'utf8' );
const resolvers = require('./resolvers')

mongoose
    .connect(
        process.env.DB,
        {
            ssl: true,
            sslKey: `./${process.env.CREDENTIALS}`,
            sslCert: `./${process.env.CREDENTIALS}`,
            useNewUrlParser: true,
        })
    .then( results => console.log("Connected successfully"))
    .catch(err => console.log("Error in conncetion", err.message))



const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : { Users, Posts }
});

server.listen().then( data => console.log( data.url ) );