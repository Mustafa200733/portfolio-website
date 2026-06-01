import { createElement } from "../utils/dom.js";

export default function createHome() {
  const section = createElement("section", {
    className: "hero",
  });

  const leftColumn = createElement("div", {
    className: "hero-left",
  });

  const label = createElement("span", {
    text: "SOFTWARE DEVELOPER IN OPLEIDING",
    className: "hero-label",
  });

  const heading = createElement("h1", {
    text: "Ik bouw digitale ideeën stap voor stap uit.",
    className: "hero-heading",
  });

  const description = createElement("p", {
    text: "Welkom op mijn portfolio. Hier laat ik zien hoe ik met HTML, CSS, JavaScript en React werk aan heldere interfaces en bruikbare projecten.",
    className: "hero-description",
  });

  const primaryButton = createElement("a", {
    text: "Bekijk mijn projecten",
    className: "button button-primary",
    attrs: { href: "#projects" },
  });

  const secondaryButton = createElement("a", {
    text: "Neem contact op",
    className: "button button-secondary",
    attrs: { href: "#contact" },
  });

  const buttonsContainer = createElement("div", {
    className: "hero-buttons",
    children: [primaryButton, secondaryButton],
  });

  const stat1 = createElement("div", {
    className: "stat-card",
    children: [
      createElement("div", { text: "3+", className: "stat-value" }),
      createElement("div", { text: "Portfolio projecten", className: "stat-label" }),
    ],
  });

  const stat2 = createElement("div", {
    className: "stat-card",
    children: [
      createElement("div", { text: "7", className: "stat-value" }),
      createElement("div", { text: "Technieken geoefend", className: "stat-label" }),
    ],
  });

  const statsContainer = createElement("div", {
    className: "hero-stats",
    children: [stat1, stat2],
  });

  leftColumn.appendChild(label);
  leftColumn.appendChild(heading);
  leftColumn.appendChild(description);
  leftColumn.appendChild(buttonsContainer);
  leftColumn.appendChild(statsContainer);

  // Right column
  const rightColumn = createElement("div", {
    className: "hero-right",
  });

  const imageCard = createElement("div", {
    className: "hero-image-card",
  });

  const cardMark = createElement("span", {
    text: "✎",
    className: "hero-card-mark",
  });

  const image = createElement("img", {
    className: "hero-image",
    attrs: { src: "./Mustafa.jpg", alt: "Mustafa aan het werk" },
  });

  imageCard.appendChild(cardMark);
  imageCard.appendChild(image);
  rightColumn.appendChild(imageCard);

  section.appendChild(leftColumn);
  section.appendChild(rightColumn);

  return section;
}
