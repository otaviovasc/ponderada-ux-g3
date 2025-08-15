
# **Relatório de Simulação VUI – Ponderada Parte II**

## **1. Decisões de Design Tomadas**

Durante a concepção da interface de voz, buscamos seguir princípios consolidados de UX e usabilidade, como as 10 heurísticas de Nielsen, visando garantir clareza, consistência e eficiência. As escolhas estéticas e funcionais tiveram como base não apenas a estética, mas também a função, reforçando a comunicação e reduzindo a carga cognitiva do usuário.

Entre as decisões, destacam-se:

* **Diferenciação cromática entre mensagens do usuário e do sistema**:

  Optou-se pelo azul para mensagens do usuário e cinza para mensagens da IA. Esta escolha está alinhada à heurística de "visibilidade do status do sistema" e "consistência e padrões", permitindo que o usuário identifique rapidamente quem é o emissor da mensagem, reduzindo ambiguidades e melhorando o fluxo conversacional.

* **Layout minimalista e hierarquia visual**:

  A tela apresenta apenas os elementos essenciais: histórico de conversa, campo de interação e botão de fala. Esse minimalismo segue o princípio de "design estético e minimalista" de Nielsen, eliminando elementos irrelevantes e evitando sobrecarga visual.

* **Botão de fala com indicador de estado**:

  O botão “Falar” com ponto indicador de status transmite ao usuário a percepção de que o sistema está pronto para receber comandos, reforçando o feedback imediato e o mapeamento natural.

As decisões de design buscaram alinhar estética, clareza e funcionalidade, fundamentando-se em heurísticas reconhecidas. O resultado é uma interface coerente, que equilibra simplicidade visual com sinais claros de interação e status do sistema.

Perfeito, vou reformular a **seção 2** para que as duas primeiras dificuldades estejam ligadas ao **processo de desenvolvimento** e não apenas a problemas persistentes no design final. Também mantenho as seções **3** e **4** já ajustadas para ficarem coerentes com essa mudança.


## **2. Dificuldades Encontradas**

Apesar do alinhamento às boas práticas de UX, o processo de desenvolvimento da interface apresentou obstáculos que influenciaram o resultado final. Essas dificuldades estiveram mais relacionadas à tomada de decisões durante a prototipagem e à gestão dos elementos visuais na tela.

* **Definição de hierarquia visual coerente**:

  Durante a prototipagem, houve dificuldade em equilibrar a importância visual dos elementos, por exemplo, manter o botão de fala em destaque sem competir com as mensagens na área de conversa. Essa questão está ligada à heurística de "design estético e minimalista", pois exigiu diversas iterações para encontrar o equilíbrio entre destaque funcional e limpeza visual.

* **Organização do fluxo conversacional na tela**:

  A definição de espaçamentos, alinhamento e sequência de mensagens enfrentou ajustes para garantir legibilidade e coerência. Isso afetou diretamente a heurística de "consistência e padrões", já que era necessário padronizar o formato das mensagens para evitar que o usuário precisasse reaprender a estrutura a cada interação.

* **Gestão limitada do espaço de tela**:

  A exibição contínua de mensagens sem mecanismos de agrupamento ou colapso resultou em rolagem extensa. Essa limitação, percebida durante os testes de simulação, comprometeu a eficiência de uso e evidenciou a necessidade de estratégias mais eficazes de gerenciamento de conteúdo.

As dificuldades encontradas no processo reforçam a importância de prototipar rapidamente, testar com usuários reais e ajustar elementos de hierarquia e organização visual antes da entrega final, garantindo uma experiência mais fluida e coerente.

## **3. Soluções Propostas**

Com base nas dificuldades levantadas, foram definidas soluções que visam aprimorar tanto o processo de desenvolvimento quanto a experiência de uso da interface.


* **Guia visual de hierarquia**:

  Criar um guia de estilos com tamanhos, pesos e cores padronizados para títulos, botões e mensagens, facilitando a tomada de decisões visuais e garantindo consistência.

* **Padronização de layout das mensagens**:

  Estabelecer um template fixo para mensagens, definindo margens, alinhamento e espaçamento entre elementos, apoiando a heurística de consistência e padrões.

* **Agrupamento de mensagens por contexto**:

  Implementar blocos de conversas com timestamps ou separadores visuais para reduzir a rolagem e melhorar a legibilidade, fortalecendo a eficiência de uso.

Essas soluções não apenas resolvem os problemas observados, mas também estruturam o processo de design para futuras iterações, criando uma base mais sólida e replicável para a evolução da interface.


## **4. Sugestões de Melhorias para Implementação Futura**

Visando a escalabilidade e a evolução do produto, foram levantadas melhorias que poderiam potencializar a experiência do usuário e facilitar ajustes futuros.


* **Integração de testes A/B no protótipo**:

  Permitir validar diferentes versões de hierarquia visual e organização de mensagens antes da implementação final, reduzindo riscos de problemas de usabilidade.

* **Customização de interface pelo usuário**:

  Oferecer opções de tamanho de fonte, espaçamento e esquema de cores para atender diferentes perfis e necessidades, alinhando-se às diretrizes WCAG de acessibilidade.

* **Histórico pesquisável e filtrável**:

  Viabilizar que o usuário encontre mensagens passadas rapidamente, melhorando a eficiência e flexibilidade de uso.

* **Sinais multimodais de feedback**:

  Combinar microanimações, cores e sons discretos para indicar estados do sistema, reforçando a visibilidade do status.

As melhorias propostas focam em ampliar a flexibilidade, acessibilidade e previsibilidade da interface, mantendo a simplicidade e fortalecendo a confiança do usuário no sistema.

Em conclusão, o projeto de simulação VUI evidenciou um processo de design guiado por princípios sólidos de UX, resultando em uma interface simples, clara e funcional, mas que também revelou desafios importantes durante a prototipagem, especialmente no equilíbrio da hierarquia visual, na organização do fluxo conversacional e na gestão do espaço de tela. As soluções propostas e as melhorias sugeridas apontam para um caminho de evolução contínua, no qual a combinação de consistência visual, acessibilidade, personalização e feedback multimodal poderá elevar significativamente a experiência do usuário, tornando o sistema mais eficiente, inclusivo e confiável.
