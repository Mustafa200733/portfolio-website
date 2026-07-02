import { createElement } from "../utils/dom.js";

const skills = [
  {
    name: "HTML",
    description:
      "Ik ben goed in HTML en kan nette pagina's bouwen die logisch zijn opgebouwd. Ik let op structuur en toegankelijkheid zodat content duidelijk is.",
  },
  {
    name: "CSS",
    description:
      "Met CSS maak ik designs visueel aantrekkelijk en responsief, zodat de website er op elk scherm goed uitziet.",
  },
  {
    name: "SQL",
    description:
      "Ik kan data structureren en ophalen uit databases, wat handig is voor projecten met gebruikersgegevens en opslag.",
  },
  {
    name: "JavaScript",
    description:
      "JavaScript gebruik ik om interactieve webpagina's te bouwen met logica, animaties en gebruikersinteractie.",
  },
  {
    name: "Python",
    description:
      "Python gebruik ik voor kleine scripts, data-analyse en om concepts snel te testen tijdens ontwikkeling.",
  },
  {
    name: "PHP",
    description:
      "Met PHP kan ik server-side functionaliteit bouwen voor formulieren en eenvoudige backend-logica.",
  },
  {
    name: "Figma",
    description:
      "Figma gebruik ik om layouts en prototypes te ontwerpen voordat ik ga bouwen.",
  },
  {
    name: "React",
    description:
      "React helpt mij om componenten te bouwen die herbruikbaar zijn en gemakkelijk te onderhouden.",
  },
];

const contactLinks = [
  { text: "GitHub profiel", href: "https://github.com/Mustafa200733", external: true },
  { text: "LinkedIn profiel", href: "https://www.linkedin.com/in/mustafa-okur-aab40438a/", external: true },
  { text: "Download mijn cv", href: "./Mustafa_Okur_FlowCV_Resume_2026-07-02.pdf", download: true },
];

export default function createAboutExtras() {
  const skillTitle = createElement("h3", {
    text: skills[0].name,
  });

  const skillText = createElement("p", {
    text: skills[0].description,
  });

  const skillInfo = createElement("div", {
    className: "skill-info",
    children: [skillTitle, skillText],
  });

  const skillTagElements = skills.map((skill, index) => {
    const button = createElement("button", {
      text: skill.name,
      className: `about-skill-tag${index === 0 ? " active" : ""}`,
      attrs: { type: "button" },
    });

    button.addEventListener("click", () => {
      skillTitle.textContent = skill.name;
      skillText.textContent = skill.description;
      skillTagElements.forEach((tag) => tag.classList.remove("active"));
      button.classList.add("active");
    });

    return button;
  });

  const skillsCard = createElement("article", {
    className: "about-panel",
    children: [
      createElement("h2", {
        text: "Mijn vaardigheden",
      }),
      createElement("div", {
        className: "skills-list",
        children: skillTagElements,
      }),
      skillInfo,
    ],
  });

  const contactItems = contactLinks.map((link) =>
    createElement("li", {
      children: [
        createElement("a", {
          text: link.text,
          className: "about-link",
          attrs: {
            href: link.href,
            target: link.external ? "_blank" : undefined,
            rel: link.external ? "noreferrer" : undefined,
            download: link.download ? "" : undefined,
          },
        }),
      ],
    })
  );

  const contactCard = createElement("article", {
    className: "about-panel",
    children: [
      createElement("h2", {
        text: "Contact en links",
      }),
      createElement("ul", {
        className: "about-contact-list",
        children: contactItems,
      }),
    ],
  });

  return createElement("section", {
    className: "about-panels",
    children: [skillsCard, contactCard],
  });
}
