// 2.créer sa commande
//on créé/appelle la dépendance SlashCommandBuilder
const { SlashCommandBuilder } = require('discord.js');

//on exporte la commande
module.exports = {
	data: new SlashCommandBuilder() //on créé une nouvelle instance
		.setName('ping') //on lui donne un nom qui sert à appeler la commande dans discord
		.setDescription('Replies with Pong!'), //une description
	async execute(interaction) { //la réponse
		await interaction.reply('Pong!');
	},
};