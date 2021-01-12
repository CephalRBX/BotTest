module.exports = {
    commands: ['clearchannel', 'cc'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        if (message.author.id == '196704344106729473') {
            message.channel.messages.fetch().then(results => {
              message.channel.bulkDelete(results)
            })
          }
        },
    }