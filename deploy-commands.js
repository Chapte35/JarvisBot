//Dépendances et initialisation
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config.json');
const fs = require('node:fs');
const path = require('node:path');
const commands = [];

//Récupère les dossiers de commandes depuis le dossier /commandes/
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

//Récupère tous les fichiers de commandes
for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

	// Récuperer l'output de SlashCommandBuilder#toJSON() pour les données de chaque commande pour les deployersur discord
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			commands.push(command.data.toJSON());
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

// Construire et preparer une instance de module REST
const rest = new REST().setToken(token);

// déployer les commandes sur discord
(async () => {
	try {
		console.log(`Started refreshing ${commands.length} application (/) commands.`);

		// La méthode put est utilisée pour rafraichir complètement toutes les commandes disponnibles
		const data = await rest.put(
			Routes.applicationGuildCommands(clientId, guildId),
			{ body: commands },
		);

		console.log(`Successfully reloaded ${data.length} application (/) commands.`);
	} catch (error) {
		// Bien évidemment, on oublie pas de log les erreures potentielles
		console.error(error);
	}
})();