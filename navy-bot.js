require('dotenv').config()
const schedule = require('node-schedule');

// Import relevant classes from discord.js
const { Client, Intents } = require('discord.js');

// Instantiate a new client with some necessary parameters.
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);

// Authenticate
client.login(process.env.DISCORD_TOKEN);

client.once("ready", () => {
  console.log(`Online as ${client.user.tag}`);

 new schedule.scheduleJob('00 13 17 * * *', () => {
    if (client.channels.cache.get('964164221321490462').isText) {
      client.channels.cache.get('964164221321490462').send('hey');
    }
  });
});


