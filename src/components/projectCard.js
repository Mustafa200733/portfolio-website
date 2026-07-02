import { createElement } from "../utils/dom.js";

export default function createProjectCard(project) {
  const image = createElement("img", {
    className: "project-image",
    attrs: { src: project.image, alt: project.name },
  });

  const title = createElement("h2", {
    text: project.name,
    className: "project-name",
  });

  const description = createElement("p", {
    text: project.description,
    className: "project-description",
  });

  const button = createElement("a", {
    text: "Bekijk project",
    className: "project-button",
    attrs: {
      href: project.url || `#project-${project.id}`,
      target: project.url ? "_blank" : undefined,
      rel: project.url ? "noreferrer" : undefined,
    },
  });

  return createElement("article", {
    className: "project-card",
    children: [image, title, description, button],
  });
}
