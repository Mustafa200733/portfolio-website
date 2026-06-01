import { createElement } from "../utils/dom.js";

const links = [
  { label: "Home", href: "#home" },
  { label: "Over mij", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function createNav() {
  const navLinks = links.map((link) =>
    createElement("a", {
      text: link.label,
      className: "nav-link",
      attrs: { href: link.href },
    })
  );

  const navList = createElement("nav", {
    className: "top-nav",
    children: navLinks,
  });

  return createElement("header", {
    className: "top-header",
    children: [createElement("div", { className: "brand", text: "Mustafa Okur" }), navList],
  });
}
