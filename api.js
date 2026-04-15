async function sendToChatBot() {
  console.log("NEW api.js loaded");

  const response = await fetch(APP_CONFIG.workerUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages: getMessages(),
    }),
  });

  if(!response.ok){
    throw new Error(`Worker failed with status ${response.status}`);
  }
  const data = await response.json();
  console.log("Response: ", data);
  const botReply = data?.choices[0]?.message?.content?.trim() ||  data?.reply || data?.error ||
   "Sorry, I couldn't get a response from the server.";
  return botReply;
}