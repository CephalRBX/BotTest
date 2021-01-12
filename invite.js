module.exports = {
    commands: ['invite', 'serverinvite'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const invite = new Discord.MessageEmbed()
        .setColor('#00ffe5')
        .setTitle('Server Invite')
        .setDescription('Please find below the permanent server invitation for you to use / distribute:\n\nhttps://discord.gg/ScdtX9C5Nq')
        .setFooter('MPD Public Relations')
        .setTimestamp(message.createdAt)
        message.channel.send(invite)
        return
    },
}