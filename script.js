const loginContainer = document.getElementById('login-container');
const usernameInput = document.getElementById('username-input');
const loginButton = document.getElementById('login-button');
const chatContainer = document.getElementById('chat-container');
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');

let username = ''; // Will store the username

loginButton.addEventListener('click', () => {
  const enteredUsername = usernameInput.value.trim();
  if (enteredUsername !== '') {
    loginUser(enteredUsername);
  }
});

function loginUser(enteredUsername) {
  username = enteredUsername;
  loginContainer.style.display = 'none';
  chatContainer.style.display = 'block';
}

const passwordInput = document.getElementById('password-input');
const passwordButton = document.getElementById('password-button');
const password = 'LRMSbad';

passwordButton.addEventListener('click', () => {
  const enteredPassword = passwordInput.value.trim();
  if (enteredPassword === password) {
    document.body.classList.add('yellow-name');
  }
  passwordInput.value = ''; // Clear the input field
});


function sendMessage(username, message) {
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');
  messageElement.textContent = `${username}: ${message}`;
  chatMessages.appendChild(messageElement);
}

sendButton.addEventListener('click', () => {
  const message = messageInput.value;
  if (message.trim() !== '') {
    sendMessage(username, message);
    messageInput.value = '';
  }
});
