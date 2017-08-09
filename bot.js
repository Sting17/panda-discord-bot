var env =require('dotenv').config();
var bot = require("./panda");
var serverName = "Pandemic";
var textChannelName = "bot-commands";
var voiceChannelName = "Chill Room";
var aliasesFile = "aliases";
var botToken = process.env.BOT_TOKEN;

bot.run(serverName, textChannelName, voiceChannelName, aliasesFile, botToken);
