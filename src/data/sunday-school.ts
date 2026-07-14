import type { SundaySchoolClass } from "@/types";

export const sundaySchoolMission =
  "Former la prochaine génération dans la connaissance de Dieu à travers un enseignement biblique créatif, interactif et adapté à chaque tranche d'âge.";

export const sundaySchoolPedagogy =
  "Notre pédagogie repose sur l'apprentissage par l'expérience. Nous combinons histoires bibliques, jeux éducatifs, activités artistiques, chants et discussions de groupe pour rendre la Parole de Dieu accessible et passionnante.";

export const sundaySchoolClasses: SundaySchoolClass[] = [
  {
    id: "jardin",
    name: "Classe de Jardin",
    ageRange: "3 à 5 ans",
    description: "Un environnement chaleureux où les tout-petits découvrent l'amour de Dieu à travers des histoires simples et des activités sensorielles.",
    activities: ["Histoires bibliques illustrées", "Chants et comptines", "Coloriage et peinture", "Jeux de rôle simples", "Prière en groupe"],
    objectives: ["Découvrir que Dieu les aime", "Apprendre les histoires fondamentales", "Développer la confiance", "Créer des souvenirs positifs"],
    teachings: ["La création", "L'arche de Noé", "David et Goliath", "Jésus aime les enfants", "Noël"],
    image: "/images/sunday-school/petits-agneaux.jpg",
    color: "#FF6B6B",
    teacher: { name: "Sœur Joséphine Mbuyi", role: "Monitrice principale", avatar: "/images/teachers/josephine.jpg", bio: "10 ans d'expérience dans l'enseignement préscolaire." },
  },
  {
    id: "aines",
    name: "Classe des Aînés",
    ageRange: "6 à 7 ans",
    description: "Une aventure passionnante à travers la Bible ! Études bibliques dynamiques, jeux d'équipe et projets créatifs.",
    activities: ["Études bibliques interactives", "Quiz bibliques", "Ateliers de théâtre", "Projets artistiques", "Mémorisation de versets"],
    objectives: ["Comprendre les grands récits bibliques", "Mémoriser des versets clés", "Développer des valeurs chrétiennes", "Apprendre à prier"],
    teachings: ["Les héros de la foi", "Les paraboles de Jésus", "Les fruits de l'Esprit", "Les 10 commandements", "La vie de Jésus"],
    image: "/images/sunday-school/explorateurs.jpg",
    color: "#FF6B6B",
    teacher: { name: "Frère Patrick Lukusa", role: "Moniteur principal", avatar: "/images/teachers/patrick.jpg", bio: "Passionné d'éducation et de jeunesse." },
  },
  {
    id: "junior",
    name: "Classe des Juniors",
    ageRange: "8 à 9 ans",
    description: "Un espace de croissance pour les ados, équipés pour affronter les défis de leur génération avec une foi solide.",
    activities: ["Études approfondies", "Débats et discussions", "Mentorat individuel", "Projets communautaires", "Camps de jeunesse"],
    objectives: ["Développer une foi personnelle", "Défendre sa foi", "Se préparer à la vie adulte", "Découvrir ses dons spirituels"],
    teachings: ["Apologétique", "Identité en Christ", "Gestion des émotions", "Leadership biblique", "Vision de vie"],
    image: "/images/sunday-school/flambeaux.jpg",
    color: "#FF6B6B",
    teacher: { name: "Sœur Esther Ngalula", role: "Monitrice principale", avatar: "/images/teachers/esther.jpg", bio: "Don unique pour connecter avec les adolescents." },
  },
  {
    id: "cadets",
    name: "Classe des Cadets",
    ageRange: "10 à 13 ans",
    description: "Un espace de croissance pour les ados, équipés pour affronter les défis de leur génération avec une foi solide.",
    activities: ["Études approfondies", "Débats et discussions", "Mentorat individuel", "Projets communautaires", "Camps de jeunesse"],
    objectives: ["Développer une foi personnelle", "Défendre sa foi", "Se préparer à la vie adulte", "Découvrir ses dons spirituels"],
    teachings: ["Apologétique", "Identité en Christ", "Gestion des émotions", "Leadership biblique", "Vision de vie"],
    image: "/images/sunday-school/flambeaux.jpg",
    color: "#FF6B6B",
    teacher: { name: "Sœur Esther Ngalula", role: "Monitrice principale", avatar: "/images/teachers/esther.jpg", bio: "Don unique pour connecter avec les adolescents." },
  },
  {
    id: "ados",
    name: "Classe des Ados",
    ageRange: "14 à 18 ans",
    description: "Un espace de croissance pour les ados, équipés pour affronter les défis de leur génération avec une foi solide.",
    activities: ["Études approfondies", "Débats et discussions", "Mentorat individuel", "Projets communautaires", "Camps de jeunesse"],
    objectives: ["Développer une foi personnelle", "Défendre sa foi", "Se préparer à la vie adulte", "Découvrir ses dons spirituels"],
    teachings: ["Apologétique", "Identité en Christ", "Gestion des émotions", "Leadership biblique", "Vision de vie"],
    image: "/images/sunday-school/flambeaux.jpg",
    color: "#FF6B6B",
    teacher: { name: "Sœur Esther Ngalula", role: "Monitrice principale", avatar: "/images/teachers/esther.jpg", bio: "Don unique pour connecter avec les adolescents." },
  },
];
