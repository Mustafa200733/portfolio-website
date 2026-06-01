import { createElement } from "../utils/dom.js";

export default function createProjectDetail(project) {
  const backButton = createElement("a", {
    text: "Terug",
    className: "project-detail-back",
    attrs: { href: "#projects" },
  });

  const title = createElement("h2", {
    text: project.name,
    className: "project-name",
  });

  const description = createElement("p", {
    text: project.description,
    className: "project-description",
  });

  const image = createElement("img", {
    className: "project-detail-image",
    attrs: { src: project.image, alt: project.name },
  });

  const details = createElement("div", {
    className: "project-detail",
    children: [backButton, title, description, image],
  });

  return details;
}
