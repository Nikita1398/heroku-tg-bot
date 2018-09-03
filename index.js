const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '672415727:AAHNvm7e62b5BxtR1Qw62SwlszD58H0zF-g'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from HEROKU, bot says: "Hi, ${msg.from.first_name}"`)
})