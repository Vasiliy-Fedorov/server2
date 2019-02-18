const mongoose = require('mongoose');
const log = require('./pass');

const connectionString = log.password;

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