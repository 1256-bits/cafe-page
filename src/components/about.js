export default function createHomePage() {
  const tab = document.createElement("div"); //return value
  const h2 = document.createElement("h2"); //main header
  h2.classList.add("center");
  h2.innerText = "Welcome to Real Human cafe";

  //lorem ipsum section
  const aboutSec = document.createElement("section");
  const aboutH3 = document.createElement("h3");
  const aboutP1 = document.createElement("p");
  const aboutP2 = document.createElement("p");

  //schedule section
  const scheduleSec = document.createElement("section");
  const scheduleH3 = document.createElement("h3");
  const ul = document.createElement("ul");
  const li = document.createElement("li");

  //address section
  const addrSec = document.createElement("section");
  const addrH3 = document.createElement("h3");
  const addrP = document.createElement("h3");

  tab.appendChild(h2);
  return tab;
}
