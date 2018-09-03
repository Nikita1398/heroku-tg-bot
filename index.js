const TelegramBot = require('node-telegram-bot-api')

const TOKEN = '672415727:AAHNvm7e62b5BxtR1Qw62SwlszD58H0zF-g'

const bot = new TelegramBot(TOKEN, {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Привет: "Hi, ${msg.from.first_name}"`)
})
require('http').createServer().listen(process.env.PORT || 5000).on('request', function(req, res){
    res.end('')})