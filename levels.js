const Discord = require("discord.js");
const botconfig = require("../botconfig");
let purple = botconfig.purple;
let xp = require("../xp.json");

module.exports.run = async (bot, message, args) => {

    if(!xp[message.author.id]){
        xp[message.author.id] = {
            xp: 0,
            level: 0
        };
}
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtlvlxp = curlvl * 300;
    let difference = nextlvlxp - curxp;

    let lvlEmbed = new Discord.RichEmbed()
    .setauthor(message.author.username)
    .setColor(purple)
    .addfiled("Level", curlvl, true)
    .addfield("xp", curxp, true)
    .setFooter("${difference} xp til level up", message.author.displayAvatorURL);

    message.channel.send(lvlembed).then(msg => {msg.delete(5000)})

}

module.exports.help = {
    name: "level"
}