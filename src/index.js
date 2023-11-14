import "normalize.css"
import "./style.scss"// import after normalize.css to prevent overwriting
import createHomePage from "./components/about.js"

const aboutUs = document.querySelector("#about-us");
console.log(createHomePage());
aboutUs.addEventListener("click", () => 1)
