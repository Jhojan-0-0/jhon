const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input i");
const chatbox = document.querySelector(".chatbox");

let userMessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : ` <i class="fa-brands fa-bots" style="font-size: 48px;"></i><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); 
    if(luserMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));

}

    sendChatBtn.addEventListener("click", handleChat);