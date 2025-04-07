// index.js

// Assuming `artists` is imported or defined globally via data.js
const iframe = document.getElementById("website-container");
const stumbleButton = document.querySelector("nav > button");

// Function to get a random artist
function getRandomArtist() {
  const index = Math.floor(Math.random() * artists.length);
  return artists[index];
}

// Event listener for "Stumble" button
stumbleButton.addEventListener("click", () => {
  const artist = getRandomArtist();
  iframe.src = artist.url;
  iframe.title = artist.name;
});
