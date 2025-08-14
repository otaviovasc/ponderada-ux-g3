const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const OpenAI = require('openai');
const config = require('./config');

// Configuração da OpenAI
const openai = new OpenAI({
    apiKey: config.OPENAI_API_KEY
});

// Configuração do Express
app.use(express.static(__dirname + '/views')); // HTML
app.use(express.static(__dirname + '/public')); // JS, CSS, imagens

// Rota principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Configuração do Socket.IO para comunicação em tempo real
io.on('connection', function(socket) {
  console.log('Usuário conectado');

  socket.on('chat message', async (text) => {
    console.log('Mensagem recebida:', text);

    try {
      // Obter resposta da OpenAI
      const completion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "Você é um assistente virtual amigável e útil. Responda de forma natural e conversacional em português brasileiro. Mantenha as respostas concisas e úteis."
          },
          {
            role: "user",
            content: text
          }
        ],
        max_tokens: 150,
        temperature: 0.7
      });

      const aiText = completion.choices[0].message.content;
      console.log('Resposta da IA:', aiText);
      socket.emit('bot reply', aiText); // Enviar resultado de volta para o navegador

    } catch (error) {
      console.error('Erro na OpenAI:', error);
      socket.emit('bot reply', 'Desculpe, não consegui processar sua mensagem no momento. Tente novamente.');
    }
  });

  socket.on('disconnect', () => {
    console.log('Usuário desconectado');
  });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
  console.log(`🌐 Acesse: http://localhost:${PORT}`);
  console.log('✅ OpenAI configurada e funcionando!');
});
