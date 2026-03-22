const container = document.getElementById("spotlight-container");

async function getSpotlights() {
  const response = await fetch("data/members.json");
  const data = await response.json();

  const members = data.members.filter(m =>
    m.membership === "Gold" || m.membership === "Silver"
  );

  const random = members.sort(() => 0.5 - Math.random()).slice(0, 3);

  random.forEach(member => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${member.name}</h3>
      <img src="${member.image}" alt="${member.name}">
      <p>${member.phone}</p>
      <p>${member.address}</p>
      <a href="${member.website}" target="_blank">Visit</a>
      <p>${member.membership}</p>
    `;

    container.appendChild(card);
  });
}

getSpotlights();
