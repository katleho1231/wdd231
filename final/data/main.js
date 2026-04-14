import { songs, artists } from './data.js';

const songsContainer = document.querySelector('#songsContainer');
const artistsContainer = document.querySelector('#artistsContainer');

// MENU FIX (NO onclick)
const menuBtn = document.querySelector('#menuBtn');
const navMenu = document.querySelector('#navMenu');

menuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

// SONGS
function displaySongs() {
    if (!songsContainer) return;

    songs.forEach(song => {
        const div = document.createElement('div');

        div.innerHTML = `
            <h3>${song.title}</h3>
            <p>${song.artist}</p>
            <p>${song.year}</p>
            <p>${song.genre}</p>
            <button class="favBtn">❤️ Favorite</button>
        `;

        div.querySelector('.favBtn').addEventListener('click', () => {
            saveFavorite(song.title);
        });

        songsContainer.appendChild(div);
    });
}

// ARTISTS
function displayArtists() {
    if (!artistsContainer) return;

    artists.forEach(artist => {
        const div = document.createElement('div');

        div.innerHTML = `
            <h3>${artist.name}</h3>
            <p>${artist.country}</p>
            <p>${artist.genre}</p>
            <p>${artist.popularity}</p>
        `;

        artistsContainer.appendChild(div);
    });
}

// LOCAL STORAGE
function saveFavorite(song) {
    let favs = JSON.parse(localStorage.getItem('favorites')) || [];
    favs.push(song);
    localStorage.setItem('favorites', JSON.stringify(favs));
}

// INIT
displaySongs();
displayArtists();
