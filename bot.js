var env =require('dotenv').config();

var bot = require("./panda");
var serverId = "344824522362322956";
var textChannelId = "344824522362322957";
var voiceChannelId = "345055164140617728";
var aliasesFile = "./aliases.json";
var botToken = process.env.BOT_TOKEN;
var autoplayFile = "./botAutoPlayFile";
var autoPlay = true;
var informNp = false;

bot.run(serverId, textChannelId, voiceChannelId, aliasesFile, botToken, autoplayFile, autoPlay, informNp);
