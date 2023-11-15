export default function createTestimonials() {
  const reviews = [
    {
      pic: "./cat-pic-1.png",
      message:
        "This is a nice caffee for humans.I will recommend it to my friends.",
    },
    {
      pic: "./cat-pic-2.png",
      message: "This cafe is great! I like the foodm especially the fishes.",
    },
    {
      pic: "./cat-pic-3.png",
      message: "Meow",
    },
  ];
  const tab = document.createElement("div");
  const h2 = document.createElement("h2");
  const ul = document.createElement("ul");
  tab.classList.add("tab", "testimonials");
  h2.classList.add("center");
  ul.classList.add("grid");
  h2.innerText = "Client reviews:";
  reviews.forEach((r) => ul.appendChild(genReview(r)));
  tab.append(h2, ul);
  return tab;
}

function genReview(review) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const quote = document.createElement("blockquote");
  const p = document.createElement("p");

  li.classList.add("grid", "center", "bg-primary");
  quote.classList.add("bg-secondary");

  img.src = review.pic;
  img.alt = "client photo";
  p.innerText = review.message;

  quote.appendChild(p);
  li.append(img, quote);
  return li;
}
