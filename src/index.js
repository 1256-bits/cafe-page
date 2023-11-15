import "normalize.css";
import "./style.scss"; // import after normalize.css to prevent overwriting
import createAboutTab from "./components/about.js";
import createTestimonials from "./components/testimonials.js";
import createThanks from "./components/thanks.js";

const main = document.querySelector("main");
const about = document.getElementById("about-us");
const testimonials = document.getElementById("testimonials");
const thanks = document.getElementById("thanks");

about.addEventListener("click", () => {
  if (main.lastElementChild) main.removeChild(main.lastElementChild);
  main.appendChild(createAboutTab());
});

testimonials.addEventListener("click", () => {
  if (main.lastElementChild) main.removeChild(main.lastElementChild);
  main.appendChild(createTestimonials());
});

thanks.addEventListener("click", () => {
  if (main.lastElementChild) main.removeChild(main.lastElementChild);
  main.appendChild(createThanks());
});

main.appendChild(createAboutTab());
