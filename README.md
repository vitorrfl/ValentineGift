# 🌸 Interactive Floral Scene & Animated Canvas 🌠

## 📄 Descrição do Projeto

Uma aplicação web de página única, totalmente responsiva, que demonstra técnicas avançadas de animação em CSS e interatividade em tempo real com JavaScript e HTML Canvas. O projeto apresenta uma cena floral animada e um céu estrelado interativo que reage aos movimentos do usuário.

Originalmente concebido como um presente pessoal, este projeto evoluiu para um "playground" técnico, servindo como uma demonstração de habilidades em animações complexas, manipulação do DOM e renderização em Canvas.

## ✨ Funcionalidades Principais

* **Navegação App-Like:** Transição suave entre duas seções de tela cheia, controlada por JavaScript sem o uso de scrollbars.
* **Cenário Floral em CSS Puro:** Toda a paisagem de flores e plantas na primeira seção é construída e animada exclusivamente com CSS, utilizando keyframes e variáveis para criar um ambiente orgânico e vivo.
* **Fundo Interativo com Canvas:**
    * Um céu estrelado com centenas de partículas renderizadas em um `<canvas>` para alta performance.
    * As estrelas são repelidas em tempo real pelo cursor do mouse do usuário.
    * Um efeito de "estrela cadente" é acionado aleatoriamente, com uma cauda suave e trajetória em arco, para dar mais dinamismo à cena.
* **Componentes Interativos:**
    * **Envelope Animado:** Um envelope que se abre e fecha com uma sequência de animação CSS temporizada.
    * **Modal de Carta Expansível:** A carta pode ser "puxada" do envelope e expandida em uma janela modal centralizada, com um efeito de foco (lightbox) que escurece o fundo.
    * **Micro-interações:** Ícones como o coração no título possuem animações sutis ativadas por clique.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica do projeto.
* **CSS3:**
    * `Flexbox` para alinhamento dos layouts.
    * Variáveis CSS (`--var`) para fácil manutenção e temas.
    * Animações Avançadas com `@keyframes`, `transform` e `transition` com delays customizados.
    * `backdrop-filter` para o efeito de "vidro fosco" no fundo da carta.
    * `clamp()` para tipografia e dimensionamento fluidos.
* **JavaScript (ES6+):**
    * Manipulação do DOM para gerenciar estados e classes.
    * Listeners de Eventos (`click`, `mousemove`, `resize`) para interatividade.
    * API do Canvas (`2D Context`) para renderizar e animar o céu estrelado.
    * `requestAnimationFrame` para criar um loop de animação performático.

## 💡 Destaques Técnicos e Desafios

* **Animação da Carta Expansível:** A animação fluida da carta, saindo do envelope e se expandindo para o centro da tela, foi um desafio interessante. A solução final utiliza um sistema de "modal" desacoplado, onde o estado é controlado por uma única classe no `<body>`, e o CSS gerencia 100% da animação de transição, garantindo performance e estabilidade.
* **Física das Partículas no Canvas:** A interação das estrelas com o mouse foi implementada com uma simulação de física simples. Cada partícula tem propriedades como velocidade, atrito e força de retorno à sua posição original, resultando em um movimento orgânico e sutil.

## 🚀 Como Executar

Não é necessário nenhum processo de build ou instalação.

1.  Clone este repositório:
    ```bash
    git clone [https://github.com/vitorrfl/ValentineGift.git]
    ```
2.  Abra o arquivo `index.html` em qualquer navegador moderno.
3.  Para a melhor experiência, utilize uma extensão como "Live Server" no VS Code.

---

**Desenvolvido por: [vitorrfl]](https://github.com/vitorrfl)**