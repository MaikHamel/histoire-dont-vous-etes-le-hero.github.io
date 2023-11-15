// chapitres

const chapters = {
  debut: {
    titre: "intro",
    description:
      "Vous, un elfe, voulez vous venger du roi du royaume voisin pour avoir détruit votre village. Assoiffé de vegence, vous arrivez au royaume du roi. En vous promenant dans le gros village du royaume, vous voyez une taverne et trouvez que vous pourriez avoir des informations à l'intérieur",
    image: "./assets/images/chapitre1(debut).jpg",
    musique: "assets/musique/the-britons-127687.mp3",
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
    sons: "./assets/son/epee_mort1.mp3",
    musique: "assets/musique/forest-rain-atmo-fantasy-14435.mp3",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },

  entrer: {
    titre: "La taverne",
    description:
      "Vous décidez d'entrer à l'intérieur de la taverne. L'intérieur de la taverne est grand: le coté droite contient une vingtaines de tables qui tous occupées et à la gauche, il y a un bar avec un comptoir pouvant accueillir une trentaine de personnes. En avancant tranquillement dans la taverne, vous voyez une paire de dagues trainant dans un coin ",
    image: "./assets/images/chapitre3(entrer).png",
    sons: "./assets/son/porte.mp3",
    musique: "assets/musique/musik-bauern-142722.mp3",
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
    sons: "./assets/son/epee_dague.mp3",
    musique: "",
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
    sons: "./assets/son/epee_dague.mp3",
    musique: "",
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
    sons: "./assets/son/punch_soldat.mp3",
    musique: "assets/musique/mytic-hotel-20105.mp3",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },

  informations: {
    titre: "L'information du soldat",
    description:
      "Il vous répond calmement que celui-ci sait seulement que le roi est présentement dans le chateau. Vous décidez donc d'aller au château. Au château, vous entendez que le roi est dans sa chambre",
    image: "./assets/images/chapitre6(informations).png",
    sons: "./assets/son/table-slam-102489.mp3",
    musique: "./assets/musique/chateau.mp3",
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
    sons: "./assets/son/mort_explorer.mp3",
    musique: "assets/musique/celestial-equator-ambient-109214.mp3",
    video: "./assets/video/chapitre7(soldat-video).mp4",
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
    sons: "./assets/son/metal-door-slam-172172.mp3",
    musique: "assets/musique/mort_finale.mp3",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },

  reussite: {
    titre: "L'heure de la vengence",
    description:
      "L'heure de la vengence a sonné, vous utilisez vos deux dagues pour lui poignarder la poitrine. Après, vous vous enfuyez, satisfait de votre vengence",
    image: "./assets/images/chapitre10(reussite).png",
    sons: "./assets/son/short-choir-6116.mp3",
    musique: "assets/musique/wonderland-124601.mp3",
    video: "./assets/video/chapitre10(reussite-video).mp4",
    boutons: [{ titre: "recommencer", destination: "debut" }],
  },
};

// placemnets des informations dans javascript
let titre = document.querySelector(".titre");
let description = document.querySelector(".paragraphe");
let images = document.querySelector(".image");
let jeu = document.querySelector(".jeu");
let video = document.querySelector(".video");
const audio = document.createElement("audio");
const ambiance = document.createElement("audio");
const boutonDebut = document.getElementById("boutonDebut");
let barre = document.querySelectorAll(".progression");

