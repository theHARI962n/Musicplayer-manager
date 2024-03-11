// Sample music playlist data (name and path)
const playlistData = [
    { name: "Song 1", path: "path/to/song1.mp3" },
    { name: "Song 2", path: "path/to/song2.mp3" },
    { name: "Song 3", path: "path/to/song3.mp3" }
];

// Function to display the music playlist
function displayPlaylist() {
    const playlist = document.getElementById("playlistItems");
    playlist.innerHTML = ""; // Clear previous playlist items

    playlistData.forEach((song, index) => {
        const listItem = document.createElement("li");
        listItem.classList.add("playlist-item");
        listItem.innerHTML = `
            <span class="song-name">${song.name}</span>
            <audio src="${song.path}" controls></audio>
            <button class="delete-btn" onclick="deleteSong(${index})">Delete</button>
        `;
        playlist.appendChild(listItem);
    });
}


// Function to add a new song to the playlist
function addSong(name, path) {
    playlistData.push({ name, path }); // Add the new song to the playlistData array
    displayPlaylist(); // Re-display the playlist with the new song
}


// Function to delete a song from the playlist
function deleteSong(index) {
    playlistData.splice(index, 1); // Remove the song from the playlistData array
    displayPlaylist(); // Re-display the playlist
}

// Display the initial playlist
displayPlaylist();


// Event listener for form submission
const addSongForm = document.getElementById("addSongForm");
addSongForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the values of the song name and path inputs
    const songName = document.getElementById("songName").value;
    const songPath = document.getElementById("songPath").value;

    // Add the new song to the playlist
    addSong(songName, songPath);

    // Reset the form
    addSongForm.reset();
});