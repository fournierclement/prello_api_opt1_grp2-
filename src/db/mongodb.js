const mongoose = require('mongoose');
const seeder = require('mongoose-seeder');
const data = require('../fakeData/data.json');

/*seeder.connect('mongodb://localhost:27017/prello', function(){
  seeder.loadModels([
    '../models/Action.js',
    '../models/Board.js',
    '../models/Card.js',
    '../models/CheckList.js',
    '../models/CheckListItem.js',
    '../models/MailSettings.js',
    '../models/Notification.js',
    '../models/Team.js',
    '../models/User.js',
    '../models/Label.js'
  ]);
  seeder.clearModels(['User', 'Team', 'Notification', 'MailSettings', 'CheckListItem', 'CheckList', 'Card', 'Board', 'Action', 'Label'], function(){
    seeder.populateModels(data)
    .then(seeder.disconnect())
    .catch(err => console.log(err));
  });

});*/



/**
 * Establish connection to MongoDB
 */
mongoose.connect(/*process.env.MONGO_URL_PRELLO_2018*/'mongodb://localhost:27017/prello', { /*promiseLibrary: require('bluebird'),*/ useNewUrlParser: true})
  .then(() => {
    console.log('Successfully connected to MongoDB database.')
  })
  .catch((err) => {
      console.error(err);
      console.log('Something is wrong with the connection to MongoDB. Please make sure your Mongo container is running.')
    });
const db = mongoose.connection;
db.on("error", (err) => console.log(err));

db.on("connected", ()=> {
  console.log("Connected to database");
  const Action = require('../models/Action');
  const Board = require('../models/Board');
  const Card = require('../models/Card');
  const CheckList = require('../models/CheckList');
  const CheckListItem = require('../models/CheckListItem');
  const List = require('../models/List');
  const Notification = require('../models/Notification');
  const Team = require('../models/Team');
  const User = require('../models/User');
  const Label = require('../models/Label');
  seeder.seed(data, { dropDatabase: false, dropCollections: true }).then(function(dbData){
      console.log("Database seeded!");
  }).catch(function(err){
    console.error("Error seeding database", err);
  });
})









module.exports = mongoose;