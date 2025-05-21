# Guide d'installation de JarvisBot

Ce guide décrit les étapes pour installer, configurer et exécuter JarvisBot, un bot Discord basé sur discord.js.

## Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- [Node.js](https://nodejs.org/) (version LTS recommandée)
- [Git](https://git-scm.com/)
- PM2 (gestionnaire de processus pour Node.js)
  ```bash
  npm install -g pm2
  ```

## Installation

### 1. Cloner le projet

```bash
git clone https://github.com/Chapte35/JarvisBot.git
cd JarvisBot
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Configuration

Créez un fichier `config.json` à la racine du projet avec les informations suivantes :

```json
{
    "token": "VOTRE_TOKEN_BOT_DISCORD",
    "clientId": "ID_CLIENT_DU_BOT",
    "guildId": "ID_DU_SERVEUR_DISCORD"
}
```

> **Note :** Pour obtenir ces valeurs, consultez le [portail des développeurs Discord](https://discord.com/developers/applications).

### 4. Structure des commandes

Les commandes sont organisées dans des dossiers thématiques sous le répertoire `commands/`. Par exemple :

```
commands/
  ├── utility/
  │   ├── ping.js
  │   └── help.js
  ├── admin/
  │   └── ...
  └── fun/
      └── ...
```

Pour créer de nouvelles commandes, consultez la [documentation officielle de discord.js](https://discordjs.guide/slash-commands/response-methods.html#ephemeral-responses).

### 5. Déploiement des commandes

Après avoir créé ou modifié des commandes, déployez-les sur Discord :

```bash
node deploy-commands.js
```

### 6. Lancement du bot

#### Avec PM2 (recommandé pour la production)

```bash
# Démarrer le bot
pm2 start index.js --name "jarvisbot"

# Voir les logs
pm2 logs jarvisbot

# Arrêter le bot
pm2 stop jarvisbot

# Redémarrer le bot
pm2 restart jarvisbot
```

#### En mode développement

```bash
node index.js
```

## Dépannage

Si vous rencontrez des problèmes :
1. Vérifiez que les tokens et IDs dans `config.json` sont corrects
2. Assurez-vous que le bot dispose des permissions nécessaires sur Discord
3. Consultez les logs avec `pm2 logs jarvisbot`

## Documentation utile

- [Guide discord.js](https://discordjs.guide/)
- [Documentation de l'API discord.js](https://discord.js.org/#/docs)
- [Documentation de PM2](https://pm2.keymetrics.io/docs/usage/quick-start/)
