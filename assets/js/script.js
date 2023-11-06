// chapitres
const chapters = {
  debut: {
    titre: "intro",
    description:
      "Vous, une elfe, voulez vous venger du roi du royaume voisin pour avoir détruit votre village. Assoiffée de vegence, vous arrivez au royaume du roi. En vous promenant dans le gros village du royaume, vous voyez une taverne et trouvez que vous pourriez avoir des informations à l'intérieur",
    image: "./assets/images/chapitre1(debut).jpg",
    boutons: [
      { titre: "Entrer à l'intérieur", destination: "entrer" },
      { titre: "Ne pas entrer à l'intérieur", destination: "bandits" },
    ],
  },

  bandits: {
    titre: "Question de territoire",
    description:
      "En prenant la décision de ne pas entrer, vous arrivez dans une ruelle, qui est occupée par des bandits. Vous vous faites tuer par un des bandits",
    image: "./assets/images/chapitre2(bandits).jpg",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },

  entrer: {
    titre: "La taverne",
    description:
      "Vous décidez d'entrer à l'intérieur de la taverne. L'intérieur de la taverne est grand: le coté droite contient une vingtaines de tables qui tous occupées et à la gauche, il y a un bar avec un comptoir pouvant accueillir une trentaine de personnes. En avancant tranquillement dans la taverne, vous voyez une paire de dagues trainant dans un coin ",
    image: "./assets/images/chapitre3(entrer).png",
    boutons: [
      { titre: "Les prendre", destination: "arme" },
      { titre: "Ne pas les prendre", destination: "pasarme" },
    ],
  },
  arme: {
    titre: "Au comptoir",
    description:
      "Vous décidez d'aller vers le comptoir du bar. Au comptoir, vous voyez qu'un soldat, au regard intimidant, est assit à coté de vous. Vous hesitez entre l'intimider pour montrer votre dominance et avoir de l'information ou lui parler poliment pour avoir de l'information",
    image: "./assets/images/chapitre4(comptoir).jpg",
    boutons: [
      { titre: "Lui parler poliment", destination: "informations" },
      { titre: "L'intimider", destination: "intimidation" },
    ],
  },

  pasarme: {
    titre: "Au comptoir",
    description:
      "Vous décidez d'aller vers le comptoir du bar. Au comptoir, vous voyez qu'un soldat, au regard intimidant, est assit à coté de vous. Vous hesitez entre l'intimider pour montrer votre dominance et avoir de l'information ou lui parler poliment pour avoir de l'information",
    image: "./assets/images/chapitre4(comptoir).jpg",
    boutons: [
      { titre: "Lui parler poliment", destination: "informations" },
      { titre: "L'intimider", destination: "intimidation" },
    ],
  },

  intimidation: {
    titre: "Trop de surestimation",
    description:
      "Prenant vos insultes personnel, il décide de vous étrangler jusqu'à votre mort",
    image: "./assets/images/chapitre5(intimidation).png",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },

  informations: {
    titre: "L'information du soldat",
    description:
      "Il vous répond calmement que celui-ci sait seulement que le roi est présentement dans le chateau. Vous décidez donc d'aller au château. Au château, vous entendez que le roi est dans sa chambre",
    image: "./assets/images/chapitre6(informations).png",
    boutons: [
      { titre: "Aller vers la chambre", destination: "chambre" },
      { titre: "Explorer le château", destination: "soldat" },
    ],
  },

  soldat: {
    titre: "Exploration du château",
    description:
      "En décidant de vous d'explorer les intérieurs du château avant d'aller dans la chambre du roi, vous croisez in soldat qui vous pose beaucoup de questions. Cependant, vous hésitez à plusieurs de ses questions. Par panique vous essayer de vous enfuir, mais il vous rattrappe et vous emprisonne.",
    image: "./assets/images/chapitre7(soldat).jpg",
    video: "chapitre7(soldat-video)",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },

  chambre: {
    titre: "Arrivé à la chambre",
    description:
      "Arrivée à la chambre du roi, vous décidez d'entrer à l'intérieur. Le roi est bien dans sa chambre et vous regarde d'une maniere arrogant et machiavélique, comme s'il savait que vous vienderiez. Vous pouvez enfin acomplir votre mission. Avez vous les dagues ?",
    image: "./assets/images/chapitre8(chambre).jpg",
    boutons: [
      { titre: "Oui", destination: "reussite" },
      { titre: "Non", destination: "echec" },
    ],
  },

  echec: {
    titre: "L'enprisonnement",
    description:
      "N'ayant pas d'arme pour le tuer, le roi appelle ses gardes et vous emprisonne pour le reste de votre vie",
    image: "./assets/images/chapitre9(echec).png",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },

  reussite: {
    titre: "L'heure de la vengence",
    description:
      "L'heure de la vengence a sonné, vous utilisez vos deux dagues pour lui poignarder la poitrine. Après, vous vous enfuyez, satisfaite de votre vengence",
    image: "./assets/images/chapitre10(reussite).png",
    video: "chapitre10(reussite-video)",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },
};

