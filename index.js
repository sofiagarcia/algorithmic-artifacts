// index.js

// Combine both arrays into one
const allEntries = [...artists, ...sources];

// Function to get a random entry
function getRandomEntry() {
  const index = Math.floor(Math.random() * allEntries.length);
  return allEntries[index];
}

// Get elements
const iframe = document.getElementById("website-container");
const stumbleButton = document.querySelector("nav > button");

// Set a random entry on page load
window.addEventListener("DOMContentLoaded", () => {
  const entry = getRandomEntry();
  iframe.src = entry.url;
  iframe.title = entry.name;
});

// Also change on button click
stumbleButton.addEventListener("click", () => {
  const entry = getRandomEntry();
  iframe.src = entry.url;
  iframe.title = entry.name;
});
