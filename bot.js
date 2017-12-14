const Discord = require("discord.js");
const client = new Discord.Client();
const objBot = new Discord.Client();
const settings = require ('./settings.json');
const prefix = "!"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.reply === prefix + 'ping') {
    msg.reply('pong!');
  };
});

client.login("tal2PBYFR_j_m7FWiyzb9JDwanyYVSwC");
