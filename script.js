let chapters = {
  debut: {
    titre: "intro",
    description:
      "Vous, une elfe, voulez vous venger du roi du royaume voisin pour avoir détruit votre village. Assoiffée de vegence, vous arrivez au royaume du roi. En vous promenant dans le gros village du royaume, vous voyez une taverne et trouvez que vous pourriez avoir des informations à l'intérieur",
    image: "./Assets/images/chapitre1(debut).jpg",
    boutons: [
      { titre: "Entrer à l'intérieur", destination: "entrer" },
      { titre: "Ne pas entrer à l'intérieur", destination: "bandits" },
    ],
  },

  bandits: {
    titre: "Question de territoire",
    description:
      "En prenant la décision de ne pas entrer, vous arrivez dans une ruelle, qui est occupée par des bandits. Vous vous faites tuer par un des bandits",
    image: "./Assets/images/chapitre2(bandits).jpg",
    boutons: [{ titre: "recomencer", destination: "debut" }],
  },

  entrer: {
    titre: "La taverne",
    description:
      "Vous décidez d'entrer à l'intérieur de la taverne. L'intérieur de la taverne est grand: le coté droite contient une vingtaines de tables qui tous occupées et à la gauche, il y a un bar avec un comptoir pouvant accueillir une trentaine de personnes. En avancant tranquillement dans la taverne, vous voyez une paire de dagues trainant dans un coin ",
    image: "./Assets/images/chapitre3(entrer).png",
    boutons: [
      { titre: "Les prendre", destination: "comptoir" },
      { titre: "Ne pas les prendre", destination: "comptoir" },
    ],
  },

  comptoir: {
    titre: "Au comptoir",
    description:
      "Vous décidez d'aller vers le comptoir du bar. Au comptoir, vous voyez qu'un soldat, au regard intimidant, est assit à coté de vous. Vous hesitez entre l'intimider pour montrer votre dominance et avoir de l'information ou lui parler poliment pour avoir de l'information",
    image: "./Assets/images/chapitre4(comptoir).jpg",
    boutons: [
      { titre: "Lui parler poliment", destination: "informations" },
      { titre: "L'intimider", destination: "intimidation" },
    ],
  },

  intimidation: {
    titre: "Trop de surestimation",
    description:
      "Prenant vos insultes personnel, il décide de vous étrangler jusqu'à votre mort",
    image: "./Assets/images/chapitre5(intimidation).png",
    boutons: [{ titre: "recomencer", destination: "debut" }],
  },

  informations: {
    titre: "L'information du soldat",
    description:
      "Il vous répond calmement que celui-ci sait seulement que le roi est présentement dans le chateau. Vous décidez donc d'aller au château. Au château, vous entendez que le roi est dans sa chambre",
    image: "./Assets/images/chapitre6(informations).png",
    boutons: [
      { titre: "Aller vers la chambre", destination: "chambre" },
      { titre: "Explorer le château", destination: "soldat" },
    ],
  },

  soldat: {
    titre: "Exploration du château",
    description:
      "En décidant de vous d'explorer les intérieurs du château avant d'aller dans la chambre du roi, vous croisez in soldat qui vous pose beaucoup de questions. Cependant, vous hésitez à plusieurs de ses questions. Par panique vous essayer de vous enfuir, mais il vous rattrappe et vous emprisonne.",
    image: "./Assets/images/chapitre7(soldat).jpg",
    boutons: [{ titre: "recomencer", destination: "debut" }],
  },

  chambre: {
    titre: "Arrivé à la chambre",
    description:
      "Arrivée à la chambre du roi, vous décidez d'entrer à l'intérieur. Le roi est bien dans sa chambre et vous regarde d'une maniere arrogant et machiavélique, comme s'il savait que vous vienderiez. Vous pouvez enfin acomplir votre mission. Avez vous les dagues ?",
    image: "./Assets/images/chapitre8(chambre).jpg",
    boutons: [
      { titre: "Oui", destination: "reussite" },
      { titre: "Non", destination: "echec" },
    ],
  },

  echec: {
    titre: "L'enprisonnement",
    description:
      "N'ayant pas d'arme pour le tuer, le roi appelle ses gardes et vous emprisonne pour le reste de votre vie",
    image: "./Assets/images/chapitre9(echec).png",
    boutons: [{ titre: "recomencer", destination: "debut" }],
  },

  reussite: {
    titre: "L'heure de la vengence",
    description:
      "L'heure de la vengence a sonné, vous utilisez vos deux dagues pour lui poignarder la poitrine. Après, vous vous enfuyez, satisfaite de votre vengence",
    image: "./Assets/images/chapitre10(reussite).png",
    boutons: [{ titre: "recomencer", destination: "debut" }],
  },
};

let titre = document.querySelector(".titre");
let description = document.querySelector(".paragraphe");

let goTochapter = function (chapitre) {
  if (chapters[chapitre]) {
    titre.innerHTML = chapters[chapitre].titre;
    /*console.log(chapters[chapitre].titre);*/
    description.innerHTML = chapters[chapitre].description;
    /*console.log(chapters[chapitre].description);*/

    console.log("options: ");
    const boutonenlever = document.querySelector(".option");
    boutonenlever.parentNode.removeChild(boutonenlever);

    for (let i = 0; i < chapters[chapitre].boutons.length; i++) {
      creerbouton = s;
      console.log(
        `${chapters[chapitre].boutons[i].titre} => goTochapter("${chapters[chapitre].boutons[i].destination}")`
      );
    }
    /*console.log(chapters[chapitre].boutons[0]);
    console.log(chapters[chapitre].boutons[1]);*/
  } else {
    console.log("mauvais cle de chapitre chapitre");
  }
};

goTochapter("debut");

/*window.addEventListener("load", function () {
  console.log(chapters.debut.titre);
  console.log(chapters.debut.description);
  console.log(chapters.debut.boutons[0]);
  console.log(chapters.debut.boutons[1]);
});*/
