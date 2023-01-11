const express = require('express');
const getData = express.Router();


const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;



const url = 'mongodb://localhost:27017';
// const url = 'mongodb+srv://admin:admin@cluster0.hqhlmez.mongodb.net/?retryWrites=true&w=majority';

// const client = new MongoClient(url);

getData.post('/', (req, res) => {
    res.json({ msg: 'Authorized user inside module' });

    mongoClient.connect(url, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db('node_5');
            // console.log(db.collection('restaurants').findOne();
            db.collection('books').find().toArray((err, arr) => {
                console.log(arr);
            });
        }

    });
});
/* getData.post('/', (req, res) => {
    res.json({ msg: 'Authorized user inside module' });

    mongoClient.connect(url, (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db('vrushabh');
            // console.log(db.collection('restaurants').findOne();
            db.collection('restaurants').find({ 'name': 'La Grenouille' }).toArray((err, arr) => {
                console.log(arr);
            });
        }

    });
}); */

module.exports = getData;