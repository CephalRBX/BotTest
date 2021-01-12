module.exports = {
    commands: ['help', 'serverhelp'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 10,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');

        let prefix = '-'
        if (message.member.roles.cache.some(r => r.name === "[+]") || message.member.hasPermission('ADMINISTRATOR')) {
          const adminCommands = new Discord.MessageEmbed()
          .setColor('#00ffe5')
          .setTitle('Administrator Command List')
          .setDescription('Bot Prefix: `' + prefix + '`\n\n`kick <@user>`\nRemoves the user from the server.\n\n`ban <@user>`\nBans the user from the server.\n\n`applications <link>`/`apply <link>`\nAnnounces to the App Notif Role that you division is currently looking for candidates.\n\n`tryout <link>`/`host <link>`\nAnnounces to the Tryout Notif Role that you division is currently hosting tryouts for candidates.')
          .setFooter('MPD Public Relations')
          .setTimestamp(message.createdAt)
          message.channel.send(adminCommands)
          return
        } else if (message.member.roles.cache.some(r => r.name === "[-]")) {
            const modCommands = new Discord.MessageEmbed()
            .setColor('#00ffe5')
            .setTitle('Moderator Command List')
            .setDescription('Bot Prefix: `' + prefix + '`\n\n`kick <@user>`\nRemoves the user from the server.\n\n`applications <link>`/`apply <link>`\nAnnounces to the App Notif Role that you division is currently looking for candidates.\n\n`tryout <link>`/`host <link>`\nAnnounces to the Tryout Notif Role that you division is currently hosting tryouts for candidates.')
            .setFooter('MPD Public Relations')
            .setTimestamp(message.createdAt)
            message.channel.send(modCommands)
            return
        } else {
          const noCommands = new Discord.MessageEmbed()
          .setColor('#00ffe5')
          .setTitle('Moderator Command List')
          .setDescription('Bot Prefix: `' + prefix + '`\n\n`serverinfo` Displays key information regarding the server.\n\n`invite` Displays the permanent invite for this server.\n\n`help` Displays the Commands that you can utilize.\n\n`botinfo` Displays information regarding what each bot is used for and their corresponding prefix.')
          .setFooter('MPD Public Relations')
          .setTimestamp(message.createdAt)
          message.channel.send(noCommands)
            return
        }
    },
}