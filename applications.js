module.exports = {
    commands: ['applications', 'apply'],
    expectedArgs: '<link>',
    minArgs: 1,
    maxArgs: 1,
    cooldown: 30,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        if (message.member.roles.cache.some(r => r.name === "[-]") || message.member.roles.cache.some(r => r.name === "[+]")) {

            let applicationChannel = message.guild.channels.cache.find(channel => channel.id === '797893160508194847')
            const args = message.content.slice(prefix.length).trim().split(' ');
            if(message.member.roles.cache.some(r => r.name === "Special Operation Division")){
                applicationChannel.send('<@&797910377530785822>')
                const sogApp = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Special Operation Division Application')
                .setDescription(`The Special Operations Division, for the MPD, is currently looking for Officers! If you wish to apply, please follow the link below.\n\nApplication Link:\n${args[1]}`)
                .setFooter('Application Notification')
                .setTimestamp(message.createdAt)
                applicationChannel.send(sogApp)
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Criminal Investigations Division")){
                applicationChannel.send('<@&797910377530785822>')
                const cidApp = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Criminal Investigations Division Application')
                .setDescription(`The Criminal Investigations Division, for the MPD, is currently looking for Officers! If you wish to apply, please follow the link below.\n\nApplication Link:\n${args[1]}`)
                .setFooter('Application Notification')
                .setTimestamp(message.createdAt)
                applicationChannel.send(cidApp)
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Patrol Services Division")){
                applicationChannel.send('<@&797910377530785822>')
                const psApp = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Patrol Services Division Application')
                .setDescription(`The Patrol Services Division, for the MPD, is currently looking for Officers! If you wish to apply, please follow the link below.\n\nApplication Link:\n${args[1]}`)
                .setFooter('Application Notification')
                .setTimestamp(message.createdAt)
                applicationChannel.send(psApp)
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Public Relations Division")){
                applicationChannel.send('<@&797910377530785822>')
                const prApp = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Public Relations Division Application')
                .setDescription(`The Public Relations Division, for the MPD, is currently looking for Officers! If you wish to apply, please follow the link below.\n\nApplication Link:\n${args[1]}`)
                .setFooter('Application Notification')
                .setTimestamp(message.createdAt)
                applicationChannel.send(prApp)
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Special Weapons and Tactics Division")){
                applicationChannel.send('<@&797910377530785822>')
                const swatApp = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Special Weapons and Tactics Division Application')
                .setDescription(`The Special Weapons and Tactics Division, for the MPD, is currently looking for Officers! If you wish to apply, please follow the link below.\n\nApplication Link:\n${args[1]}`)
                .setFooter('Application Notification')
                .setTimestamp(message.createdAt)
                applicationChannel.send(swatApp)
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Street Crimes Unit")){
                applicationChannel.send('<@&797910377530785822>')
                const scuApp = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Street Crimes Unit Application')
                .setDescription(`The Street Crimes Unit, for the MPD, is currently looking for Officers! If you wish to apply, please follow the link below.\n\nApplication Link:\n${args[1]}`)
                .setFooter('Application Notification')
                .setTimestamp(message.createdAt)
                applicationChannel.send(scuApp)
                return;
            } else {
                const roleError = new Discord.MessageEmbed()
                .setColor('#fa2d2d')
                .setTitle('Role Error')
                .setDescription('You currently do not have the correct roles to run this command. Please assign yourself / ask a moderator to give you your divisional role.')
                .setFooter('MPD Public Relations')
                .setTimestamp(message.createdAt)
                message.reply(roleError)
                return
            }
        } else {
        const permissionError = new Discord.MessageEmbed()
        .setColor('#fa2d2d')
        .setTitle('Permissions Error')
        .setDescription('You currently do not have the correct permissions to run this command.')
        .setFooter('MPD Public Relations')
        .setTimestamp(message.createdAt)
        message.reply(permissionError)
        }
    },
}