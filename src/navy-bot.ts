import { Client, Intents } from 'discord.js';
import {getDays} from './start';

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

        new schedule.scheduleJob('00 12 30 * * *', () => {
            if (getDays() === 'Samedi' || getDays() === 'Dimanche') {
                client.channels.cache.get('964164221321490462').send('<@&966690322291769434>');
                client.channels.cache.get('964164221321490462').send("Aujourd'hui pas de cours !! Profitez bien de votre " +
                    'week-end pour voir vos proches et travailler !! :) ');
            } else {
                client.channels.cache.get('964164221321490462').send('<@&966690322291769434>');
                client.channels.cache.get('964164221321490462').send('Hey listen !');
                if (!isNaN(Number(arr[arr.length-1]))) {
                    client.channels.cache.get('964164221321490462').send("Aujourd'hui c'est " + getDays() + ' vous avez '
                        + arr[0] + ' avec ' + arr[1] + ' en salle ' + Number(arr[arr.length-1]));
                } else {
                    client.channels.cache.get('964164221321490462').send("Aujourd'hui c'est " + getDays() + ' vous avez '
                        + arr[0] + ' avec ' + arr[1] + ' en salle : 301 (probablement ¯\\_(ツ)_/¯) ');
                }
            }
        });
    });

}


