import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  // ===== PERSONAL INFO =====
  personal: {
    name: 'Antoine Dufils',
    photo: '/images/fader.png', // Place your photo in public/images/
    photoBackEmoji: '💻', // Shown when clicking the photo (3D flip)
    title: {
      en: 'Network and Telecom Engineer',
      fr: 'Ingénieur Réseau Télécom',
    },
    subtitle: {
      en: '3rd-year student at the University of Technology of Troyes, specializing in Network and Telecom. I manage my school’s student information system and am eager to develop my skills through courses, associations, and personal lab projects. Currently seeking a 6-month internship as an apprentice engineer to deepen my skills.',
      fr: "Étudiant en 3ème année à l’Université de Technologie de Troyes, branche Réseau et Télécom, j'administre le système d'information étudiant de mon école. Je cherche à développer mes compétences aux travers des cours, associations et lab personnel. Je recherche actuellement un stage de 6 mois en tant qu'apprenti ingénieur afin d'approfondir mes compétences.",
    },
    location: 'Troyes, France',
  },

  // ===== SEO (used in <head> meta tags) =====
  seo: {
    title: 'Antoine Dufils — Network and Telecom Engineer',
    description: '3rd-year student at the University of Technology of Troyes, specializing in Network and Telecom. I manage my school’s student information system and am eager to develop my administration skills through courses, associations, and personal lab projects. Currently seeking a 6-month internship as an apprentice engineer to deepen my knowledge and skills.',
  },

  // ===== LANGUAGES =====
  languages: {
    default: 'en',
    available: ['en', 'fr'],
    labels: {
      en: 'EN',
      fr: 'FR',
    },
  },

  // ===== CONTACT =====
  contact: [
    { type: 'github', label: 'Suboyyy', href: 'https://github.com/suboyyy' },
    { type: 'linkedin', label: 'Antoine Dufils', href: 'https://www.linkedin.com/in/antoine-dufils-b8ab21218/' },
    { type: 'email', label: 'antoine.dufils@utt.fr' },
    { type: 'phone', label: '+33 6 52 87 81 33' },
    { type: 'location', label: 'Troyes, France' },
  ],

  // ===== SKILLS =====
  skills: [
    {
      title: { en: 'Languages', fr: 'Langues' },
      type: 'languages',
      items: [
        { name: { en: 'French', fr: 'Français' }, level: { en: 'Native', fr: 'Natif' } },
        { name: { en: 'English', fr: 'Anglais' }, level: { en: 'Professional', fr: 'Professionnel' }, details: 'Linguaskill B2+' },
      ],
    },
    {
      title: { en: 'Web Development', fr: 'Développement web' },
      type: 'badges',
      items: [
        { name: 'React' },
        { name: 'TypeScript' },
        { name: 'Node.js' },
      ],
    },
    {
      title: { en: 'Programming Languages', fr: 'Langages de programmation' },
      type: 'badges',
      items: [
        { name: 'Python' },
        { name: 'Java'},
        { name: 'JavaScript' },
        { name: 'C' },
        { name: 'Git' },
      ],
    },
    {
      title: { en: 'Database', fr: 'Base de données' },
      type: 'badges',
      items: [
        { name: 'MySQL' },
        { name: 'Prisma' },
      ],
    },
    {
      title: { en: 'DevOps', fr: 'DevOps' },
      type: 'badges',
      items: [
        { name: 'Homelab' },
        { name: 'Docker' },
        { name: 'Kubernetes' },
        { name: 'Proxmox' },
      ],
    },
    {
      title: { fr: 'Bureautique', en: 'Office tools' },
      type: 'badges',
      items: [
        { name: 'Microsoft Office' },

      ],
    }
  ],

  // ===== PROFESSIONAL EXPERIENCES =====
  experiences: [
    {
      id: 'utt-audiovisual-technician',
      company: { en: 'University of Technology of Troyes (UTT)', fr: 'Université de Technologie de Troyes (UTT)' },
      role: { en: 'Audiovisual Technician', fr: 'Technicien audiovisuel' },
      type: { en: 'Part-time / Student job', fr: 'Emploi étudiant' },
      period: { en: 'Jun 2025 - Present', fr: 'juin 2025 - aujourd\'hui' },
      description: {
        fr: 'Gestion du son, de la lumière et du stream lors d\'événements à l\'UTT. Résolution de problèmes matériel en temps réel et gestion du stress.',
        en: 'Managed audio, lighting, and live streaming for university events. Troubleshot hardware issues in real time under pressure.',
      },
      techs: ['Audio', 'Lighting', 'Video', 'Streaming'],
      details: {
        context: {
          fr: 'Troyes, Grand Est, France — sur site.',
          en: 'Troyes, Grand Est, France — on-site.',
        },
        tasks: {
          fr: [
            'Régie son et lumière pendant des événements (installation, tests, exploitation)',
            'Mise en place et supervision du stream',
            'Diagnostic et résolution de pannes matériel en temps réel',
            'Coordination avec les organisateurs pour respecter le déroulé',
          ],
          en: [
            'Operated audio and lighting during events (setup, checks, live operation)',
            'Set up and monitored live streaming',
            'Diagnosed and fixed hardware issues in real time',
            'Coordinated with organizers to keep the show running smoothly',
          ],
        },
        env: {
          fr: 'Audiovisuel / streaming / support live',
          en: 'Audiovisual / live streaming / on-site live support',
        },
      },
      isHighlighted: true,
    },
    {
      id: 'tcp-warehouse-handler-intern',
      company: { en: 'TCP — Transport & Logistics', fr: 'TCP — Transport et Logistique' },
      role: { en: 'Warehouse Handler', fr: 'Manutentionnaire' },
      type: { en: 'Internship', fr: 'Stage' },
      period: { en: 'Jul 2024 - Aug 2024', fr: 'juil. 2024 - août 2024' },
      description: {
        fr: 'Employé de manutention : préparation de commandes, palettisation et filmage de palettes.',
        en: 'Warehouse operations: order picking, palletizing and pallet wrapping.',
      },
      techs: [],
      details: {
        context: {
          fr: 'Troyes, Grand Est, France — sur site.',
          en: 'Troyes, Grand Est, France — on-site.',
        },
        tasks: {
          fr: [
            'Préparation de commandes',
            'Palettisation et manutention',
            'Filmage et sécurisation de palettes',
          ],
          en: [
            'Order picking and preparation',
            'Pallet wrapping and securing',
            'Palletizing and general handling',
          ],
        },
        env: {
          fr: 'Logistique / entrepôt',
          en: 'Warehouse / logistics',
        },
      },
    },
  ],

  // ===== ASSOCIATIVE EXPERIENCES (optional) =====
  associativeExperiences: [
    {
      id: 'utt-net-group-treasurer',
      association: { en: 'UTT Net Group', fr: 'UTT Net Group' },
      role: { fr: 'Trésorier - Administrateur Systèmes', en: 'Treasurer - Systems Administrator' },
      type: { fr: 'Association', en: 'Volunteer' },
      period: { fr: 'août 2024 - aujourd’hui', en: 'Aug 2024 - Present' },
      description: {
        fr: 'Gestion des fonds de trésorerie, organisation d\'évènements étudiants et administrateur des serveurs étudiants.',
        en: 'Managed treasury funds, organized student events, and administered student servers.',
      },
      techs: ['Dolibarr', 'Linux', 'Proxmox', 'Docker', 'Kubernetes'],
      isHighlighted: true,
      subItem: {
        title: { fr: 'Vice-trésorier (août 2024 - janv. 2025)', en: 'Assistant Treasurer (Aug 2024 - Jan 2025)' },
        description: {},
      },
      details: {
        context: {
          fr: 'UTT Net Group (Troyes, Grand Est, France)',
          en: 'UTT Net Group (Troyes, Grand Est, France)',
        },
        tasks: {
          fr: [
            'Gestion des fonds de trésorerie de l’association',
            'Indexation et suivi des factures à des fins de comptabilité',
            'Support à la gestion de projet étudiant (logistique, accueil d’étudiants extérieurs)',
            'Administration des serveurs étudiants',
          ],
          en: [
            'Managed the association’s treasury funds',
            'Indexed and tracked invoices for accounting purposes',
            'Supported student project logistics and hosted external students',
            'Administered student servers',
          ],
        },
        env: {
          fr: 'Comptabilité / trésorerie / administration serveurs (Linux, Proxmox, Docker, Kubernetes)',
          en: 'Treasury / bookkeeping / server administration (Linux, Proxmox, Docker, Kubernetes)',
        },
      },
    },
    {
      id: 'utt-arena-organization',
      association: { en: 'UTT Arena (UTT Net Group)', fr: 'UTT Arena (UTT Net Group)' },
      role: { fr: 'Organisateur — UTT Arena (2024–2025)', en: 'Organizer — UTT Arena (2024–2025)' },
      type: { fr: 'Association', en: 'Volunteer' },
      period: { fr: 'août 2024 - janv. 2025', en: 'Aug 2024 - Jan 2025' },
      description: {
        fr: 'Coordinateur de l\'UTT Arena 2025, compétition esport, et responsable développement sur l\'édition 2024.',
        en: 'Coordinator for UTT Arena 2025, an esports competition, and lead developer for the 2024 edition.',
      },
      techs: ['Git', 'TypeScript', 'React', 'Next.js', 'Express.js', 'Prisma'],
      details: {
        context: {
          fr: 'UTT Arena : plus grande compétition esport du Grand Est, organisée à l’UTT. 23e édition (28–30 novembre 2025) : 496 joueurs et ~100 bénévoles.',
          en: 'UTT Arena: one of the largest esports competitions in the Grand Est region, hosted at UTT. 23rd edition (Nov 28–30, 2025): 496 players and ~100 volunteers.',
        },
        tasks: {
          fr: [
            "L'UTT Arena est la plus grande compétition esport du Grand-Est ayant lieu tous les ans dans les locaux de l'UTT. Accueillant 496 joueurs et une centaine de bénévoles poru sa 23ème édition du 28 au 30 novembre 2025, elle est un événement majeur du calendrier étudiant de l'UTT.",
            "Coordinateur sur l'édition 2050, je m'occupe avant tout de la coordination des équipes et de la répartition des tâches à effectuer. J'ai également un rôle administratif important auprès de l'UTT, la préfecture et des partenaires notamment.",
            "Je m'occupe également de la gestion de deux pôles que sont l'animation et le développement sur lesquels j'effectue des tâches aux côtés des autres membres afin de les aider. Les 7 coordinateurs travaillent ensemble durant près d'un an afin de proposer un évenement de qualité aux joueurs et au public.", 
          ],
          en: [
            "UTT Arena is one of the largest esports competitions in the Grand Est region, held annually at UTT. With 496 players and around 100 volunteers for its 23rd edition from November 28 to 30, 2025, it is a major event in the UTT student calendar.",
            "As coordinator for the 2025 edition, I am primarily responsible for coordinating teams and distributing tasks. I also have a significant administrative role liaising with UTT, the prefecture, and partners.",
            "I also manage two key areas: animation and development, where I work alongside other members to assist them. The 7 coordinators work together for nearly a year to deliver a quality event for players and the public.",
          ],
        },
        env: {
          fr: 'Coordination événementielle / partenariats / gestion d’équipe / développement web (TypeScript, React, Next.js)',
          en: 'Event coordination / partnerships / team leadership / web development (TypeScript, React, Next.js)',
        },
      },
    },
  ],

  // ===== PROJECTS (optional) =====
  projects: [
    /**{
      id: 'project-a',
      title: { en: 'WeatherApp', fr: 'WeatherApp' },
      description: {
        en: 'A real-time weather dashboard built with React and OpenWeather API.',
        fr: 'Un tableau de bord météo en temps réel construit avec React et l\'API OpenWeather.',
      },
      techs: ['React', 'TypeScript'],
      url: 'https://weather-app.example.com',
      github: 'https://github.com/janedoe/weather-app',
    },**/
    {
      id: 'turbobouffe',
      title: { en: 'TurboBouffe', fr: 'TurboBouffe' },
      description: {
        en: 'Real-time order and inventory management app for festivals, events, and more.',
        fr: "Application de gestion de commandes et d'inventaire en temps réel pour des festivals, évenements et autres.",
      },
      techs: ['TypeScript', 'React', 'NestJS', 'Next.js', 'Node.js', 'Git', 'Prisma'],
      url: 'https://turbobouffe.dev.uttnetgroup.fr',
      github: 'https://github.com/ungdev/turbobouffe-api',
    }
  ],

  // ===== EDUCATION =====
  education: [
    {
      school: { en: 'UTT - University of Technology of Troyes', fr: 'Université de Technologie de Troyes' },
      degree: { en: 'Network and Telecommunications Engineer', fr: 'Ingénieur Réseau et Télécoms' },
      period: '2023 - 2028',
    },
  ],

  // ===== HOBBIES (optional) =====
  hobbies: [
    {
      title: { en: 'Photography', fr: 'Photographie' },
      details: [
        { en: 'Drone', fr: 'Drone' },
      ],
    },
    {
      title: { en: 'Hiking, Ski, Climbing', fr: 'Randonnée, Ski, Escalade' },
    },
    {
      title: { en: 'Cooking', fr: 'Cuisine' },
    },
    {
      title: { en: 'Associative Life', fr: 'Monde associatif' },
    }
  ],

  // ===== PDF (optional — place your PDF in public/cv/) =====
  // Use a string for the same PDF in all languages,
  // or a LocalizedString for one PDF per language (button is hidden if no PDF for the current language).
  pdf: {
    label: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    path: { en: '/cv/resume-en.pdf', fr: '/cv/resume-fr.pdf' },
  },

  // ===== THEME =====
  theme: {
    preset: 'warm', // 'minimal' | 'warm' | 'ocean' | 'forest' | 'slate' | 'lilac'
    // You can override individual colors:
    // colors: {
    //   primary: '#8B5A2B',
    //   primaryLight: '#D4A574',
    // },
  },

  // ===== UI LABELS =====
  labels: {
    sections: {
      contact: { en: 'CONTACT', fr: 'CONTACT' },
      skills: { en: 'SKILLS', fr: 'COMPÉTENCES' },
      experience: { en: 'PROFESSIONAL EXPERIENCE', fr: 'EXPÉRIENCES PROFESSIONNELLES' },
      associativeExperience: { en: 'ASSOCIATIVE EXPERIENCE', fr: 'EXPÉRIENCE ASSOCIATIVE' },
      education: { en: 'EDUCATION', fr: 'FORMATION' },
      projects: { en: 'PROJECTS', fr: 'PROJETS' },
      hobbies: { en: 'HOBBIES', fr: 'LOISIRS' },
    },
    experience: {
      mainTasks: { en: 'Main tasks:', fr: 'Tâches principales :' },
      moreTasks: { en: 'more tasks...', fr: 'autres tâches...' },
      training: { en: 'Training:', fr: 'Formations :' },
      techEnv: { en: 'Tech environment:', fr: 'Env. technique :' },
      technologies: { en: 'Technologies', fr: 'Technologies' },
    },
    actions: {
      clickHint: { en: 'Click on experiences to see more details', fr: 'Cliquez sur les expériences pour voir plus de détails' },
      switchTheme: { en: 'Toggle dark mode', fr: 'Changer le thème' },
      downloadPdf: { en: 'Download PDF', fr: 'Télécharger le PDF' },
    },
  },
}
