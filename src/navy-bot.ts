import { Client, Intents } from 'discord.js';

export const bot = (arr: string[]) => {
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

        new schedule.scheduleJob('00 23 17 * * *', () => {
            client.channels.cache.get('964164221321490462').send('@everyone');
            client.channels.cache.get('964164221321490462').send('Attention à ne pas oublier le cours !!');
            client.channels.cache.get('964164221321490462').send('Aujourdhui vous avez '
                + arr[0] + ' avec ' + arr[1] + ' en salle ' + Number(arr[2]));
        });
    });

}


