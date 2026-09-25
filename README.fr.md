# Plugin ATLAS Terminal

**Langues :** [Deutsch](README.md) · [English](README.en.md) · [Français](README.fr.md)

ATLAS Terminal est l'interface d'un plugin autonome pour un terminal web authentifié. L'hôte ATLAS fournit le shell ainsi que les fonctions Supervisor et WebSocket ; ce dépôt n'est ni un serveur SSH autonome ni un module complémentaire Home Assistant.

## Comportement des sessions

Les paramètres du jeton sont repliables. Ils se ferment à la connexion et se rouvrent après la déconnexion ou la fin de la session. Si aucun jeton n'est enregistré dans ce navigateur, les paramètres sont ouverts au premier chargement. Les sessions shell locales démarrent à `/`, la racine du système de fichiers dans le conteneur ATLAS, au lieu de `/app`. Les sessions SSH conservent le répertoire de travail par défaut du serveur distant.

## Installation et sécurité

Ajoutez le plugin depuis [l'Administration ATLAS](https://rockbaer2007.github.io/atlas-terminal-plugin/install.html). Le terminal est désactivé par défaut et nécessite sur l'hôte ATLAS un jeton robuste, aléatoire et d'au moins 32 caractères sûrs pour les URL. Le jeton reste dans le stockage local du navigateur et est transmis lors de la connexion via le sous-protocole WebSocket, jamais dans une URL. Utilisez le terminal uniquement dans un profil de navigateur de confiance ; le shell local dispose des droits du processus ATLAS.

La connexion SSH facultative doit être configurée côté serveur avec un hôte, un utilisateur, une clé privée et un fichier `known_hosts`. La vérification de la clé d'hôte reste active et le navigateur ne peut pas choisir une cible arbitraire.
