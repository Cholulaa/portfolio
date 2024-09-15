const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mohamedsaidi.me/#projects',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mohamed SAIDI',
  role: 'Ingénieur Sécurité',
  description:
    "Ingénieur sécurité avec 3 ans d'expérience, j'ai travaillé sur l'installation et l'administration des agents SentinelOne ainsi que sur la mise en place de simulations de ransomware pour tester la résilience des systèmes. J'ai développé des scripts d'automatisation pour renforcer la sécurité des infrastructures et participé à des projets de conformité ISO 27001. Je m'intéresse également à l'intégration de l'IA dans les environnements professionnels. Curieux et passionné, j'aime relever de nouveaux défis, que ce soit en sécurité informatique, en photographie, ou à travers mes passions sportives.",
  resume: 'chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://mohamedsaidi.me/CV_Mohamed_SAIDI.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/sa%C3%AFdi-mohamed/',
    github: 'https://github.com/Cholulaa',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'SpyWare Python',
    description:
      "Développement d'un spyware en Python pour une carte Teensy, capable d'enregistrer les touches et d'installer un client qui envoie toutes les entrées utilisateur à un serveur C2 (Command & Control).",
    stack: ['Python', 'Teensy', 'C2 server'],
    sourceCode: 'https://github.com/Cholulaa/spyware',
  },
  {
    name: 'POC PSRansom',
    description:
      'Mise en place de PSRansom sur notre infrastructure pour simuler une attaque ransomware, afin de tester la réactivité de nos antivirus et EDR face à ce type de menace.',
    stack: ['Powershell', 'Windows Server', 'CyberSécurité'],
    sourceCode: 'https://github.com/JoelGMSec/PSRansom',
  },
  {
    name: 'Ferme à Troll Rust',
    description:
      "Développement complet d'un système automatisé en Rust pour la création de comptes Twitter et la publication de tweets. Utilisation de ChromeDriver et de l'API Twitter pour simuler l'activité de bots, intégration de l'API de chatpgpt pour la génération autoamatique de tweet.",
    stack: ['Rust', 'API', 'WebScrapping','IA'],
    sourceCode: 'https://github.com/Cholulaa/Projet-rust-Troll-Farm-Mohamed-SAIDI',
  },
  {
    name: 'Entainement IA Pilotage',
    description:
      "Conception et déploiement d'une IA destinée à automatiser la gestion des tickets sur une plateforme ITSM. L'IA analyse, qualifie, et redirige automatiquement les tickets d'incidents et de demandes vers les équipes appropriées.",
    stack: ['Azure OpenAI Studio', 'Python', 'ITSM','IA','API'],
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Rust',
  'SentinelOne',
  'Azure',
  'AWS BedRock',
  'ISO 27001',
  'PowerShell',
  'WebScrapping',
  'Git',
  'RunDeck',
  'ELK',
  'Cisco',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'saidimohamed2603@gmail.com',
}

export { header, about, projects, skills, contact }
