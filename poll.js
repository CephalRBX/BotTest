const config = require('./config.json')
const Discord = require('discord.js');

module.exports = client => {
    const channelIDs = [
        '797935669946744845', //Poll Channel
    ]

    const addReactions = message => {
        message.react('👍')

        setTimeout(() => {
            message.react('👎')
        }, 750)
    }

    client.on('message', async message =>{
        if(channelIDs.includes(message.channel.id)){
            addReactions(message)
        } /*else if (
            message.content.toLowerCase() === config.prefix + 'poll'
            ) {
            await message.delete()

            const fetched = await message.channel.messages.fetch({ limit: 1 })

            if (fetched && fetched.first()){
                addReactions(fetched.first())
            }
        } else {
            const permError = new Discord.MessageEmbed()
            .setColor('#fa2d2d')
            .setTitle('Permissions Error')
            .setDescription('You currently do not have the correct permissions to run this command.')
            .setFooter('Bot Name Here')
            .setTimestamp(message.createdAt)
            message.channel.send(permError)
        }*/
    })
}