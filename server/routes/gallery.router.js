const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE



// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM gallery ORDER BY id ASC;;`;
    pool.query(sqlText)
        .then((result) => {
            console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500);
        })
}); // END GET Route

//POST Route
router.post('/', (req, res) => {
    const imageInfo = req.body;
    let sqlValues = [imageInfo.path, imageInfo.description];

    const sqlText = `INSERT INTO gallery ("path", "description")
                     VALUES ($1, $2)`;

    pool.query(sqlText, sqlValues)
        .then((result) => {
            console.log(`Added item to the database`, imageInfo);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making POST request`, error);
            res.sendStatus(500); // Good server always responds
        })
})//END POST Route

// PUT Route
router.put('/like/:id', (req, res) => {

    const galleryId = req.params.id;

    let sqlText = `
        UPDATE "gallery"
        SET "likes"= "likes" + 1
        WHERE "id"=$1;
        `
    let sqlValues = [galleryId];

    pool.query(sqlText, sqlValues)
        .then((dbRes) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('PUT /gallery/like/:id fail:', dbErr);
            res.sendStatus(500);
        })
}); // END PUT Route

module.exports = router;