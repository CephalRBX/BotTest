module.exports = {
    commands: ['tryout', 'host'],
    expectedArgs: '<game link>',
    minArgs: 1,
    maxArgs: 1,
    cooldown: 30,
    callback: (message, arguments, text) => {
        const Discord = require('discord.js');
        let prefix = '-'
        if (message.member.roles.cache.some(r => r.name === "[-]") || message.member.roles.cache.some(r => r.name === "[+]")) {
            const args = message.content.slice(prefix.length).trim().split(' ');
            let tryoutChannel = message.guild.channels.cache.find(channel => channel.id === '797893160508194847')
            if(message.member.roles.cache.some(r => r.name === "Special Operation Division")){
                //SOG Tryout Notification
                tryoutChannel.send('<@&797910219962712094>')
                const sogTryout = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Special Operation Division Tryout')
                .setDescription(`The Special Operations Division, for the MPD, is currently hosting a tryout. If you wish to attend, please follow the link below.\n\nGame Link:\n${args[1]}`)
                .setFooter('Tryout Notification')
                .setTimestamp(message.createdAt)
                tryoutChannel.send(sogTryout)
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Criminal Investigations Division")){
                tryoutChannel.send('<@&797910219962712094>')
                const cidTryout = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Criminal Investigations Division Tryout')
                .setDescription(`The Criminal Investigations Division, for the MPD, is currently hosting a tryout. If you wish to attend, please follow the link below.\n\nGame Link:\n${args[1]}`)
                .setFooter('Tryout Notification')
                .setTimestamp(message.createdAt)
                tryoutChannel.send(cidTryout)
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Patrol Services Division")){
                tryoutChannel.send('<@&797910219962712094>')
                const psTryout = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Patrol Services Division Tryout')
                .setDescription(`The Patrol Services Division, for the MPD, is currently hosting a tryout. If you wish to attend, please follow the link below.\n\nGame Link:\n${args[1]}`)
                .setFooter('Tryout Notification')
                .setTimestamp(message.createdAt)
                tryoutChannel.send(psTryout)
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Public Relations Division")){
                tryoutChannel.send('<@&797910219962712094>')
                const psTryout = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Public Relations Division')
                .setDescription(`The Public Relations Division, for the MPD, is currently hosting a tryout. If you wish to attend, please follow the link below.\n\nGame Link:\n${args[1]}`)
                .setFooter('Tryout Notification')
                .setTimestamp(message.createdAt)
                tryoutChannel.send(psTryout)
                //PR Division Tryout
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Special Weapons and Tactics Division")){
                tryoutChannel.send('<@&797910219962712094>')
                const swatTryout = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Special Weapons and Tactics Division')
                .setDescription(`The Special Weapons and Tactics Division, for the MPD, is currently hosting a tryout. If you wish to attend, please follow the link below.\n\nGame Link:\n${args[1]}`)
                .setFooter('Tryout Notification')
                .setTimestamp(message.createdAt)
                tryoutChannel.send(swatTryout)
                //PR Division Tryout
                return;
            } else if(message.member.roles.cache.some(r => r.name === "Street Crimes Unit")){
                tryoutChannel.send('<@&797910219962712094>')
                const scuTryout = new Discord.MessageEmbed()
                .setColor('#00ffe5')
                .setTitle('Street Crimes Unit')
                .setDescription(`The Street Crimes Unit, for the MPD, is currently hosting a tryout. If you wish to attend, please follow the link below.\n\nGame Link:\n${args[1]}`)
                .setFooter('Tryout Notification')
                .setTimestamp(message.createdAt)
                tryoutChannel.send(scuTryout)
                //PR Division Tryout
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