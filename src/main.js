import renderApp from "./utils/render.js";
import createNav from "./components/nav.js";
import createHome from "./components/home.js";
import createAbout from "./components/about.js";
import createAboutExtras from "./components/aboutExtras.js";
import createProjectList from "./components/projectList.js";
import createProjectDetail from "./components/projectDetail.js";
import createContact from "./components/contact.js";
import createFooter from "./components/footer.js";
import projects from "./data/projects.js";

const root = document.getElementById("root");
const nav = createNav();
const footer = createFooter();

function render(page) {
  let content;

  if (page.startsWith("project-")) {
    const id = Number(page.split("-")[1]);
    const project = projects.find((project) => project.id === id);
    content = project ? createProjectDetail(project) : createProjectList(projects);
  } else {
    switch (page) {
      case "about":
        content = [createAbout(), createAboutExtras()];
        break;
      case "projects":
        content = createProjectList(projects);
        break;
      case "contact":
        content = createContact();
        break;
      default:
        content = createHome();
    }
  }

  const nodes = [nav];
  if (Array.isArray(content)) {
    nodes.push(...content);
  } else {
    nodes.push(content);
  }
  nodes.push(footer);

  renderApp(root, nodes);
  setActiveNav(page);
}

function setActiveNav(page) {
  const activePage = page.startsWith("project-") ? "projects" : page;
  const links = nav.querySelectorAll(".nav-link");
  links.forEach((link) => {
    const isActive = link.getAttribute("href") === `#${activePage}`;
    link.classList.toggle("active", isActive);
  });
}

// Render pagina op basis van huidige hash of stel home in
const initialPage = window.location.hash.slice(1) || "home";
render(initialPage);

// Luister naar navigatie
window.addEventListener("hashchange", () => {
  const page = window.location.hash.slice(1) || "home";
  render(page);
});
