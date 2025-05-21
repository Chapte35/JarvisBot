// 2.créer sa commande
//on créé/appelle la dépendance SlashCommandBuilder
const { SlashCommandBuilder } = require('discord.js');

//on exporte la commande
module.exports = {
	data: new SlashCommandBuilder() //on créé une nouvelle instance
		.setName('supportdavid') //on lui donne un nom qui sert à appeler la commande dans discord
		.setDescription('Jarvis got you don\'t worry')
		.addStringOption(option =>
			option.setName('cardnb')
				.setDescription('Number of cards J.A.R.V.I.S. will send you')
				.setRequired(true)), //une description
	async execute(interaction) { //la réponse
		const jarvInput = interaction.options.getString('cardnb')
		await interaction.reply('You asked for ' + jarvInput + " Trello cards");
		await fetch('https://n8n.edazot.ch/webhook/b0dc8749-f899-4d5e-8bad-410a2ac8eeca', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 	"action" : "fetchImportantCards", 
									"limit" : jarvInput ,
									 })
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.error(error));
	},
};