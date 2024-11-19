// script.js

// Function to display the story message for 5 seconds
function showStoryMessage() {
    // Create a div element for the message
    const storyMessage = document.createElement("div");
    storyMessage.textContent = "You don't need a story—just be mine 🩷";
    storyMessage.className = "story-message"; // Add a class for styling

    // Append the message to the body
    document.body.appendChild(storyMessage);

    // Remove the message after 5 seconds
    setTimeout(() => {
        storyMessage.remove();
    }, 5000);
}