// placemnets des informations dans javascript
let titre = document.querySelector(".titre");
let description = document.querySelector(".paragraphe");
let images = document.querySelector(".image");
let jeu = document.querySelector(".jeu");
let video = document.querySelector(".video");

function goToChapter(chapitre) {
  if (chapters[chapitre]) {
    titre.innerHTML = chapters[chapitre].titre;

    description.innerHTML = chapters[chapitre].description;

    images.src = chapters[chapitre].image;

    // ajout des video

    if (chapters[chapitre].video) {
      video.style.display = "flex";
      images.style.order = 1;
      images.style.display = "none";
      if (chapters[chapitre] === chapters.soldat) {
        video.src = "./assets/video/chapitre7(soldat-video).mp4";
      }
      if (chapters[chapitre] === chapters.reussite) {
        video.src = "./assets/video/chapitre10(reussite-video).mp4";
      }
    } else {
      video.style.display = "none";
      images.style.order = 0;
      images.style.display = "flex";
    }

    //twist

    let twist = false;
    if (chapters[chapitre] == chapters.arme) {
      twist = true;
      if (twist == true) {
        chapters.chambre = {
          titre: "Arrivé à la chambre",
          description:
            "Arrivée à la chambre du roi, vous décidez d'entrer à l'intérieur. Le roi est bien dans sa chambre et vous regarde d'une maniere arrogant et machiavélique, comme s'il savait que vous vienderiez. Vous pouvez enfin acomplir votre mission. Avez vous les dagues ?",
          image: "./assets/images/chapitre8(chambre).jpg",
          boutons: [{ titre: "Oui", destination: "reussite" }],
        };
      }
    }
    if (chapters[chapitre] == chapters.pasarme) {
      twist = false;
      if (twist == false) {
        chapters.chambre = {
          titre: "Arrivé à la chambre",
          description:
            "Arrivée à la chambre du roi, vous décidez d'entrer à l'intérieur. Le roi est bien dans sa chambre et vous regarde d'une maniere arrogant et machiavélique, comme s'il savait que vous vienderiez. Vous pouvez enfin acomplir votre mission. Avez vous les dagues ?",
          image: "./assets/images/chapitre8(chambre).jpg",

          boutons: [{ titre: "Non", destination: "echec" }],
        };
      }
    }

    // retrait des boutons pour créer des boutons a partir de javascript
    const containerbouton = document.querySelector(".option");

    while (containerbouton.firstChild) {
      containerbouton.removeChild(containerbouton.firstChild);
    }

    for (let i = 0; i < chapters[chapitre].boutons.length; i++) {
      creerbouton = document.createElement("button");
      creerbouton.textContent = chapters[chapitre].boutons[i].titre;
      creerbouton.addEventListener("click", () => {
        goToChapter(chapters[chapitre].boutons[i].destination);
      });
      containerbouton.appendChild(creerbouton);
    }
  } else {
    console.log("mauvais cle de chapitre");
  }
}

goToChapter("debut");
