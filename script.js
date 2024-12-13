const sessionItems = document.querySelectorAll(".session-item");
const sessionRows = {
  "session-19-20": document.querySelectorAll(".session-19-20"),
  "session-20-21": document.querySelectorAll(".session-20-21"),
  "session-21-22": document.querySelectorAll(".session-21-22"),
  "session-22-23": document.querySelectorAll(".session-22-23"),
  "session-23-24": document.querySelectorAll(".session-23-24"),
};

sessionItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Reset styles for all items
    sessionItems.forEach((el) => el.classList.remove("bg-primary"));

    // Highlight the selected item
    item.classList.add("bg-primary");

    // Get the selected session
    const selectedSession = item.dataset.session;

    // Toggle visibility of session rows
    Object.keys(sessionRows).forEach((session) => {
      if (session === selectedSession) {
        sessionRows[session].forEach((el) => el.classList.add("bg-primary")); // Show selected session
      } else {
        sessionRows[session].forEach((el) => el.classList.remove("bg-primary")); // Hide others
      }
    });
  });
});
