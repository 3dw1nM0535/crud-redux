import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dbUri = 'mongodb://localhost/games';

mongodb.MongoClient.connect(dbUri, function (err, db) {

  app.get('/api/games', (req, res) => {
    db.collection('games').find({}).toArray((err, games) => {
      res.json({ games });
    });
  });

  app.listen(8080, () => console.log('Server running'));
});
