import { createElement } from "../utils/dom.js";

const contacts = [
  { label: "Email", value: "Mokur4201@gmail.com", href: "mailto:Mokur4201@gmail.com", icon: "@" },
  { label: "Telefoon", value: "06 2249 6205", href: "tel:+31622496205", icon: "T" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mustafa-okur-aab40438a",
    href: "https://linkedin.com/in/mustafa-okur-aab40438a",
    icon: "in",
  },
];

export default function createContact() {
  const label = createElement("span", {
    text: "CONTACT",
    className: "section-label",
  });

  const title = createElement("h2", {
    text: "Laten we iets bouwen.",
    className: "section-heading",
  });

  const description = createElement("p", {
    text: "Wil je samenwerken of heb je een vraag over mijn projecten? Stuur me een bericht.",
    className: "section-copy",
  });

  const contactItems = contacts.map((item) =>
    createElement("li", {
      className: "contact-item",
      children: [
        createElement("div", {
          className: "contact-item-row",
          children: [
            createElement("span", {
              text: item.icon,
              className: "contact-icon",
            }),
            createElement("div", {
              className: "contact-item-content",
              children: [
                createElement("span", {
                  text: item.label.toUpperCase(),
                  className: "contact-label",
                }),
                createElement("a", {
                  text: item.value,
                  className: "contact-link",
                  attrs: { href: item.href, target: "_blank", rel: "noreferrer" },
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );

  const contactList = createElement("ul", {
    className: "contact-list",
    children: contactItems,
  });

  const leftCard = createElement("div", {
    className: "contact-card contact-info-card",
    children: [label, title, description, contactList],
  });

  const rightCard = createElement("div", {
    className: "contact-card contact-image-card",
    children: [
      createElement("img", {
        className: "contact-image",
        attrs: { src: "./toetsenbord.png", alt: "Contact" },
      }),
      createElement("p", {
        text: "Ik reageer meestal binnen 24 uur op berichten via e-mail of LinkedIn.",
        className: "contact-copy",
      }),
    ],
  });

  return createElement("section", {
    id: "contact",
    className: "contact-section",
    children: [leftCard, rightCard],
  });
}
