# 💱 Dev Conversor de Moedas

Um projeto simples e moderno para conversão de moedas, desenvolvido em **HTML**, **CSS** e **JavaScript puro**, com design responsivo e efeitos visuais animados.  
Ideal para praticar manipulação do DOM, uso de condicionais e formatação monetária com `Intl.NumberFormat()`.

---

## 🚀 Funcionalidades

- Conversão **de Real (BRL)** para:
  - 🇺🇸 Dólar (USD)
  - 🇪🇺 Euro (EUR)
  - 🇬🇧 Libra Esterlina (GBP)
  - ₿ Bitcoin (BTC)
- Interface amigável com feedback visual instantâneo.  
- Exibição do valor convertido formatado corretamente de acordo com a moeda e região.  
- Efeito de **chuva de moedas animada** em segundo plano.  
- Design limpo e responsivo, com destaque para o tema financeiro.  

---

## 🧠 Conceitos aplicados

- Manipulação do DOM (`querySelector`, `addEventListener`)
- Funções condicionais com `if/else`
- Formatação de valores monetários com `Intl.NumberFormat`
- Criação de animações em CSS (`@keyframes`)
- Estrutura de projeto modular e sem frameworks

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Uso principal |
|-------------|----------------|
| **HTML5** | Estrutura semântica da página |
| **CSS3** | Estilização e animações |
| **JavaScript (ES6)** | Lógica de conversão e interação com o usuário |
| **Google Fonts (Oswald & Roboto)** | Tipografia moderna |
| **Imagens SVG/PNG** | Ícones de moedas e bandeiras |

---

## 📂 Estrutura de pastas

📦 dev-conversor-de-moedas
├── assets/
│ ├── arrow.png
│ ├── real.png
│ ├── dolar.png
│ ├── euro.png
│ ├── libra-1.png
│ ├── bitcoin-1.png
│ ├── coin.png
│ └── moneylogo.png
├── index.html
├── style.css
├── script.js
└── README.md


---

## ⚙️ Como executar o projeto

1. **Baixe ou clone** este repositório:
   ```bash
   git clone https://github.com/daivin11/dev-conversor-de-moedas.git


Abra o projeto no VS Code.

Use a extensão Live Server (ou abra o index.html diretamente no navegador).

Digite o valor em reais, escolha a moeda desejada e clique em Converter.

💡 Observações importantes

Os valores de conversão estão definidos fixamente no código (script.js):

Dólar: 5.20

Euro: 6.20

Libra: 7.25

Bitcoin: 592500

É possível integrar uma API de câmbio (ex: CoinGecko
) para atualizar os valores em tempo real.

✨ Melhorias futuras

 Conectar a uma API de câmbio em tempo real

 Adicionar histórico de conversões

 Melhorar responsividade para mobile

 Tema escuro / claro automático

🎨 Créditos visuais

Ícones e imagens: criadas com auxílio do ChatGPT (modo DALL-E).

Design e animações CSS desenvolvidos manualmente.

👨‍💻 Autor

David Soares
💼 Projeto desenvolvido para estudos de JavaScript e manipulação de DOM.
📧 Contato: daivinsoares11@gmail.com
🌐 GitHub: @daivin11