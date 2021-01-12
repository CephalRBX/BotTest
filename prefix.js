module.exports = {
    commands: ['prefix', 'botinfo'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 10,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const botInformation = new Discord.MessageEmbed()
        .setColor('#000000')
        .setTitle('Server Bots')
        .setDescription('Below are the prefix\'s used within this server and their corresponding bots. Please note all bot commands are to be executed within <#797890149136597033> per the server rules in <#797888321044742174>.')
        .setThumbnail('https://cdn.discordapp.com/attachments/729422357315190945/797955949079166976/mpdbotlog.png')
        .addFields(
                { 
                    name:'Dyno - Moderation',
                    value: 'Prefix:\n`?`'
                },
                {
                    name:'Mee6 - Twitter Announcements',
                    value:'Prefix:\n`!`'
                },
                {
                    name:'Public Relations Bot - Misc.',
                    value: 'Prefix:\n`-`'
                },
                {
                    name:'Reaction Roles - Misc.',
                    value:'Prefix:\n`rr!`'
                },
                {
                    name:'RoVer - Verification',
                    value:'Prefix:\n`!`'
                },
                {
                    name:'Ticket Tool - Ticketing System',
                    value:'Prefix:\n`$`'
                }
        )
        .setFooter('MPD Public Relations')
        .setTimestamp(message.createdAt)
        message.channel.send(botInformation)
        return
    },
}