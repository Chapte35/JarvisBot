const { Events } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        // Vérifier si l'interaction est une soumission de modal
        if (!interaction.isModalSubmit()) return;

        // Vérifier si la modal correspond à notre modal personnalisée
        if (interaction.customId === 'myModal') {
            // Récupérer les valeurs des champs de la modal
            const favoriteColor = interaction.fields.getTextInputValue('favoriteColorInput');
            const hobbies = interaction.fields.getTextInputValue('hobbiesInput');

            // Répondre à l'interaction
            await interaction.reply({ 
                content: `Voici vos informations :\nCouleur préférée : ${favoriteColor}\nVos hobbies : ${hobbies}`, 
            });
        }
    },
};