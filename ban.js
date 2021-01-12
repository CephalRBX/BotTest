module.exports = {
    commands: ['ban', 'permremove'],
    expectedArgs: '<@user>',
    permissionError: 'You need Ban Privileges to run this command',
    minArgs: 1,
    maxArgs: 2,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const { member, mentions } = message
        const target = mentions.users.first() || message.guild.members.cache.get(arguments[0])

        if (target) {
         const targetMember = message.guild.members.cache.get(target.id)
         targetMember.ban()

            const userBanned = new Discord.MessageEmbed()
            .setColor('#00ffe5')
            .setTitle('Server Moderation')
            .setDescription(`<@!${message.author.id}> has banned <@!${target.id}> from the server.`)
            .setFooter('MPD Public Relations')
            .setTimestamp(message.createdAt)
            message.channel.send(userBanned)

        }
    },
    permissions: ['BAN_MEMBERS'],
    requiredRoles: [],
}