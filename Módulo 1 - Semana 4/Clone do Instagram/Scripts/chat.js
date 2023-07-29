document.getElementById('chat-form').addEventListener('submit', sendMessage)

function sendMessage(event) {
  event.preventDefault()
  const messageInput = document.getElementById('messageInput');
  
  const message = messageInput.value;
  
  // tira os espaços do inicio e final da palavra 

  if (message.trim() !== '') {
    const chat = document.getElementById('chat');

    const userMessageElement = document.createElement('p');

    userMessageElement.style.color = 'white'
    userMessageElement.innerHTML = `Você: ${message}`

    chat.appendChild(userMessageElement);

    messageInput.value = '';

    // faz o scroll ir para o final da pagina quando algo é digitado
    chat.scrollTop = chat.scrollHeight;

    //Faz parar o set intervalo a variavel que armazenou o set intervalo
   // clearInterval(botRun)
  }
}

function generateRandomBotMessage() {
  const messages = [
    "Olá, como posso ajudar?",
    "Estou aqui para responder suas perguntas!",
    "Que ótimo ver você por aqui!",
    "Estou sempre aprendendo coisas novas!",
    "Posso te fornecer informações e dicas úteis.",
    "Estou programado para ser útil e amigável!",
    "Sinta-se à vontade para me perguntar qualquer coisa!",
    "Estou pronto para interagir com você!",
    "Vamos começar!",
    "Estou aqui para tornar sua vida mais fácil.",
  ];

  // gerar um numero aleatorio entre 0 e 9 por causa do tamanho do array
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

// Gera uma mensagem aleatório do bot
const botRun = setInterval(() => {
  const chat = document.getElementById('chat');
  const botMessage = generateRandomBotMessage();

  const botMessageElement = document.createElement('p');

  botMessageElement.style.color = 'white'
  botMessageElement.innerHTML = `Bot: ${botMessage}`

  chat.appendChild(botMessageElement);
  chat.scrollTop = chat.scrollHeight;
}, 3000);