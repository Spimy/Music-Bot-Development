const utils = require('../global/utils');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    
    if (queue && queue.playing) {
        queue.playing = false;
        queue.connection.dispatcher.pause();
        return message.channel.send(`🎵 Music has now been paused`);
    }

    return [message.delete(), utils.timed_msg('⚠ No musics are being played.', 5000)];
    
};

module.exports.help = {
    name: 'pause',
    aliases: []
};