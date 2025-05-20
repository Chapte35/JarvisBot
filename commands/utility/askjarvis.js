// 2.créer sa commande
//on créé/appelle la dépendance SlashCommandBuilder
const { SlashCommandBuilder } = require('discord.js');

//on exporte la commande
module.exports = {
	data: new SlashCommandBuilder() //on créé une nouvelle instance
		.setName('askjarvis') //on lui donne un nom qui sert à appeler la commande dans discord
		.setDescription('Jarvis got you don\'t worry')
		.addStringOption(option =>
			option.setName('jarvinput')
				.setDescription('The input to send to Jarvis')
				.setRequired(true)), //une description
	async execute(interaction) { //la réponse
		const prompt = interaction.options.getString('jarvinput')
		await interaction.reply('Jarvis is answering your prompt: ' + prompt);
		await fetch('https://edazot.app.n8n.cloud/webhook/b0dc8749-f899-4d5e-8bad-410a2ac8eeca', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ 	"action" : "prompt", 
									"prompt" : prompt ,
									 })
		})
			.then(response => response.json())
			.then(data => console.log(data))
			.catch(error => console.error(error));
	},
};