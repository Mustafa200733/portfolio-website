export function createElement(tag, options = {}) {
  const element = document.createElement(tag);
  if (options.className) element.className = options.className;
  if (options.text) element.textContent = options.text;
  if (options.html) element.innerHTML = options.html;
  if (options.attrs) {
    Object.entries(options.attrs).forEach(([name, value]) => {
      if (value !== undefined && value !== null) {
        element.setAttribute(name, value);
      }
    });
  }
  if (options.children) {
    options.children.forEach((child) => element.appendChild(child));
  }
  return element;
}

export function appendChildren(parent, children) {
  children.forEach((child) => parent.appendChild(child));
  return parent;
}
