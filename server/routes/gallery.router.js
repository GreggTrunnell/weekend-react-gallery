const express = require('express');
const router = express.Router();
//need to require the pool.js file
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery

router.get('/', (req, res) => {
  // code here
  console.log('router.get',response.data);
  const queryText=`
  SELECT * FROM "gallery"`;
  pool.query(queryText)
    .then((result)=>{
    //?might need to change what the response data sends. ie change results.id
      res.send(result.data)
      .catch((error)=>{
        console.log('error in router.get', error);
        res.sendStatus(500)
      })
    })
});

module.exports = router;
