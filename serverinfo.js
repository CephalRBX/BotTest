module.exports = {
    commands: ['serverinfo'],
    minArgs: 0,
    maxArgs: 0,
    cooldown: 10,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        const { guild } = message

        const { name, region, memberCount, owner, roles, emojis } = guild

        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
        .setTitle(`${name}`)
        .setThumbnail(icon)
        .addFields(
            {
              name: 'Owner',
              value: owner.user.tag + ` / <@!${owner.user.id}>`,
              inline: true,
            },
            {
              name: 'Region',
              value: region,
              inline: true,
            },
            {
              name: 'Members',
              value: memberCount,
              inline: true,
            },
            {
              name: 'Role Count',
              value: roles.cache.size,
              inline: true,
            },
            {
              name: 'Emoji Count',
              value: emojis.cache.size,
              inline: true,
            },
            {
              name: 'Invite',
              value: 'https://discord.gg/ScdtX9C5Nq',
              inline: true,
            }
        )
        message.channel.send(embed)
    },
}