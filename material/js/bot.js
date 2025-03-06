const TelegramBot = require('node-telegram-bot-api');

// put your bot token here 
const token = '7542265150:AAGErFiAHSKeRBk2tuwLTuojdt23470t82I';
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    
    const imageUrl = 'home.png';

    
    const text = `Welcome! 👋\n\nHere you can play fun games and join our community.`;

    
    const options = {
        reply_markup: {
            inline_keyboard: [
                [{ text: '🌐 play', url: 'https://t.me/watchearnas_bot' }],
                [{ text: '🌐 Join TG Community', url: 'https://t.me/tapcoin27' }]
            ]
        }
    };

    
    bot.sendPhoto(chatId, imageUrl, { caption: text, ...options });
});


bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;

    if (query.data === 'play') {
        bot.sendMessage(chatId, 'More features to start the game will be available soon!');
    }
});