function goToChapter(chapitre) {
  if (chapters[chapitre]) {
    titre.innerHTML = chapters[chapitre].titre;

    description.innerHTML = chapters[chapitre].description;

    images.src = chapters[chapitre].image;

    // local storage pour les chapitre
    localStorage.setItem("endroit", chapitre);

    //barre progression

    if (chapters[chapitre] == chapters.debut) {
      barre[0].classList.add("couleur");
    } else {
      barre[0].classList.remove("couleur");
    }

    if (
      chapters[chapitre] == chapters.entrer ||
      chapters[chapitre] == chapters.bandits
    ) {
      barre[0].classList.add("couleur");
      barre[1].classList.add("couleur");
    } else {
      barre[1].classList.remove("couleur");
    }

    if (
      chapters[chapitre] == chapters.arme ||
      chapters[chapitre] == chapters.pasarme
    ) {
      barre[0].classList.add("couleur");
      barre[1].classList.add("couleur");
      barre[2].classList.add("couleur");
    } else {
      barre[2].classList.remove("couleur");
    }

    if (
      chapters[chapitre] == chapters.informations ||
      chapters[chapitre] == chapters.intimidation
    ) {
      barre[0].classList.add("couleur");
      barre[1].classList.add("couleur");
      barre[2].classList.add("couleur");
      barre[3].classList.add("couleur");
    } else {
      barre[3].classList.remove("couleur");
    }

    if (
      chapters[chapitre] == chapters.chambre ||
      chapters[chapitre] == chapters.soldat
    ) {
      barre[0].classList.add("couleur");
      barre[1].classList.add("couleur");
      barre[2].classList.add("couleur");
      barre[3].classList.add("couleur");
      barre[4].classList.add("couleur");
    } else {
      barre[4].classList.remove("couleur");
    }
    if (
      chapters[chapitre] == chapters.reussite ||
      chapters[chapitre] == chapters.echec
    ) {
      barre[0].classList.add("couleur");
      barre[1].classList.add("couleur");
      barre[2].classList.add("couleur");
      barre[3].classList.add("couleur");
      barre[4].classList.add("couleur");
      barre[5].classList.add("couleur");
    } else {
      barre[5].classList.remove("couleur");
    }

    // ajout musique
    if (chapters[chapitre].musique) {
      ambiance.src = chapters[chapitre].musique;
      ambiance.play();
      ambiance.loop = true;
    }

    // musique qui continue

    // ajout sons
    if (chapters[chapitre].sons) {
      audio.src = chapters[chapitre].sons;
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }

    // ajout des video
    /*
    let video = document.createElement("video");
    video.setAttribute("class", "video");
    jeu.appendChild(video);
    */

    if (chapters[chapitre].video) {
      /*
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      */

      video.style.display = "flex";
      images.style.order = 1;
      images.style.display = "none";
      /*
      jeu.removeChild(images);
      */
      video.src = chapters[chapitre].video;
    } else {
      /*
      jeu.removeChild(video);
      */
      video.style.display = "none";
      images.style.order = 0;
      images.style.display = "flex";
    }

    //twist
    let changement = "";
    let twist = false;
    if (chapters[chapitre] == chapters.arme) {
      twist = true;
      if (twist == true) {
        chapters.chambre = {
          titre: "Arrivé à la chambre",
          description:
            "Arrivée à la chambre du roi, vous décidez d'entrer à l'intérieur. Le roi est bien dans sa chambre et vous regarde d'une maniere arrogant et machiavélique, comme s'il savait que vous vienderiez. Vous pouvez enfin acomplir votre mission. Avez vous les dagues ?",
          image: "./assets/images/chapitre8(chambre).jpg",
          sons: "./assets/son/clothes-drop-2-40202.mp3",
          musique: "assets/musique/silent-worlds-ambient-soundscape-110183.mp3",
          boutons: [{ titre: "Oui", destination: "reussite" }],
        };
        changement = chapters[chapitre] = chapters.arme;
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
          sons: "./assets/son/clothes-drop-2-40202.mp3",
          musique: "assets/musique/silent-worlds-ambient-soundscape-110183.mp3",
          boutons: [{ titre: "Non", destination: "echec" }],
        };
        changement = chapters[chapitre] = chapters.pasarme;
      }
    }
    // localstorage pour la twist
    localStorage.setItem("twist", changement);

    // retrait des boutons pour créer des boutons a partir de javascript
    const containerbouton = document.querySelector(".option");

    while (containerbouton.firstChild) {
      containerbouton.removeChild(containerbouton.firstChild);
    }

    for (let i = 0; i < chapters[chapitre].boutons.length; i++) {
      creerbouton = document.createElement("button");
      creerbouton.textContent = chapters[chapitre].boutons[i].titre;
      creerbouton.addEventListener("click", () => {
        /*
        let audio = document.querySelector("audio");
        audio.currentTime = 0;
        audio.play();

        setTimeout(() => {
          audio.pause();
        }, 3000);
        */

        goToChapter(chapters[chapitre].boutons[i].destination);
      });
      containerbouton.appendChild(creerbouton);
    }
  } else {
    console.log("mauvais cle de chapitre");
  }
}
// local storage

if (localStorage == undefined) {
  goToChapter("debut");
} else {
  let endroit = localStorage.getItem("endroit", "twist");
  goToChapter(`${endroit}`);
}

//bouton renitialiser

boutonDebut.addEventListener("click", function () {
  localStorage.removeItem("endroit", "twist");
  goToChapter("debut");
});
