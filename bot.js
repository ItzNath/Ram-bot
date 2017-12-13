const Discord = require("discord.js");
const client = new Discord.Client();
const objBot = new Discord.Client();
const settings = require ('./settings.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.reply === prefix + 'ping') {
    msg.reply('pong!');
  };
});

client.login(settings.token);
