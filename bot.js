const Telegraf = require('telegraf');

const bot = new Telegraf('5933830779:AAEaLPzgeR8xXeGuv3RRWm6Yv3ZMoag7txE');

// bot.on('message', ctx => {
//     console.log(ctx.message.photo)
// })
bot.start((ctx) => {
    ctx.reply('started now');
});


bot.command('test', ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
    // bot.telegram.sendPhoto(ctx.chat.id, "AgACAgQAAxkBAAMiZCnUvQ6-hvkMRfUhNDtXwjLLSfAAAvi-MRvpfklRTqof46hBAAGmAQADAgADeQADLwQ")
    bot.telegram.sendPhoto(ctx.chat.id, { source: "/Users/hamza/Downloads/polaroid-style-background-for-healthy-app-clinic-3d-green4kpersonality--913681447.png" }, {
        reply_to_message_id: ctx.message.message_id
    });
});
bot.command('media', ctx => {
    bot.telegram.sendMediaGroup(ctx.chat.id,
        [
            {
                type: 'photo', media: {
                    source: "/Users/hamza/Downloads/polaroid-style-background-for-healthy-app-clinic-3d-green4kpersonality--913681447.png"
                }
            }, {
                type: 'photo', media: {
                    source: "/Users/hamza/Downloads/proxy.jpeg"
                }
            }, {
                type: 'video', media: {
                    source: "/Users/hamza/Documents/Hebrew/New folder/New folder/New folder/عبري ٢٠٢٢/שיעור 3.mp4"
                }
            }
        ])
});
bot.command('file', ctx => {
    bot.telegram.sendDocument(ctx.chat.id, {
        source: '/Users/hamza/Downloads/🥈 Step 1 Install NodeJS and NPM using nvm Install node version manager (nvm) by typing the following at the command line.pdf'
        // source:'/Users/hamza/Documents/Hebrew/New folder/New folder/New folder/عبري ٢٠٢٢/שיעור 3.mp4'
    }, {
        thumb: {
            source: "/Users/hamza/Downloads/proxy.jpeg"
        }
    })
});
bot.on('message', async ctx => {
    if (ctx.updateSubTypes[0] == 'document') {
        try {
            let link = await bot.telegram.getFileLink(ctx.message.document.file_id);
            ctx.reply('link : ' + link);
        } catch (error) {
            ctx.reply(error.description)
        }
    

    }

})

bot.launch();
// https://api.telegram.org/video/bot5933830779:AAEaLPzgeR8xXeGuv3RRWm6Yv3ZMoag7txE/video/ww.mp4