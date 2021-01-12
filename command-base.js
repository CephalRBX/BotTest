const { prefix } = require('../config.json')
const Discord = require('discord.js');

const validatePermissions = (permissions) => {
    const validPermissions = [
    'ADMINISTRATOR',
    'CREATE_INSTANT_INVITE',
    'KICK_MEMBERS',
    'BAN_MEMBERS',
    'MANAGE_CHANNELS',
    'MANAGE_GUILD',
    'ADD_REACTIONS',
    'VIEW_AUDIT_LOG',
    'PRIORITY_SPEAKER',
    'STREAM',
    'VIEW_CHANNEL',
    'SEND_MESSAGES',
    'SEND_TTS_MESSAGES',
    'MANAGE_MESSAGES',
    'EMBED_LINKS',
    'ATTACH_FILES',
    'READ_MESSAGE_HISTORY',
    'MENTION_EVERYONE',
    'USE_EXTERNAL_EMOJIS',
    'VIEW_GUILD_INSIGHTS',
    'CONNECT',
    'SPEAK',
    'MUTE_MEMBERS',
    'DEAFEN_MEMBERS',
    'MOVE_MEMBERS',
    'USE_VAD',
    'CHANGE_NICKNAME',
    'MANAGE_NICKNAMES',
    'MANAGE_ROLES',
    'MANAGE_WEBHOOKS',
    'MANAGE_EMOJIS'
    ]

    for (const permission of permissions) {
        if (!validPermissions.includes(permission)){
            throw new Error(`Unknown Permission Node "${permission}"`)
        }
    }
}

let recentlyRan = []

module.exports = (client, commandOptions) => {
    let {
        commands,
        expectedArgs = '',
        permissionErrror = 'You do not have permission to run this command.',
        minArgs = 0,
        maxArgs = null,
        permissions = [],
        requiredRoles = [],
        cooldown = -1,
        callback
    } = commandOptions

    if (typeof commands === 'string'){
        commands = [commands]
    }

    console.log(`Registering command "${commands[0]}"`)

    if (permissions.length){
        if (typeof permissions === 'string'){
            permissions = [permissions]
        }

        validatePermissions(permissions)
    }

    client.on('message', message => {
        const { member, content, guild } = message

        for (const alias of commands){
            if (content.toLowerCase().startsWith(`${prefix}${alias.toLowerCase()}`)){
                //A command has been ran

                //Ensure the user has required permissions
                for (const permission of permissions){
                    if (!member.hasPermission(permission)){

                        const permissionError = new Discord.MessageEmbed()
                        .setColor('#fa2d2d')
                        .setTitle('Permissions Error')
                        .setDescription('You currently do not have the correct permissions to run this command.')
                        .setFooter('MPD Public Relations')
                        .setTimestamp(message.createdAt)
                        message.reply(permissionError)
                        return
                    }
                }

                //Ensure the user has the require roles
                for (const requiredRole of requiredRoles){
                    const role = guild.roles.cache.find(role => role.name === requiredRole)

                    if (!role || member.roles.cache.has(role.id)){
                        message.reply(`You must have the "${requiredRole}" role to use this command`)
                        return
                    }
                }

                let cooldownString = `${member.id}-${commands[0]}`
                if (message.author.id == '196704344106729473') {
                    cooldown = -1
                }
                if(cooldown > 0 && recentlyRan.includes(cooldownString)){
                    const cooldownWarn = new Discord.MessageEmbed()
                    .setColor('#000000')
                    .setTitle('Command Cooldown')
                    .setDescription('This command is on cooldown and cannot be ran at this time. Please wait.')
                    .setFooter('MPD Public Relations')
                    .setTimestamp(message.createdAt)
                    message.channel.send(cooldownWarn)
                    return
                }

                //Split on any number of spaces
                const arguments = content.split(/[ ]+/)

                //Remove the command which is the first index
                arguments.shift()

                //Ensure we have the correct number of arguments
                if (arguments.length < minArgs || (
                    maxArgs !== null && arguments.length > maxArgs
                )){
                        const userError2 = new Discord.MessageEmbed()
                        .setColor('#fa2d2d')
                        .setTitle('Syntax Error')
                        .setDescription(`There has been a syntax error in the command you've attempted to run.\n\nCommand:\n\`${prefix}${alias} ${expectedArgs}\``)
                        .setFooter('MPD Public Relations')
                        .setTimestamp(message.createdAt)
                        message.channel.send(userError2)
                    return

                }

                if (cooldown > 0){
                    recentlyRan.push(cooldownString)

                    setTimeout(() => {
                        recentlyRan = recentlyRan.filter((string) => {
                            string !== cooldownString
                        })
                    }, 1000 * cooldown)
                }

                //Handle the custom command
                callback (message, arguments, arguments.join(' '), client)

                return
            }
        }
    })
}