
# Portfolio Mohamed SAIDI

## Description
Ce portfolio présente mes compétences et projets en tant qu'ingénieur sécurité opérationnelle avec plus de 3 ans d'expérience. Vous y trouverez des exemples de mes réalisations dans le domaine de la cybersécurité, de l'automatisation des processus et de l'intégration de l'intelligence artificielle dans les environnements professionnels. Je m'intéresse également à la photographie et aux sports, qui sont mes passions en dehors de la sécurité informatique.

## Technologies utilisées
- **Node.js** : Utilisé pour construire le backend et gérer les fonctionnalités serveur.
- **Yarn** : Gestionnaire de paquets pour gérer les dépendances.
- **JavaScript** : Langage pour les scripts côté client.
- **HTML/CSS** : Pour structurer et styliser l'interface utilisateur du portfolio.
- **Nginx** : Serveur web sécurisé pour héberger l'application.

## Sécurisation du serveur
Le serveur Nginx hébergeant ce portfolio est sécurisé en suivant une procédure rigoureuse appliquée sur une machine Ubuntu. Voici un résumé des étapes de sécurisation :

### 1. **Mise à jour du système**
Tous les paquets sont mis à jour régulièrement pour s'assurer que le serveur est protégé contre les vulnérabilités :
```bash
apt update && apt upgrade -y
```

### 2. **Création d'un utilisateur non-root avec sudo**
Pour éviter l'utilisation de root directement, un utilisateur avec privilèges sudo est créé :
```bash
adduser votreutilisateur
usermod -aG sudo votreutilisateur
```

### 3. **Désactivation de l'accès root via SSH**
L'accès SSH pour root est désactivé pour plus de sécurité :
```bash
sudo nano /etc/ssh/sshd_config
```
Modification de `PermitRootLogin` à `no` :
```bash
PermitRootLogin no
```

### 4. **Installation et configuration de UFW (Uncomplicated Firewall)**
Un firewall basique est configuré pour autoriser uniquement le trafic nécessaire :
```bash
sudo ufw allow OpenSSH
sudo ufw enable
```

### 5. **Changement du port SSH**
Le port par défaut SSH (22) est modifié pour réduire les attaques par force brute :
```bash
sudo nano /etc/ssh/sshd_config
Port 2222
```
Ensuite, le nouveau port est autorisé dans UFW :
```bash
sudo ufw allow 2222/tcp
```

### 6. **Installation de Fail2Ban**
Fail2Ban est installé pour bloquer les tentatives de connexion répétées :
```bash
sudo apt install fail2ban -y
```

### 7. **Authentification par clé SSH**
L'authentification par clé SSH est utilisée à la place des mots de passe :
```bash
ssh-keygen -t rsa
ssh-copy-id votreutilisateur@votre_ip_serveur
```
Le mot de passe SSH est désactivé :
```bash
sudo nano /etc/ssh/sshd_config
PasswordAuthentication no
```

### 8. **Mises à jour automatiques**
Les mises à jour de sécurité sont configurées pour s'installer automatiquement :
```bash
sudo apt install unattended-upgrades
```

### 9. **Installation de Nginx**
Le serveur web **Nginx** est utilisé pour héberger le site. Il est configuré pour servir l'application Node.js et gérer les requêtes de manière sécurisée.

## Installation
Pour cloner et exécuter ce projet en local, vous aurez besoin de **Node.js**, **Yarn**, et **Nginx** installés.

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/Cholulaa/portfolio.git
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd portfolio
   ```

3. Installez les dépendances :
   ```bash
   yarn install
   ```

4. Démarrez le serveur de développement :
   ```bash
   yarn start
   ```

5. Configurez **Nginx** pour rediriger les requêtes vers l'application Node.js en utilisant les bonnes règles de proxy.

## Scripts disponibles
### `yarn start`
Lance l'application en mode développement.

### `yarn build`
Construit l'application pour la production dans le dossier `build`.

### `yarn test`
Lance les tests pour vérifier les fonctionnalités et les composants.

### `yarn lint`
Assure la qualité du code avec un outil de linting.

## Contribuer
Les contributions sont les bienvenues ! Si vous avez des suggestions ou des améliorations, n'hésitez pas à soumettre une *pull request* ou à ouvrir une *issue*.

## Auteur
**Mohamed SAIDI** - Ingénieur Sécurité Opérationnelle

## Licence
Ce projet est sous licence MIT.
