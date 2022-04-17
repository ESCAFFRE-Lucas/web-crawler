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
        let days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
        let d = new Date();
        let dayName = days[d.getDay()];
        console.log(`Online as ${client.user.tag}`);

        new schedule.scheduleJob('00 07 09 * * *', () => {
            if (dayName === 'Samedi' || dayName === 'Dimanche') {
                client.channels.cache.get('964164221321490462').send('@everyone');
                client.channels.cache.get('964164221321490462').send('Aujourdhui pas de cours !! Profitez bien de votre ' +
                    'week-end pour voir vos proches et travailler !! :) ');
            } else {
                client.channels.cache.get('964164221321490462').send('@everyone');
                client.channels.cache.get('964164221321490462').send('Attention à ne pas oublier le cours !!');
                client.channels.cache.get('964164221321490462').send('Aujourdhui cest ' + dayName + ' vous avez '
                    + arr[0] + ' avec ' + arr[1] + ' en salle ' + Number(arr[2]));
            }
        });
    });

}


