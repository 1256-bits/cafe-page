import { credits } from "./thanks-data.js";
export default function createThanksPage() {
  const tab = document.createElement("div");
  const h2 = document.createElement("h3");
  const ul = genUl();
  tab.classList.add("tab", "justify", "thanks");
  h2.innerText = "Special thanks to:";
  tab.append(h2, ul);
  return tab;
}

function genUl() {
  const ul = document.createElement("ol");
  for (let rec of credits) {
    const li = document.createElement("li");
    const nameLink = document.createElement("a");
    const phLink = document.createElement("a");
    nameLink.href = rec.nameLink;
    phLink.href = rec.phLink;
    nameLink.innerText = rec.name;
    phLink.innerText = rec.for.toLowerCase();
    li.append(nameLink, " for ", phLink);
    ul.appendChild(li);
  }
  return ul;
}
