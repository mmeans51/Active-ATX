const faker = require('faker');
const db = require('../config/connection');
const { Player } = require('../models');

db.once('open', async () => {
  await Player.deleteMany({});

  // create Player data
  const PlayerData = [];

  for (let i = 0; i < 50; i += 1) {
    const Playername = faker.internet.PlayerName();
    const email = faker.internet.email(Playername);
    const password = faker.internet.password();

    PlayerData.push({ Playername, email, password });
  }

  const createdPlayers = await Player.collection.insertMany(PlayerData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomPlayerIndex = Math.floor(Math.random() * createdPlayers.ops.length);
    const { _id: PlayerId } = createdPlayers.ops[randomPlayerIndex];

    let friendId = PlayerId;

    while (friendId === PlayerId) {
      const randomPlayerIndex = Math.floor(Math.random() * createdPlayers.ops.length);
      friendId = createdPlayers.ops[randomPlayerIndex];
    }

    await Player.updateOne({ _id: PlayerId }, { $addToSet: { friends: friendId } });
  }

  
  process.exit(0);
});
