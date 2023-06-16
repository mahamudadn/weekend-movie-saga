router.get('/', (req, res) => {

    const query = `SELECT * FROM movies_genres `;
    pool.query(query)
      .then( result => {
        res.send(result.rows);
      })
      .catch(err => {
        console.log('ERROR: Get all movies_movies', err);
        res.sendStatus(500)
      })
  
  });