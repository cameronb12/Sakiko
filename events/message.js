const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    name: 'messageCreate',
    on: true,
    execute(message) {
        //Check if message sender is a bot.
        if(message.author.bot) return;

        if(message.content === 'hey' && !message.author.bot) {
            message.channel.send('Hello!');
            console.log(message.author.username);
        }
        console.log(message.author.username);
    }
}