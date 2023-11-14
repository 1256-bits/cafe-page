import "normalize.css"
import "./style.scss"// import after normalize.css to prevent overwriting
import createHomePage from "./components/about.js"

const main = document.querySelector("main");
main.appendChild(createHomePage());
