var env =require('dotenv').config();

var bot = require("./panda");
var serverId = "325155816250540032";
var textChannelId = "328547123706462209";
var voiceChannelId = "325155816250540033";
var aliasesFile = "./aliases.json";
var botToken = process.env.BOT_TOKEN;
var autoplayFile = "./botAutoPlayFile";
var autoPlay = true;
var informNp = false;

bot.run(serverId, textChannelId, voiceChannelId, aliasesFile, botToken, autoplayFile, autoPlay, informNp);
