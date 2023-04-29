const pg = require('pg');

const pool = new pg.Pool({
    host: 'localhost',
    port: 3000,
    database: 'react_gallery',
    user: 'postgres',
    password: 'Gambino20' 
});

module.exports = pool;