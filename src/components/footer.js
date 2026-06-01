import { createElement } from "../utils/dom.js";

const footerLinks = [
  {
    text: "Email",
    href: "mailto:Mokur4201@gmail.com",
  },
  {
    text: "GitHub",
    href: "https://github.com/Mustafa200733",
    external: true,
  },
  {
    text: "LinkedIn",
    href: "https://www.linkedin.com/in/mustafa-okur-aab40438a/",
    external: true,
  },
];

export default function createFooter() {
  const linkItems = footerLinks.map((link) =>
    createElement("a", {
      text: link.text,
      className: "footer-link",
      attrs: {
        href: link.href,
        target: link.external ? "_blank" : undefined,
        rel: link.external ? "noreferrer" : undefined,
      },
    })
  );

  return createElement("footer", {
    className: "footer",
    children: [
      createElement("div", {
        className: "footer-inner",
        children: [
          createElement("p", {
            text: "Mustafa Okur",
            className: "footer-brand",
          }),
          createElement("p", {
            text: "Frontend Developer in opleiding . 2026",
            className: "footer-copy",
          }),
          createElement("div", {
            className: "footer-links",
            children: linkItems,
          }),
        ],
      }),
    ],
  });
}
