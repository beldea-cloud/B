function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}


function updateWatchTime() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  const timeElement = document.getElementById("watchTime");

  if (timeElement) {
    timeElement.textContent = `${hours}:${minutes}`;
  }
}


function openDeveloperMode() {
  const modal = document.getElementById("developerModal");

  if (modal) {
    modal.classList.add("show");

    const input = document.getElementById("devPassword");

    if (input) {
      setTimeout(() => input.focus(), 100);
    }
  }
}


function closeDeveloperMode() {
  const modal = document.getElementById("developerModal");

  if (modal) {
    modal.classList.remove("show");
  }
}


function checkDeveloperPassword() {
  const input = document.getElementById("devPassword");
  const message = document.getElementById("devMessage");

  if (!input || !message) {
    return;
  }

  if (input.value === "8008") {
    message.textContent = "Developer mode unlocked.";
  } else {
    message.textContent = "Invalid developer key.";
  }
}


document.addEventListener("click", function(event) {

  const modal = document.getElementById("developerModal");

  if (
    modal &&
    event.target === modal
  ) {
    closeDeveloperMode();
  }

});


updateWatchTime();

setInterval(updateWatchTime, 1000);