import "normalize.css";
import "./style.scss"; // import after normalize.css to prevent overwriting
import createAboutTab from "./components/about.js";

const main = document.querySelector("main");
const about = document.getElementById("about-us");
const testimonials = document.getElementById("testimonials");
const thanks = document.getElementById("thanks");

about.addEventListener("click", () => {
  if (main.lastElementChild) main.removeChild(main.lastElementChild);
  main.appendChild(createAboutTab());
});

testimonials.addEventListener("click", lloadTestimonials);

thanks.addEventListener("click", lloadThanks);

main.appendChild(createAboutTab());

async function lloadTestimonials() {
  const module = await import("./components/testimonials.js");
  if (main.lastElementChild) main.removeChild(main.lastElementChild);
  main.appendChild(module.default());
}

async function lloadThanks() {
  const module = await import("./components/thanks.js");
  if (main.lastElementChild) main.removeChild(main.lastElementChild);
  main.appendChild(module.default());
}
