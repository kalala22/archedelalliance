import type { Ministry } from "@/types";

export const ministries: Ministry[] = [
  {
    id: "louange",
    slug: "louange-et-adoration",
    name: "Louange & Adoration",
    description:
      "Conduire l'assemblée dans la présence de Dieu à travers la musique et l'adoration.",
    fullDescription: `Le ministère de Louange et Adoration est le cœur battant de nos célébrations. Composé de musiciens, choristes et techniciens son dévoués, ce ministère a pour mission de créer une atmosphère propice à la rencontre avec Dieu.

Nos équipes se préparent chaque semaine à travers des répétitions rigoureuses et des moments de prière, afin d'offrir à Dieu et à l'assemblée un temps d'adoration authentique et puissant. Nous croyons que la louange est une arme spirituelle et un mode de vie.`,
    icon: "Music",
    image: "/images/ministries/louange.jpg",
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
    icon: "HandHeart",
    image: "/images/ministries/intercession.jpg",
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
    image: "/images/ministries/jeunesse.jpg",
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
    slug: "femmes-de-valeur",
    name: "Femmes de Valeur",
    description:
      "Encourager et fortifier les femmes dans leur foi, leur famille et leur appel.",
    fullDescription: `Le ministère des Femmes de Valeur rassemble les femmes de l'église autour d'une vision commune : devenir des femmes accomplies selon le cœur de Dieu. À travers des enseignements, des séminaires et des moments de communion, ce ministère aborde les défis spécifiques aux femmes dans la société congolaise.

Des programmes d'autonomisation, de formation professionnelle et de soutien familial complètent l'aspect spirituel, faisant de ce ministère un véritable lieu de transformation.`,
    icon: "Heart",
    image: "/images/ministries/femmes.jpg",
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
    slug: "hommes-de-foi",
    name: "Hommes de Foi",
    description:
      "Former des hommes responsables, spirituellement matures et engagés.",
    fullDescription: `Le ministère des Hommes de Foi a pour mission de former des hommes selon le modèle de Christ : des leaders serviteurs dans leur foyer, leur église et leur communauté. À travers des petits groupes, des enseignements et des activités fraternelles, ce ministère aide les hommes à grandir dans leur identité masculine selon Dieu.

Le programme comprend des études sur le leadership biblique, la responsabilité familiale, l'intégrité professionnelle et la vie de prière.`,
    icon: "Shield",
    image: "/images/ministries/hommes.jpg",
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
    slug: "ministere-des-enfants",
    name: "Ministère des Enfants",
    description:
      "Enseigner la Parole de Dieu aux plus jeunes de manière créative et ludique.",
    fullDescription: `Le Ministère des Enfants est dédié à l'enseignement de la foi aux enfants de 0 à 12 ans pendant les services du dimanche. Nos moniteurs formés utilisent des méthodes pédagogiques adaptées à chaque tranche d'âge pour rendre la Parole de Dieu accessible et vivante.

Jeux, chants, histoires bibliques illustrées et activités manuelles sont au programme pour que chaque enfant puisse développer une relation personnelle avec Jésus dès le plus jeune âge.`,
    icon: "Baby",
    image: "/images/ministries/enfants.jpg",
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
    slug: "evangelisation",
    name: "Évangélisation",
    description:
      "Partager la Bonne Nouvelle de Jésus-Christ dans notre communauté et au-delà.",
    fullDescription: `Le ministère d'Évangélisation est le bras missionnaire de notre église. Avec passion et créativité, nos équipes sortent chaque semaine dans les rues de Masina et des quartiers environnants pour partager l'amour de Christ.

Des campagnes d'évangélisation, des projections de films chrétiens, des distributions de Nouveaux Testaments et des visites à domicile constituent les principales activités de ce ministère qui a vu des centaines de personnes venir à Christ chaque année.`,
    icon: "Megaphone",
    image: "/images/ministries/evangelisation.jpg",
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
    id: "action-sociale",
    slug: "action-sociale",
    name: "Action Sociale",
    description:
      "Servir les plus vulnérables de notre communauté avec compassion et dignité.",
    fullDescription: `Le ministère d'Action Sociale incarne l'amour de Christ en action. Engagé auprès des orphelins, des veuves, des malades et des familles en difficulté, ce ministère coordonne les efforts de solidarité de l'église.

Des programmes d'aide alimentaire, de soutien scolaire, d'assistance médicale et d'accompagnement psychosocial font de ce ministère un pilier essentiel de l'impact communautaire de l'Arche de l'Alliance.`,
    icon: "HandHelping",
    image: "/images/ministries/action-sociale.jpg",
    leader: "Sœur Béatrice Nzuzi",
    activities: [
      "Aide alimentaire",
      "Soutien scolaire",
      "Visites aux malades",
      "Assistance aux orphelins",
      "Programmes d'autonomisation",
    ],
    meetingTime: "Mercredi 15h00 - 17h00",
  },
];
