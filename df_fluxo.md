# Definição do Fluxo de Interação - VUI XPTO (Sistema Atual)

## Visão Geral do Sistema Implementado

O assistente virtual da empresa XPTO é um sistema de chat por voz que permite aos usuários fazer perguntas e receber respostas através de comandos de voz em português brasileiro. O sistema utiliza reconhecimento de fala do navegador e integração com OpenAI para gerar respostas inteligentes.

### Funcionalidades Implementadas
- Reconhecimento de voz em português brasileiro (Web Speech API)
- Síntese de voz para respostas (Speech Synthesis API)
- Interface de chat em tempo real
- Integração com OpenAI GPT-3.5-turbo
- Comunicação bidirecional via Socket.IO

## Fluxo de Interação Atual

### 1. Inicialização do Sistema
**Ação do Usuário:** Acessa a página web
**Sistema:** 
- Carrega interface com botão "Falar"
- Exibe status "Pronto"
- Mostra mensagem inicial: "Olá. Clique em 'Falar' e diga sua mensagem."

### 2. Ativação por Voz
**Ação do Usuário:** Clica no botão "Falar"
**Sistema:**
- Inicia reconhecimento de voz
- Muda status para "Ouvindo"
- Botão fica vermelho com texto "Ouvindo"
- Aguarda comando de voz do usuário

### 3. Processamento da Fala
**Ação do Usuário:** Fala qualquer comando ou pergunta
**Sistema:**
- Converte fala em texto (Web Speech API)
- Exibe mensagem do usuário no chat
- Envia texto para servidor via Socket.IO
- Para o reconhecimento de voz
- Volta status para "Pronto"


### 4. Processamento no Servidor
**Servidor recebe mensagem:**
- Envia texto para OpenAI GPT-3.5-turbo
- Usa prompt do sistema: "Você é um assistente virtual amigável e útil. Responda de forma natural e conversacional em português brasileiro. Mantenha as respostas concisas e úteis."
- Limita resposta a 150 tokens
- Temperatura 0.7 para respostas naturais

### 5. Resposta do Sistema
**Sistema gera resposta:**
- Recebe resposta da OpenAI
- Envia resposta de volta para o cliente via Socket.IO
- Exibe mensagem do bot no chat
- Inicia síntese de voz para "falar" a resposta
- Sistema fica pronto para próximo comando

## Comandos Suportados (Qualquer Pergunta)

O sistema atual não tem comandos específicos. Aceita qualquer pergunta ou solicitação em linguagem natural, incluindo:

### Exemplos de Interações Possíveis:
- **Usuário:** "Olá, como você está?"
- **Sistema:** "Olá! Estou bem, obrigado por perguntar. Como posso ajudá-lo hoje?"

- **Usuário:** "Qual é o clima hoje?"
- **Sistema:** "Desculpe, não tenho acesso a informações meteorológicas em tempo real. Recomendo verificar um site de previsão do tempo."

- **Usuário:** "Me ajude com informações da empresa"
- **Sistema:** "Claro! Posso ajudar com informações gerais. Sobre o que especificamente você gostaria de saber?"

- **Usuário:** "Buscar relatórios de vendas"
- **Sistema:** "Entendo que você está procurando relatórios de vendas. No momento, não tenho acesso direto aos sistemas da empresa, mas posso orientá-lo sobre como proceder ou responder perguntas gerais sobre relatórios."


## Tratamento de Erros Implementado

### 1. Erros de Reconhecimento de Voz
- **Nenhuma fala detectada:** "Nenhuma fala detectada"
- **Sem acesso ao microfone:** "Sem acesso ao microfone"
- **Permissão negada:** "Permissão negada"
- **Erro de rede:** "Erro de rede"
- **Erro geral:** "Erro de reconhecimento"

### 2. Problemas de Compatibilidade
- **Navegador sem suporte:** Botão desabilitado + mensagem "Use Chrome ou Edge para reconhecimento de voz"
- **Sem síntese de voz:** Status "Sem síntese de voz"

### 3. Problemas de Conexão
- **Conectado:** Status "Conectado"
- **Desconectado:** Status "Desconectado"

### 4. Erros da OpenAI
- **Falha na API:** "Desculpe, não consegui processar sua mensagem no momento. Tente novamente."

## Limitações do Sistema Atual

### O que NÃO está implementado:
1. **Busca em banco de dados** - Não acessa dados reais da empresa
2. **Comandos específicos** - Não reconhece comandos estruturados como "buscar", "filtrar"
3. **Filtros** - Não aplica filtros por data, departamento, etc.
4. **Navegação em resultados** - Não pagina ou navega em listas
5. **Contexto de sessão** - Não mantém contexto entre perguntas
6. **Autenticação** - Não verifica permissões de usuário
7. **Integração com sistemas** - Não conecta com ERP, CRM ou outros sistemas

