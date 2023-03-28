const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const fs = require('fs');

const { token, prefix } = require("./config.json");
const { taiXiu, bipTX } = require('./gameFunc');

let dataTX = fs.readFileSync('./checkTX.json', 'utf-8');
dataTX = JSON.parse(dataTX);

client.on('ready', () => {
  console.log(`${client.user.username} is ready to go!`);
  client.user.setPresence({
    activities: [
      {
        name: 'Hế lô',
        type: 'PLAYING'
      }
    ],
    status: 'idle'
  });
});

client.on("messageCreate", async (msg) => {
  if (msg.author.bot || msg.channel.type === 'DM' || !msg.content.toLowerCase().startsWith(prefix.toLowerCase())) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const cmdName = args.shift().toLowerCase();

  switch (cmdName) {
    case 'tx':
      dataTX = await taiXiu(client, msg, args, dataTX);
      break;
    case 'taixiu':
      dataTX = await taiXiu(client, msg, args, dataTX);
      break;
    case 'biptx':
      dataTX = await bipTX(client, msg, args)
      break;
    // case 'a':
      // do something
      // break;
  }
});

client.on('error', (error) => {
  console.error(error);
});
client.login(token);
