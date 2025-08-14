# 🎤 Voice Chat

Uma interface minimalista e moderna para conversas por voz usando Web Speech API e OpenAI.

## ✨ Características

- 🎯 **Design Minimalista**: Interface clean e moderna sem elementos desnecessários
- 🎤 **Reconhecimento de Voz**: Fale naturalmente com reconhecimento preciso
- 🔊 **Síntese de Voz**: Respostas audíveis com voz sintetizada
- 🤖 **IA Inteligente**: Respostas contextuais usando OpenAI GPT-3.5
- 📱 **Responsivo**: Funciona perfeitamente em todos os dispositivos
- ⚡ **Tempo Real**: Comunicação instantânea via WebSocket

## 🚀 Como Executar

### 1. Instalar Dependências
```bash
npm install
```

### 2. Configurar OpenAI
Edite o arquivo `config.js` e adicione sua chave da OpenAI:
```javascript
module.exports = {
    OPENAI_API_KEY: 'sua-chave-aqui'
};
```

### 3. Iniciar o Servidor
```bash
npm start
```

### 4. Acessar a Aplicação
Abra seu navegador e acesse: `http://localhost:5000`

## 🎯 Como Usar

1. **Permitir Microfone**: O navegador solicitará permissão para usar o microfone
2. **Clicar no Botão**: Clique no botão "Falar" para iniciar o reconhecimento
3. **Falar Naturalmente**: Diga sua mensagem claramente
4. **Ouvir a Resposta**: O bot responderá com voz e texto

## 🎨 Design System

### Cores
- **Primária**: Azul moderno (#2563eb)
- **Superfície**: Branco puro (#ffffff)
- **Fundo**: Cinza muito claro (#fafafa)
- **Texto**: Cinza escuro (#1e293b)

### Tipografia
- **Fonte**: Sistema nativo (San Francisco, Segoe UI, Roboto)
- **Pesos**: Regular (400), Medium (500), Bold (700)
- **Espaçamento**: Sistema de 8px para consistência

### Componentes
- **Botões**: Bordas arredondadas, sombras sutis, estados hover
- **Cards**: Sombras leves, bordas suaves, espaçamento generoso
- **Animações**: Transições suaves de 200ms, micro-interações

## 🌐 Compatibilidade de Navegadores

- ✅ **Chrome/Edge**: Suporte completo (reconhecimento + síntese)
- ⚠️ **Firefox/Safari**: Apenas síntese de voz
- ❌ **Navegadores antigos**: Sem suporte

## 🛠️ Tecnologias Utilizadas

- **Backend**: Node.js + Express + Socket.IO
- **Frontend**: HTML5 + CSS3 + JavaScript ES6+
- **IA**: OpenAI GPT-3.5 Turbo
- **Voz**: Web Speech API (SpeechRecognition + SpeechSynthesis)
- **Design**: Sistema de design minimalista com CSS custom properties

## 📁 Estrutura do Projeto

```
ponderada-ux/
├── index.js              # Servidor Node.js
├── config.js             # Configuração da OpenAI
├── package.json          # Dependências
├── public/
│   ├── css/
│   │   └── style.css     # Sistema de design minimalista
│   └── js/
│       └── script.js     # Lógica do frontend
└── views/
    └── index.html        # Interface HTML limpa
```
