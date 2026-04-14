function appendMessage(role, text){
  const chatWindow = document.getElementById("chatWindow");

  const row = document.createElement("div");
  row.className = 'msg-row ${role}';
  
  const msgBubble = document.createElement("div");
  msgBubble.className = 'msg ${role}';
  msgBubble.textContent = text;

  row.appendChild(msgBubble);
  chatWindow.appendChild(row);

  chatWindow.scrollTop = chatWindow.scrollHeight;
}

function updateLatestQuestion(text){
  const latestQuestion = document.getElementById("latestQuestion");
  latestQuestion.textContent = text;
}

function setStatus(text){
  const status = document.getElementById("status");
  status.textContent = text;
}

function setLoading(isLoading){
  const sendButton = document.getElementById("sendButton");
  const userInput = document.getElementById("userInput");

  userInput.disabled = isLoading;
  sendButton.disabled = isLoading;
  if(isLoading){
    userInput.focus();
  }
}