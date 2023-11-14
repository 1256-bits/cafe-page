export default function createHomePage() {
  const tab = document.createElement("div");
  const h2 = document.createElement("h2");
  tab.classList.add("tab");
  h2.classList.add("center");
  h2.innerText = "Welcome to Real Human cafe";

  tab.append(
    h2,
    createAboutSection(),
    createScheduleSection(),
    createAddrSection(),
  );
  return tab;
}

function createAboutSection() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const pWrapper = document.createElement("div");
  const paragraph1 = document.createElement("p");
  const paragraph2 = document.createElement("p");
  section.classList.add("section");
  h3.classList.toggle("center");
  pWrapper.classList.add("justify");
  paragraph1.innerText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Maecenas hendrerit vulputate diam sed interdum.Nulla maximus tincidunt purus, eu aliquet sem pulvinar id.Ut id dictum tortor.Quisque ut blandit diam, vel laoreet lorem.Morbi in sapien diam.Fusce eu sem sapien.Aenean hendrerit tincidunt lorem, id dictum tellus sagittis ut.Nunc ac risus in magna ultrices commodo.Proin a dui quam.Donec efficitur elementum elit in rutrum.Quisque pharetra eget elit sit amet ultricies.Ut pellentesque congue ex, sed luctus urna egestas in.Praesent egestas volutpat mauris. Suspendisse et turpis id dui posuere porta.";
  paragraph2.innerText =
    "Nulla interdum malesuada orci id maximus. Sed tempor ligula nonneque suscipit, id laoreet libero posuere. Praesent lobortis arcueu pretium gravida. Duis ac laoreet enim. Fusce velit libero,ullamcorper auctor faucibus eu, consectetur et velit. Pellentesquehabitant morbi tristique senectus et netus et malesuada fames acturpis egestas. Sed tincidunt ultricies orci ac mattis. Ut nonsapien ullamcorper, rutrum sapien sed, facilisis ipsum. Phaselluspretium nisi a eros pulvinar mollis.";
  pWrapper.append(paragraph1, paragraph2);
  section.append(h3, pWrapper);
  return section;
}

function createScheduleSection() {
  const schedule = {
    mon: {
      day: "Monday",
      open: 9,
      close: 22,
    },
    teu: {
      day: "Teusday",
      open: 9,
      close: 22,
    },
    wed: {
      day: "Wednesday",
      open: 9,
      close: 22,
    },
    thu: {
      day: "Thursday",
      open: 9,
      close: 22,
    },
    fri: {
      day: "Friday",
      open: 9,
      close: 22,
    },
    sat: {
      day: "Saturday",
      open: 8,
      close: 23,
    },
    sun: {
      day: "Sunday",
      open: 9,
      close: 24,
    },
  };
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const ul = document.createElement("ul");
  section.classList.add("section", "hours", "center");
  h3.classList.add("center");
  h3.innerText = "Our working hours:";
  ul.classList.add("schedule");
  for (let day in schedule) {
    const li = document.createElement("li");
    const closingHour = schedule[day].close - 12;
    li.innerText = `${schedule[day].day}: ${schedule[day].open}am - ${closingHour}pm`;
    ul.appendChild(li);
  }
  section.append(h3, ul);
  return section;
}

function createAddrSection() {
  const section = document.createElement("section");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  section.classList.add("section", "address", "center");
  h3.classList.add("center");
  h3.innerText = "Our address:";
  p.innerText = "12 Meow Street, Cat City, Republic of Sealand";
  section.append(h3, p);
  return section;
}
