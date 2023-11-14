export default function createThanksPage() {
  const credits = [
    {
      name: "Matt Thornhill",
      nameLink:
        "https://unsplash.com/@matt_47?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      for: "Yacht photo",
      phLink:
        "https://unsplash.com/photos/assorted-color-yacht-on-body-of-water-near-dock-under-blue-sky-during-daytime-M8T7TMl5OHs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
      name: "Raoul Droog",
      nameLink:
        "https://unsplash.com/@raouldroog?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      for: "Client photo #1",
      phLink:
        "https://unsplash.com/photos/russian-blue-cat-wearing-yellow-sunglasses-yMSecCHsIBc?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
      name: "Timo Volz",
      nameLink:
        "https://unsplash.com/@magict1911?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      for: "Client photo #2",
      phLink:
        "https://unsplash.com/photos/orange-cat-stretching-on-white-surface-ZlFKIG6dApg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    {
      name: "Charlie Deets",
      nameLink:
        "https://unsplash.com/@charliedeets?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      for: "Client photo #3",
      phLink:
        "https://unsplash.com/photos/brown-and-white-tabby-cat-TKgOIwPVmkg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
  ];
  const tab = document.createElement("div");
  const h2 = document.createElement("h3");
  const ul = document.createElement("ol");
  tab.classList.add("tab", "justify", "thanks");
  h2.innerText = "Special thanks to:";
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
  tab.append(h2, ul);
  return tab;
}
