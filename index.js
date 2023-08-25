const chatContainer = document.getElementById("chatContainer");
const usernameInput = document.getElementById("usernameInput");
const messageInput = document.getElementById("messageInput");

let ctrlPressed = false;

usernameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const username = usernameInput.value.trim();
    if (username !== "") {
      usernameInput.style.display = "none";
      messageInput.style.display = "block";
      messageInput.focus();
    }
  }
});

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Control") {
    ctrlPressed = true;
  }

  if (ctrlPressed && event.key === "c") {
    event.preventDefault();
    document.body.style.fontSize = "larger";
    document.body.style.color = "yellow";
  }
});

messageInput.addEventListener("keyup", (event) => {
  if (event.key === "Control") {
    ctrlPressed = false;
  }

  if (event.key === "Enter") {
    const message = messageInput.value.trim();
    if (message !== "") {
      const messageElement = document.createElement("p");
      messageElement.textContent = `${usernameInput.value}: ${message}`;
      chatContainer.appendChild(messageElement);
      messageInput.value = "";
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  if (!ctrlPressed) {
    document.body.style.fontSize = "";
    document.body.style.color = "";
  }
});
