import { songs } from "../data/songs.js";

const container = document.querySelector("#artists-container");

// get unique artists
const uniqueArtists = [...new Set(songs.map(song => song.artist))];

uniqueArtists.forEach(artist => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <h3>${artist}</h3>
    <p>Popular Amapiano Artist</p>
  `;

  container.appendChild(card);
});
