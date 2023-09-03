const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const Player = require('./models/Player');  // Adjust the path as needed

// Initialize MongoDB Connection
mongoose.connect('mongodb+srv://admin:showmethemoney@fantasy.3y4sejg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const players = [];

fs.createReadStream('./data/2021.csv')  // Adjust the path to your actual CSV file
  .pipe(csv())
  .on('data', (row) => {
    const fullName = row['Player'].replace(/[^a-zA-Z\s]/g, "").trim(); // Remove special characters and trim
    const [firstName, ...lastNameArr] = fullName.split(' ');
    const lastName = lastNameArr.join(' ');

    const player = {
      firstName: firstName,
      lastName: lastName,
      team: row['Tm'].trim(),
      position: row['Pos'].trim(),
      value: 0,
    };

    players.push(player);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
    // Insert all players to MongoDB
    Player.insertMany(players)
      .then(() => {
        console.log('All players inserted');
        mongoose.connection.close();
      })
      .catch((error) => {
        console.error('Error inserting players: ', error);
      });
  });
