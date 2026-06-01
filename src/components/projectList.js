import createProjectCard from "./projectCard.js";
import { createElement } from "../utils/dom.js";

export default function createProjectList(projects) {
  const cards = projects.map(createProjectCard);

  const label = createElement("span", {
    text: "PROJECTS",
    className: "section-label",
  });

  const sectionTitle = createElement("h2", {
    text: "Werk waar ik aan heb gebouwd.",
    className: "projects-title",
  });

  const intro = createElement("p", {
    text: "Een selectie van schoolprojecten en designs waarin ik oefen met layout, interactie en duidelijke gebruikerservaringen.",
    className: "section-copy projects-copy",
  });

  const header = createElement("div", {
    className: "projects-header",
    children: [label, sectionTitle, intro],
  });

  const grid = createElement("div", {
    className: "projects-grid",
    children: cards,
  });

  const container = createElement("section", {
    id: "projects",
    className: "projects-section",
    children: [header, grid],
  });

  return container;
}
