import type { Ministry } from "@/types";

export const ministries: Ministry[] = [
  {
    id: "louange",
    slug: "union-musicale",
    name: "Union Musicale",
    description:
      "Conduire l'assemblée dans la présence de Dieu à travers la musique et l'adoration.",
    fullDescription: `Le ministère de Louange et Adoration est le cœur battant de nos célébrations. Composé de musiciens, choristes et techniciens son dévoués, ce ministère a pour mission de créer une atmosphère propice à la rencontre avec Dieu.

Nos équipes se préparent chaque semaine à travers des répétitions rigoureuses et des moments de prière, afin d'offrir à Dieu et à l'assemblée un temps d'adoration authentique et puissant. Nous croyons que la louange est une arme spirituelle et un mode de vie.`,
    icon: "Music",
    image: "/images/ministeres/unionmusical.jpg",
    leader: "Frère David Kabongo",
    activities: [
      "Répétitions hebdomadaires",
      "Formation musicale",
      "Concerts de louange",
      "Retraites de worship",
    ],
    meetingTime: "Samedi 14h00 - 17h00",
  },
  {
    id: "intercession",
    slug: "intercession",
    name: "Intercession",
    description:
      "Couvrir l'église et la nation dans la prière fervente et l'intercession.",
    fullDescription: `Le ministère d'Intercession est le pilier spirituel de notre église. Composé de guerriers de prière engagés, ce ministère veille sur l'assemblée, les familles et la nation à travers une intercession fervente et organisée.

Chaque semaine, les intercesseurs se réunissent pour porter les besoins de l'église devant le trône de la grâce. Des chaînes de prière, des veillées et des jeûnes collectifs rythment la vie de ce ministère essentiel.`,
    icon: "Flame",
    image: "/images/assembler.jpg",
    leader: "Sœur Marie Tshilumba",
    activities: [
      "Prière quotidienne du matin",
      "Chaîne de prière",
      "Veillées de prière",
      "Jeûnes collectifs",
    ],
    meetingTime: "Lundi au Vendredi 05h00 - 06h00",
  },
  {
    id: "jeunesse",
    slug: "jeunesse",
    name: "Jeunesse",
    description:
      "Inspirer et former la prochaine génération à vivre une foi vivante et engagée.",
    fullDescription: `Le ministère de la Jeunesse est un espace vibrant où les jeunes de 18 à 35 ans découvrent leur identité en Christ et développent leur potentiel. À travers des études bibliques dynamiques, des activités sociales et des programmes de mentorat, nous équipons les jeunes pour devenir des leaders dans l'église et dans la société.

Notre vision est de voir une jeunesse radicalement transformée par l'Évangile, qui refuse le conformisme du monde et choisit de vivre selon les standards du Royaume de Dieu.`,
    icon: "Flame",
    image: "/images/assembler.jpg",
    leader: "Frère Jonathan Ilunga",
    activities: [
      "Études bibliques jeunesse",
      "Camps et retraites",
      "Soirées de louange",
      "Programmes de mentorat",
      "Actions sociales",
    ],
    meetingTime: "Samedi 10h00 - 12h00",
  },
  {
    id: "femmes",
    slug: "ministere-des-femmes",
    name: "Ministère des Femmes",
    description:
      "Encourager et fortifier les femmes dans leur foi, leur famille et leur appel.",
    fullDescription: `Le ministère des Dames de l'église Arche de l'Alliance est un espace de fraternité, d'édification et d'action pour les femmes. Composé de femmes de tous âges et de tous horizons, ce ministère a pour mission de soutenir les femmes dans leur vie spirituelle, familiale et sociale.

À travers des rencontres régulières, des enseignements bibliques, des projets d'entraide et des actions communautaires, nous accompagnons les femmes dans leur développement personnel et spirituel, les encourageant à vivre une foi authentique et à être des bénédictions dans leur entourage.`,
    icon: "Heart",
    image: "/images/assembler.jpg",
    leader: "Maman Grâce Mukendi",
    activities: [
      "Études bibliques pour femmes",
      "Séminaires sur le mariage",
      "Formation professionnelle",
      "Groupes de soutien",
      "Conférences annuelles",
    ],
    meetingTime: "Jeudi 16h00 - 18h00",
  },
  {
    id: "hommes",
    slug: "ministere-des-hommes",
    name: "Ministère des Hommes",
    description:
      "Former des hommes responsables, spirituellement matures et engagés.",
    fullDescription: `Le ministère des Hommes de Foi a pour mission de former des hommes selon le modèle de Christ : des leaders serviteurs dans leur foyer, leur église et leur communauté. À travers des petits groupes, des enseignements et des activités fraternelles, ce ministère aide les hommes à grandir dans leur identité masculine selon Dieu.

Le programme comprend des études sur le leadership biblique, la responsabilité familiale, l'intégrité professionnelle et la vie de prière.`,
    icon: "Shield",
    image: "/images/assembler.jpg",
    leader: "Frère Pierre Kasongo",
    activities: [
      "Petit-déjeuner fraternel mensuel",
      "Études sur le leadership",
      "Mentorat inter-générationnel",
      "Activités sportives",
    ],
    meetingTime: "Samedi 07h00 - 09h00",
  },
  {
    id: "enfants",
    slug: "ministere-aupres-des-enfants",
    name: "Ministère auprès des Enfants",
    description:
      "Enseigner la Parole de Dieu aux plus jeunes de manière créative et ludique.",
    fullDescription: `Le Ministère des Enfants est dédié à l'enseignement de la foi aux enfants de 0 à 12 ans pendant les services du dimanche. Nos moniteurs formés utilisent des méthodes pédagogiques adaptées à chaque tranche d'âge pour rendre la Parole de Dieu accessible et vivante.

Jeux, chants, histoires bibliques illustrées et activités manuelles sont au programme pour que chaque enfant puisse développer une relation personnelle avec Jésus dès le plus jeune âge.`,
    icon: "Baby",
    image: "/images/assembler.jpg",
    leader: "Sœur Rachel Kalala",
    activities: [
      "École du Dimanche",
      "Vacances bibliques",
      "Spectacles pour enfants",
      "Programme de parrainage",
    ],
    meetingTime: "Dimanche 08h30 - 11h30",
  },
  {
    id: "evangelisation",
    slug: "evangelisation-et-suivi",
    name: "Évangélisation et Suivi",
    description:
      "Partager la Bonne Nouvelle de Jésus-Christ dans notre communauté et au-delà.",
    fullDescription: `Le ministère d'Évangélisation et de Suivi est le bras missionnaire de notre église. Avec passion et créativité, nos équipes sortent chaque semaine dans les rues de Masina et des quartiers environnants pour partager l'amour de Christ.

Des campagnes d'évangélisation, des projections de films chrétiens, des distributions de Nouveaux Testaments et des visites à domicile constituent les principales activités de ce ministère qui a vu des centaines de personnes venir à Christ chaque année.

Le volet suivi est également assuré par ce ministère, qui accompagne les nouveaux convertis dans leur parcours de foi, les aidant à grandir dans leur relation avec Christ et à s'intégrer dans la communauté.

Si vous avez un cœur pour l'évangélisation et le suivi des nouveaux convertis, ce ministère est fait pour vous.`,
    icon: "Megaphone",
    image: "/images/assembler.jpg",
    leader: "Frère Samuel Mutombo",
    activities: [
      "Évangélisation de rue",
      "Campagnes trimestrielles",
      "Distribution de littérature",
      "Visites à domicile",
      "Projections de films",
    ],
    meetingTime: "Samedi 08h00 - 12h00",
  },
  {
    id: "communication-chretienne-et-medias",
    slug: "communication-chretienne-et-medias",
    name: "Communication Chrétienne et Médias",
    description:
      "Assurer le rayonnement du message de l'Évangile à travers le numérique et les médias.",
    fullDescription: `Le ministère de Communication Chrétienne et Médias a pour vocation d'utiliser les outils technologiques, audiovisuels et numériques pour propager l'Évangile de Jésus-Christ et connecter notre communauté à travers le monde.

Qu'il s'agisse de la réalisation vidéo, de la captation en direct des cultes (livestreaming), de la photographie, du design graphique ou de la gestion de nos réseaux sociaux, notre équipe s'efforce d'exceller pour la gloire de Dieu.`,
    icon: "Radio",
    image: "/images/assembler.jpg",
    leader: "Frère Caleb Mbuyi",
    activities: [
      "Captation et diffusion en direct",
      "Numérique et réseaux sociaux",
      "Photographie et design graphique",
      "Sonorisation et régie technique",
    ],
    meetingTime: "Samedi 13h00 - 16h00",
  },
];
