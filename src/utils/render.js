export default function renderApp(root, nodes) {
  if (!root) return;
  root.innerHTML = "";
  nodes.forEach((node) => root.appendChild(node));
}
