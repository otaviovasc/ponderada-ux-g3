// Elementos do DOM
const talkButton = document.getElementById('talkButton');
const statusIndicator = document.getElementById('statusIndicator');
const statusText = document.querySelector('.status-text');
const chatMessages = document.getElementById('chatMessages');

// Web Speech API
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Configurações do SpeechRecognition
recognition.continuous = false;
recognition.interimResults = false;
recognition.lang = 'pt-BR';

// Socket.IO
const socket = io();

// Estado da aplicação
let isListening = false;

// Função para adicionar mensagem ao chat
function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;

    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';

    const avatar = document.createElement('span');
    avatar.className = isUser ? 'user-avatar' : 'bot-avatar';
    avatar.textContent = isUser ? 'Você' : 'AI';

    const messageText = document.createElement('p');
    messageText.textContent = text;

    messageContent.appendChild(avatar);
    messageContent.appendChild(messageText);
    messageDiv.appendChild(messageContent);

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Função para sintetizar voz
function synthVoice(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance();
    utterance.text = text;
    utterance.lang = 'pt-BR';
    utterance.rate = 0.95;
    utterance.pitch = 1;
    synth.speak(utterance);
}

// Função para atualizar status
function updateStatus(text, listening = false) {
    statusText.textContent = text;
    statusIndicator.className = `status ${listening ? 'listening' : ''}`;
}

// Função para atualizar botão
function updateButton(listening) {
    const label = talkButton.querySelector('.button-label');
    const dot = talkButton.querySelector('.status-dot');
    if (listening) {
        talkButton.classList.add('listening');
        label.textContent = 'Ouvindo';
        dot.style.background = '#fff';
    } else {
        talkButton.classList.remove('listening');
        label.textContent = 'Falar';
        dot.style.background = 'rgba(255,255,255,0.6)';
    }
}

// Eventos do SpeechRecognition
recognition.onstart = () => {
    isListening = true;
    updateStatus('Ouvindo', true);
    updateButton(true);
};

recognition.onresult = (event) => {
    const result = event.results[0];
    const text = result[0].transcript;
    addMessage(text, true);
    socket.emit('chat message', text);
    recognition.stop();
};

recognition.onerror = (event) => {
    let message = 'Erro de reconhecimento';
    if (event.error === 'no-speech') message = 'Nenhuma fala detectada';
    if (event.error === 'audio-capture') message = 'Sem acesso ao microfone';
    if (event.error === 'not-allowed') message = 'Permissão negada';
    if (event.error === 'network') message = 'Erro de rede';
    updateStatus(message);
    setTimeout(() => updateStatus('Pronto'), 2500);
    isListening = false;
    updateButton(false);
};

recognition.onend = () => {
    isListening = false;
    updateStatus('Pronto');
    updateButton(false);
};

// Botão
try {
    talkButton.addEventListener('click', () => {
        if (!isListening) recognition.start();
        else recognition.stop();
    });
} catch (err) {
    updateStatus('Falha ao iniciar');
}

// Socket
socket.on('connect', () => updateStatus('Conectado'));
socket.on('disconnect', () => updateStatus('Desconectado'));

socket.on('bot reply', (replyText) => {
    addMessage(replyText, false);
    synthVoice(replyText);
});

// Suporte
if (!SpeechRecognition) {
    talkButton.disabled = true;
    updateStatus('Sem suporte ao reconhecimento');
    addMessage('Use Chrome ou Edge para reconhecimento de voz.', false);
}

if (!window.speechSynthesis) {
    updateStatus('Sem síntese de voz');
}

console.log('UI minimalista carregada.');
