import "normalize.css"
import "./style.scss"// import after normalize.css to prevent overwriting
import createAboutTab from "./components/about.js"

const main = document.querySelector("main");
const about = document.getElementById("about-us");
const testimonials = document.getElementById("testimonials");
const thanks = document.getElementById("thanks");

about.addEventListener("click", () => {
  main.appendChild(createAboutTab());
});
