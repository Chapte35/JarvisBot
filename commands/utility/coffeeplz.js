// 2.créer sa commande
//on créé/appelle la dépendance SlashCommandBuilder
const { SlashCommandBuilder } = require('discord.js');

//on exporte la commande
module.exports = {
	data: new SlashCommandBuilder() //on créé une nouvelle instance
		.setName('coffeeplz') //on lui donne un nom qui sert à appeler la commande dans discord
		.setDescription('I thought you\'d never ask'),
	async execute(interaction) { //la réponse
		const listeGifs = [
			"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3F1ZTkwaTc4cDh6dTducHl3cmhzOTc5MWtpY3R5MzZieHBvd3B4dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qLeXLs6icdNYs/giphy.gif",
			"https://media4.giphy.com/media/oZEBLugoTthxS/giphy.webp?cid=ecf05e47y4yjman0ies322ttei8w0wz4hj48olx7tfr5ldzu&ep=v1_gifs_related&rid=giphy.webp&ct=g",
			"https://media4.giphy.com/media/AmC5W2bbc41wY/200.webp?cid=ecf05e47y4yjman0ies322ttei8w0wz4hj48olx7tfr5ldzu&ep=v1_gifs_related&rid=200.webp&ct=g",
			"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGt3MmI5bDBwdXBveDVxYzJ0dGpyOWNuYWI1MWo0NDBldGJzNnB6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JdSrNoNr7N9SnHW/giphy.gif",
			"https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGt3MmI5bDBwdXBveDVxYzJ0dGpyOWNuYWI1MWo0NDBldGJzNnB6dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l2JdSrNoNr7N9SnHW/giphy.gif",
			"https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExYndpcGdtd2ZmYW51YXUyZHVldHYyM3c4eDBxczVydHVrbDF4bjFlYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OYlXbO2WumnpC/giphy.gif",
			"https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOXQyYmcyZmN5OGswNmhsbWhweHYyOWU1bGs4aWNhdGp4Z2gzcXdscyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Y6yRfR88rvP44/giphy.gif"
		];

		// Fonction pour obtenir un GIF aléatoire
		function getGifAleatoire() {
			const indexAleatoire = Math.floor(Math.random() * listeGifs.length);
			return listeGifs[indexAleatoire];
		}
		await interaction.reply(getGifAleatoire());
	},

};