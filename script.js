/* DOM elements */
const chatForm = document.getElementById("chatForm");
const userInput = document.getElementById("userInput");

appendMessage("assistant", "Hi, I'm your L’Oréal Beauty Advisor! Ask me anything about our products, beauty routines, skincare, haircare, makeup, or for personalized recommendations. I'm here to help you look and feel your best!");

/* Handle form submit */
chatForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = userInput.value.trim();
  if (!text) return;
  addUserMessage(text);
  appendMessage("user", text);
  userInput.value = "";
  setLoading(true);

  try{
    trimMessages(12);
    const reply = await sendToChatBot();
    appendMessage("assistant", reply);
    addAssistantMessage(reply);
  } catch (error) {
    console.error("Error:", error);
    appendMessage("assistant", "Sorry, something went wrong. Please try again later.");
    setStatus("Connection problem.");
  } finally {
    setLoading(false);
  }
});
