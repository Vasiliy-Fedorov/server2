const mongoose = require('mongoose');
const log = require('./pass');
const connectionString = log.password;
//const connectionString = 'mongodb://admin:Ketrin2002@bonsecavek-shard-00-00-lscfm.mongodb.net:27017,bonsecavek-shard-00-01-lscfm.mongodb.net:27017,bonsecavek-shard-00-02-lscfm.mongodb.net:27017/libr?ssl=true&replicaSet=Bonsecavek-shard-0&authSource=admin&retryWrites=true';

const options = {
    useCreateIndex: true,
    useNewUrlParser: true,
    autoIndex: false,
};

function mongoConnection() {
    mongoose
        .connect(
            connectionString,
            options,
        )
        .catch(err => console.log(err));

    // When the connection is disconnected
    mongoose.connection.on('disconnected', () => {
        console.log('Mongoose default connection disconnected');
    });

    mongoose.connection.on('connected', () => {
        console.log('Mongoose OK');
    });
}

module.exports = {
    mongoConnection: mongoConnection
};