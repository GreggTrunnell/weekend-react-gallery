//!tried router=require('express').router same (500) error
const express = require('express');
const router = express.Router();
//need to require the pool.js file
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
  const queryText=`UPDATE gallery` 
});

// GET /gallery

router.get('/', (req, res) => {
  // code here
  
  //!This response here was caused an error in app.jsx GET
  //console.log('router.get',response);
  //?Removing the log allowed code to run properly

  let queryText=
'SELECT * FROM "gallery" ORDER BY "id";';
  pool.query(queryText)
    .then(result=>{

      res.send(result.rows);
    })
      .catch((error)=>{
        console.log('error in router.get', error);
        res.sendStatus(500)
      })
    })


module.exports = router;
