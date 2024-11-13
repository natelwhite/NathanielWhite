function navDrop(dropper_id, content_id) {
  // show content
  let content = document.getElementById(content_id);
  content.classList.toggle("dropped-content");

  // switch icon
  let dropper = document.getElementById(dropper_id);
  let icon = dropper.children[0];
  icon.classList.toggle("fa-folder-closed");
  icon.classList.toggle("fa-folder-open");
}

function mainDrop(dropper_id, content_id) {
  let content = document.getElementById(content_id);
  content.classList.toggle("dropped-content");

  // switch icon
  let dropper = document.getElementById(dropper_id);
  let icon = dropper.children[0];
  icon.classList.toggle("fa-caret-right");
  icon.classList.toggle("fa-caret-down");
}

function copyEmail() {
  navigator.clipboard.writeText("natelwhite01@gmail.com");
  let popup = document.getElementById("socials-email-popup");
  popup.classList.toggle("popped");
}

function copyDiscord() {
  navigator.clipboard.writeText("blackorchard")

  let popup = document.getElementById("socials-discord-popup");
  popup.classList.toggle("popped");
}
