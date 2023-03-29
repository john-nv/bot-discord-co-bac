const { Client, Intents } = require('discord.js');
const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES]
});
const fs = require('fs');

const { token, prefix, HostTaiXiu, BipTaiXiu, roleRandom1, roleRandom2 } = require("./config.json");
const { taiXiu, bipTX , random, math, baucua, bipbaucua } = require('./gameFunc');

let dataTX = fs.readFileSync('./checkTX.json', 'utf-8');
dataTX = JSON.parse(dataTX);

let dataBC = fs.readFileSync('./checkBC.json', 'utf-8');
dataBC = JSON.parse(dataBC);

client.on('ready', () => {
  console.log(`${client.user.username} is ready to go!`);
  client.user.setPresence({
    activities: [
      {
        name:  client.guilds.cache.get('832579380634451969').name, // 'Phục vụ cho ' + client.guilds.cache.get('832579380634451969').memberCount + ' thành viên trong ' + 
        type: 'PLAYING'
      }
    ],
    status: 'idle'
  });
});

try {
client.on("messageCreate", async (msg) => {

    if (msg.author.bot || msg.channel.type === 'DM' || !msg.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/g);
    const cmdName = args.shift().toLowerCase();
    switch (cmdName) {
      case 'tx':
        if (msg.member.roles.cache.some(role => role.name === HostTaiXiu) || msg.member.roles.cache.some(role => role.name === BipTaiXiu)) {
          dataTX = await taiXiu(client, msg, args, dataTX)
        }else{
          msg.channel.send({ content: 'Bạn không có quyền sử dụng lệnh tài xỉu này !' });
        }
        break;
      case 'btx':
        if (msg.member.roles.cache.some(role => role.name === BipTaiXiu)) {
          dataTX = await bipTX(client, msg, args)
        }else{  
          msg.channel.send({ content: 'Bạn không có quyền sử dụng lệnh này !' })
        }
      case 'bc':
        if (msg.member.roles.cache.some(role => role.name === HostTaiXiu) || msg.member.roles.cache.some(role => role.name === BipTaiXiu)) {
          dataBC = await baucua(client, msg, args, dataBC)
        }else{
          msg.channel.send({ content: 'Bạn không có quyền sử dụng lệnh bầu cua này !' });
        }
        break;
      case 'bbc':
        if (msg.member.roles.cache.some(role => role.name === BipTaiXiu)) {
          dataBC = await bipbaucua(client, msg, args)
        }else{
          msg.channel.send({ content: 'Bạn không có quyền sử dụng lệnh này !' })
        }
      break;
      case 'rd':
        if (msg.member.roles.cache.some(role => role.name === roleRandom1) || msg.member.roles.cache.some(role => role.name === roleRandom2)){
          dataTX = await random(client, msg, args)
        }else{
          msg.channel.send({ content: 'Bạn không có quyền sử dụng lệnh Random !' })
        }
      break;
      case 'm':
        dataTX = await math(client, msg, args)
      break;
    }
  
});
} catch (error) {
  message.channel.send({ content: 'Đang đi uống nước đợi 1 chúc' });
}
client.on('error', (error) => {
  console.error(error);
});
client.login(token);