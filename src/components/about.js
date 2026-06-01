import { createElement } from "../utils/dom.js";

const points = [
  "Praktisch gebouwd met React en JavaScript",
  "Focus op nette structuur en responsive layout",
  "Steeds verbeteren op basis van feedback",
];

export default function createAbout() {
  const title = createElement("span", {
    text: "OVER MIJ",
    className: "section-label",
  });

  const heading = createElement("h2", {
    text: "Ik combineer designgevoel met code.",
    className: "section-heading",
  });

  const description = createElement("p", {
    text: "Ik volg de opleiding Software Developer en werk aan projecten die zowel technisch sterk als visueel duidelijk moeten zijn.",
    className: "section-copy",
  });

  const listItems = points.map((point) =>
    createElement("li", {
      text: point,
      className: "feature-item",
    })
  );

  const features = createElement("ul", {
    className: "feature-list",
    children: listItems,
  });

  const leftCard = createElement("div", {
    className: "about-card about-text-card",
    children: [title, heading, description, features],
  });

  const rightCard = createElement("div", {
    className: "about-card about-image-card",
    children: [
      createElement("img", {
        className: "about-image",
        attrs: { src: "./Screenshot.png", alt: "Mustafa" },
      }),
      createElement("p", {
        text: "Frontend student met focus op gebruiksvriendelijke UI.",
        className: "about-image-caption",
      }),
    ],
  });

  return createElement("section", {
    id: "about",
    className: "about-section",
    children: [leftCard, rightCard],
  });
}
