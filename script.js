const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

if (hamMenu && offScreenMenu) {
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });
}

const projectCards = document.querySelectorAll(".projet");

if (window.gsap && window.ScrollTrigger && projectCards.length > 0) {
  gsap.registerPlugin(ScrollTrigger);

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    projectCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          filter: "blur(10px)"
        },
        {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          delay: index * 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play reverse play reverse"
          }
        }
      );
    });
  }
}

const translations = {
          en: {
            categories: ["Graphic Design", "3D Modeling", "Video Production"],
            projectTypes: ["Video", "Design", "Design", "Design", "3D", "Video", "Design", "Design"],
            about: "About >>",
            menu: ["home", "contact", "contact"]
          },
          fr: {
            categories: ["Design graphique", "Modélisation 3D", "Production vidéo"],
            projectTypes: ["Vidéo", "Design", "Design", "Design", "3D", "Vidéo", "Design", "Design"],
            about: "À propos >>",
            menu: ["accueil", "contact", "contact"]
          }
        };

        const projectTranslations = {
          "antrum.html": {
            title: ["Antrum", "Antrum"],
            descriptions: [
              [
                "Antrum is a video project created as a team with Felippe Sousa and Pablo Pereira as part of the Video Production course. We had to create a short film from scratch.",
                "Antrum est un projet vidéo réalisé en équipe avec Felippe Sousa et Pablo Pereira dans le cadre du cours de production vidéo. Nous devions créer un court métrage à partir de zéro."
              ],
              [
                "The idea of creating a time loop in the video was relevant to our theme and to the efficiency of our production.",
                "L'idée de créer une boucle temporelle dans la vidéo correspondait à notre thème et à l'efficacité de notre production."
              ]
            ]
          },
          "cafesat.html": {
            title: ["Cafe Sat", "Cafe Sat"],
            descriptions: [[
              "Cafe Sat is a project I made in a design class. Using Figma, we had to make a fake Instagram post design / ad that could be on a webpage. I decided on making a poster for the S.A.T. Friday nights at their cafe where they host DJs every Friday.",
              "Cafe Sat est un projet réalisé dans un cours de design. À l'aide de Figma, nous devions créer une fausse publicité ou publication Instagram pour une page web. J'ai choisi de créer une affiche pour les soirées du vendredi au café du S.A.T., où des DJ se produisent chaque semaine."
            ]]
          },
          "gstring.html": {
            title: ["Gstring", "Gstring"],
            descriptions: [[
              "Gstring is a project I made while learning patterns in Photoshop. Gstring is the name of a Montreal band, so the point was to imagine something from scratch that they could use as a poster promo for a show. It was my first time trying to play with an effect on a font.",
              "Gstring est un projet réalisé pendant mon apprentissage des motifs dans Photoshop. Gstring est le nom d'un groupe montréalais; l'objectif était donc d'imaginer une affiche promotionnelle pour un spectacle. C'était la première fois que j'expérimentais un effet sur une police."
            ], ["", ""]]
          },
          "generique.html": {
            title: ["Générique", "Générique"],
            descriptions: [[
              "Generique is a project I made with <a class=\"collaboratorLink\" href=\"https://sutol92.github.io/portfolio-stanley-olivier-vital/\" target=\"_blank\" rel=\"noopener noreferrer\">Stanley Olivier Vital</a> in a Photoshop class. We had to create images inspired by a film's opening credits.",
              "Générique est un projet réalisé avec <a class=\"collaboratorLink\" href=\"https://sutol92.github.io/portfolio-stanley-olivier-vital/\" target=\"_blank\" rel=\"noopener noreferrer\">Stanley Olivier Vital</a> dans un cours de Photoshop."
            ], [
              "We had to create images that looked as if they were screenshots from a film’s credits scene. We decided to make a colorful but simple project with stairs at its main focus. The stairs represent the growth and progress of a fictional character.",
              "Nous devions créer des images qui semblaient être des captures d'écran d'une scène de générique de film. Nous avons décidé de réaliser un projet coloré, mais simple, dont l'élément principal serait un escalier. L'escalier représente la croissance et la progression d'un personnage fictif."
            ]]
          },
          "logotim.html": {
            title: ["Logo Tim", "Logo Tim"],
            descriptions: [[
              "The “Tim” logo project was an individual project created with Figma as part of the Graphic Design course in the Multimedia Integration program at Collège Montmorency. The challenge was to start and finish the project in a single three-hour class. The image presented here is the result of that day. I have since reworked the project to create a more up-to-date and polished version.",
              "Le projet de logo « Tim » a été réalisé individuellement avec Figma dans le cadre du cours de design graphique du programme d'intégration multimédia au Collège Montmorency. Le défi consistait à commencer et à terminer le projet pendant un seul cours de trois heures. L'image présentée ici est le résultat de cette journée. J'ai depuis retravaillé le projet pour créer une version plus actuelle et soignée."
            ], [
              "For this project, we still had to create an inspiration moodboard in order to set a concrete and achievable goal.",
              "Pour ce projet, nous devions également créer un tableau d'inspiration afin de définir un objectif concret et réalisable."
            ]]
          },
          "poisshomme.html": {
            title: ["Poisshomme", "Poisshomme"],
            descriptions: [[
              "Poisshomme is a project I made with a team in a video class. We had to create a short film from scratch. The video was filmed partly at the school and partly in a pet store's fish aisle. Edited in DaVinci Resolve.",
              "Poisshomme est un projet réalisé en équipe dans un cours de vidéo. Nous devions créer un court métrage à partir de zéro. La vidéo a été tournée en partie à l'école et en partie dans le rayon des poissons d'une animalerie. Montage réalisé dans DaVinci Resolve."
            ]]
          },
          "portraits.html": {
            title: ["Portraits", "Portraits"],
            descriptions: [[
              "Portraits is a project I made in a Photoshop class. We were taught the basics of Photoshop and had to create portraits from scratch.",
              "Portraits est un projet réalisé dans un cours de Photoshop. Nous avons appris les bases de Photoshop et devions créer des portraits à partir de zéro."
            ]]
          },
          "prevost.html": {
            title: ["La maison à Prevost", "La maison à Prevost"],
            descriptions: [[
              "La maison à Prevost is a project I made with a team in a video class. We had to create a short film from scratch. The video was filmed in a house in the small town of Prevost and in a parking lot near the school. To get the right lighting, we filmed most of the footage at night, which proved to be a real fight against drowsiness. The final cut was edited in DaVinci Resolve.",
              "La maison à Prevost est un projet réalisé en équipe dans un cours de vidéo. Nous devions créer un court métrage à partir de zéro. La vidéo a été tournée dans une maison de la petite ville de Prevost et dans un stationnement près de l'école. Pour obtenir le bon éclairage, nous avons tourné la plupart des scènes de nuit, ce qui a été une vraie lutte contre la somnolence. Le montage final a été réalisé dans DaVinci Resolve."
            ]]
          },
          "quietroom.html": {
            title: ["Quiet Room", "Quiet Room"],
            descriptions: [[
              "A Quiet Room is an individual personal project created to bring together, within a single project, several models made by hand using Blender. Some textures were found online, while others were created from photographs I took. I then edited these photographs in Photoshop to give them the desired aesthetic.",
              "A Quiet Room est un projet personnel réalisé individuellement pour rassembler, au sein d'un même projet, plusieurs modèles créés à la main avec Blender. Certaines textures ont été trouvées en ligne, tandis que d'autres ont été créées à partir de photographies que j'ai prises. J'ai ensuite retouché ces photographies dans Photoshop pour leur donner l'esthétique souhaitée."
            ], [
              "This project was completed over a period of two weeks in my spare time. I learned how to use new Blender tools to apply textures, as well as how to work with very basic lighting.",
              "Ce projet a été réalisé sur une période de deux semaines pendant mon temps libre. J'ai appris à utiliser de nouveaux outils de Blender pour appliquer des textures, ainsi qu'à travailler avec un éclairage très simple."
            ]]
          }
        };

        const aboutTranslations = [
          [
            "I am completing a Multimedia Integration program. My long-term goal is to have contributed to, or even led, a team on a flagship project in the field. I am driven by a constant desire to improve, demystify new concepts, and apply them to stand out. I am a committed and resourceful person who is proficient with tools such as Blender, Figma, and DaVinci Resolve, and who always looks for that extra effort to achieve a professional and polished result. I have developed solid experience with this software through my personal projects and passion for the field. In addition, I have skills and experience in welding, having obtained my vocational diploma (DEP) in welding-assembly at École des métiers spécialisés, a field in which I worked for three years.",
            "Je suis finissant dans la Technique d’intégration Multimédia. Mon objectif à long terme est d'avoir contribué ou même d'avoir dirigé une équipe sur un projet phare du milieu. Je suis animé par un désir constant de progresser, de démystifier de nouveaux concepts et de les appliquer pour me démarquer. Je suis une personne engagée et débrouillarde, qui maîtrise des outils comme Blender, Figma et DaVinci Resolve, et qui cherche toujours à faire ce petit effort supplémentaire pour atteindre un résultat professionnel et soigné. J'ai développé une solide expérience sur ces logiciels grâce à mes projets personnels et à ma passion pour le domaine. Par ailleurs, je possède également des compétences et de l'expérience en soudure, ayant obtenu mon diplôme d'études professionnelles (DEP) en soudage-montage à l'École des métiers spécialisés, un domaine dans lequel j'ai évolué pendant trois ans."
          ]
        ];

        const pageName = window.location.pathname.split("/").pop().toLowerCase() || "index.html";
        const originalDescriptions = Array.from(document.querySelectorAll(".description"))
          .map((element) => element.textContent);

        function applyLanguage(language) {
          const selectedLanguage = language === "fr" ? "fr" : "en";
          const text = translations[selectedLanguage];
          const page = projectTranslations[pageName];

          document.documentElement.lang = selectedLanguage;

          document.querySelectorAll(".fields .fieldLi").forEach((element, index) => {
            if (text.categories[index]) {
              element.textContent = text.categories[index];
            }
          });

          document.querySelectorAll(".projetType").forEach((element, index) => {
            if (text.projectTypes[index]) {
              element.textContent = text.projectTypes[index];
            }
          });

          document.querySelectorAll(".aboutLink, .aboutFooterLink").forEach((element) => {
            element.textContent = text.about;
          });

          document.querySelectorAll(".off-screen-menu a").forEach((element, index) => {
            if (text.menu[index]) {
              element.textContent = text.menu[index];
            }
          });

          const title = document.querySelector(".projTitre");
          if (title && page) {
            title.textContent = page.title[selectedLanguage === "fr" ? 1 : 0];
          } else if (title && pageName === "about.html") {
            title.textContent = selectedLanguage === "fr" ? "À propos" : "About";
          }

          if (page) {
            document.querySelectorAll(".description").forEach((element, index) => {
              const description = page.descriptions[index];
              if (description) {
                if (pageName === "generique.html") {
                  element.innerHTML = description[selectedLanguage === "fr" ? 1 : 0];
                } else {
                  element.textContent = selectedLanguage === "fr"
                    ? description[1]
                    : originalDescriptions[index];
                }
              }
            });
          } else if (pageName === "about.html") {
            document.querySelectorAll(".description").forEach((element, index) => {
              const description = aboutTranslations[index];
              if (description) {
                element.textContent = description[selectedLanguage === "fr" ? 1 : 0];
              }
            });
          }

          document.querySelectorAll("[data-language]").forEach((button) => {
            button.classList.toggle("active", button.dataset.language === selectedLanguage);
          });
        }

        document.querySelectorAll("[data-language]").forEach((button) => {
          button.addEventListener("click", () => {
            localStorage.setItem("siteLanguage", button.dataset.language);
            applyLanguage(button.dataset.language);
          });
        });

applyLanguage(localStorage.getItem("siteLanguage") || "en");