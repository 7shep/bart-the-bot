const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Commands
client.on("messageCreate", (message) =>{
  //If the message author is a bot, bot does

  const prefix = '\'

  //GitHub for command help https://github.com/AnIdiotsGuide/discordjs-bot-guide/blob/master/first-bot/command-with-arguments.md

  // More GitHub https://gist.github.com/himanshuxd/3855d2699ed795279bba534e4ddc52f5

  if (message === '!ping') {
    message.channel.send('Pong');
  }

})


const TOKEN = require('./config.json');

//TOKEN is the const which is grabbed from config.json and .token is the token object in .json TOKEN.bottoken would work if it was bottoken = "token" in config.json
client.login(TOKEN.token);
