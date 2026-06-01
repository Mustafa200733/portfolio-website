import { createElement } from "../utils/dom.js";

export default function createHeader() {
  const heading = createElement("h1", {
    text: "Portfolio Website",
    className: "app-title",
  });

  const description = createElement("p", {
    text: "Welkom op mijn portfolio. Hier vind je mijn projecten en korte uitleg.",
    className: "app-description",
  });

  return createElement("header", {
    className: "site-header",
    children: [heading, description],
  });
}
