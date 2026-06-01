import { createElement } from "../utils/dom.js";

const tags = ["HTML", "CSS", "SQL", "JavaScript", "Python", "PHP", "Figma", "React"];

export default function createSkills() {
  const title = createElement("h2", {
    text: "Mijn vaardigheden",
    className: "section-heading",
  });

  const tagItems = tags.map((tag) =>
    createElement("span", {
      text: tag,
      className: "skill-tag",
    })
  );

  const tagRow = createElement("div", {
    className: "skill-tags",
    children: tagItems,
  });

  const description = createElement("p", {
    text: "Ik ben goed in HTML en kan nette pagina's bouwen die logisch zijn opgebouwd. Ik let op structuur en toegankelijkheid zodat content duidelijk is.",
    className: "skill-copy",
  });

  return createElement("section", {
    id: "skills",
    className: "skills-section section-card",
    children: [title, tagRow, description],
  });
}
