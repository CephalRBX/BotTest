const Discord = require('discord.js');
const client = new Discord.Client();
const path = require('path')
const fs = require('fs')


const command = require('./command')
const config = require('./config.json')

const poll = require('./poll')


//Status of bot
client.on('ready', () => {

  const { prefix } = config
  client.user.setPresence({
    activity: {
      name: `${prefix}help | MPD Public Relations`,
    },
  })

})

/*client.on('message', message => {
    let serverRole = message.guild.channels.cache.find(channel => channel.id === '797910637446430730')
    const notifRole = new Discord.MessageEmbed()
    .setTitle('Notification Roles')
    .setDescription(`To be given the <@&797910219962712094> role, react with :speaking_head:\n\nTo be given the <@&797910377530785822> role, react with :receipt:`)
    .setFooter('MPD Public Relations')
    .setTimestamp(message.createdAt)
    .setColor('#000000')
    serverRole.send(notifRole)
})*/

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(channel => channel.id === '797886861111722075');
    if (!channel) return;
    channel.send(`Welcome to the server, ${member}!\n\n:bangbang: Please ensure you read over the <#797888321044742174> and follow them.\n\n:information_source: Information regarding this server can be found in <#797889524779843604>.\n\n:grey_question: Any questions you have regarding this server / MPD can be direct to a member of the Public Relations Team!`);
  });

client.on('ready', async () => {
  console.log(`Logged in as ${client.user.tag}!`);

  command(client, 'status', message => {
    if (message.author.id == '196704344106729473') {
      const content = message.content.replace(config.prefix + 'status', '')

      client.user.setPresence({
        activity: {
          name: content,
          type: 0
        }
      })

    const statusChanged = new Discord.MessageEmbed()
    .setTitle('Status Modified')
    .setDescription(`<@!${message.author.id}> has changed my status to:\n${content}`)
    .setFooter('MPD Public Relations')
    .setTimestamp(message.createdAt)
    .setColor('#000000')
    message.channel.send(statusChanged)


    }
  })

  poll(client)


  const baseFile = 'command-base.js'
  const commandBase = require(`./commands/${baseFile}`)
  const readCommands = dir => {
    const files = fs.readdirSync(path.join(__dirname, dir))
    for (const file of files){
      const stat = fs.lstatSync(path.join(__dirname, dir, file))
      if (stat.isDirectory()){
        readCommands(path.join(dir, file))
      } else if (file !== baseFile) {
        const option = require(path.join(__dirname, dir, file))
        commandBase(client, option)
      }
    }
  }
  readCommands('commands')
});


client.login(config.token)