### O que o sistema faz bem:
1. **Interface intuitiva** - Fácil de usar, apenas clicar e falar
2. **Reconhecimento preciso** - Web Speech API funciona bem em português
3. **Respostas naturais** - OpenAI gera respostas conversacionais
4. **Feedback claro** - Status visual e auditivo do que está acontecendo
5. **Tempo real** - Comunicação instantânea via WebSocket

## Fluxograma Real do Sistema

```
USUÁRIO ACESSA PÁGINA
  ↓
SISTEMA CARREGA INTERFACE
  ↓
USUÁRIO CLICA "FALAR"
  ↓
INICIA RECONHECIMENTO DE VOZ
  ↓
USUÁRIO FALA QUALQUER COISA
  ↓
CONVERTE FALA → TEXTO
  ↓
EXIBE MENSAGEM DO USUÁRIO
  ↓
ENVIA PARA SERVIDOR (Socket.IO)
  ↓
SERVIDOR ENVIA PARA OPENAI
  ↓
OPENAI GERA RESPOSTA
  ↓
SERVIDOR RETORNA RESPOSTA
  ↓
EXIBE MENSAGEM DO BOT
  ↓
SINTETIZA VOZ DA RESPOSTA
  ↓
SISTEMA PRONTO PARA PRÓXIMO COMANDO
```

## Especificações Técnicas Atuais

### Frontend (Cliente)
- **HTML/CSS/JavaScript** puro
- **Web Speech API** para reconhecimento
- **Speech Synthesis API** para síntese
- **Socket.IO Client** para comunicação
- **Configuração:** Português brasileiro, sem resultados intermediários

### Backend (Servidor)
- **Node.js** com Express
- **Socket.IO** para WebSocket
- **OpenAI API** (GPT-3.5-turbo)
- **Configuração:** 150 tokens máximo, temperatura 0.7

### Configurações de Voz
- **Idioma:** pt-BR (português brasileiro)
- **Modo:** Não contínuo (para após cada fala)
- **Resultados intermediários:** Desabilitados
- **Taxa de fala:** 0.95 (ligeiramente mais lenta)
- **Tom:** 1 (normal)


## Casos de Uso Reais do Sistema

### 1. Assistente Geral
**Cenário:** Usuário faz perguntas gerais
- **Usuário:** "Como calcular porcentagem?"
- **Sistema:** Explica como calcular porcentagem com exemplos

### 2. Orientação e Ajuda
**Cenário:** Usuário precisa de orientações
- **Usuário:** "Como faço para acessar o sistema de RH?"
- **Sistema:** Fornece orientações gerais sobre acesso a sistemas

### 3. Conversação Natural
**Cenário:** Usuário quer conversar
- **Usuário:** "Bom dia, como está o dia?"
- **Sistema:** Responde de forma amigável e pergunta como pode ajudar

### 4. Simulação de Busca (Limitada)
**Cenário:** Usuário pede busca, mas sistema não tem acesso real
- **Usuário:** "Buscar dados de vendas de janeiro"
- **Sistema:** "Entendo que você precisa de dados de vendas de janeiro. No momento não tenho acesso direto aos sistemas, mas posso orientá-lo sobre onde encontrar essas informações."

## Interface do Usuário

### Elementos Visuais
- **Botão Principal:** "Falar" (azul) / "Ouvindo" (vermelho)
- **Indicador de Status:** Texto informativo do estado atual
- **Chat:** Mensagens do usuário (direita, azul) e bot (esquerda, cinza)
- **Avatares:** "Você" para usuário, "AI" para bot

### Estados Visuais
- **Pronto:** Botão azul, status "Pronto"
- **Ouvindo:** Botão vermelho, status "Ouvindo"
- **Processando:** Status mostra estado atual
- **Erro:** Status mostra tipo de erro por 2.5 segundos

## Conclusão

Este documento reflete o sistema VUI atual implementado pela equipe. É um **assistente de chat por voz** funcional que:

**Funciona bem para:**
- Conversação geral em português
- Perguntas e respostas abertas
- Interface intuitiva de voz
- Demonstração de conceito VUI

**Não funciona para:**
- Busca real em dados da empresa
- Filtros específicos
- Comandos estruturados
- Integração com sistemas corporativos

O sistema serve como uma **base sólida** para futuras expansões, mas atualmente é um assistente conversacional geral, não um sistema de busca e filtragem específico para dados da XPTO.

