const utils = require('../global/utils');
const config = require('../settiings/config.json');

module.exports.run = async (bot, message, args) => {

    let queue = bot.queue.get(message.guild.id);
    if (!message.member.voiceChannel) return [message.delete(), utils.timed_msg(utils.cmd_fail(`${message.author}, please join a voice channel to run this command!`, `${config.prefix}stop`), 5000)];
    if (!queue) return [message.delete(), utils.timed_msg('⚠ No musics are being played.', 5000)];

    queue.musics = [];
    queue.connection.dispatcher.end();

};

module.exports.help = {
    name: 'stop',
    aliases: ['leave']
};