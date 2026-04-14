import { songs } from "../data/songs.js";

const container = document.querySelector("#songs-container");

songs.forEach(song => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${song.title}</h3>
    <p><strong>Artist:</strong> ${song.artist}</p>
    <p><strong>Year:</strong> ${song.year}</p>
    <p><strong>Genre:</strong> ${song.genre}</p>
  `;

  container.appendChild(card);
});
