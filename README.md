###  **README.md para o `marketplace-app`**

```md
 🛒 Marketplace App

Este é um projeto full-stack desenvolvido como parte de um desafio técnico, utilizando AdonisJS para o back-end e React.js para o front-end. A aplicação simula um marketplace de roupas, permitindo a exibição de produtos, aplicação de filtros, ordenação e adição de itens ao carrinho.

---

## Tecnologias Utilizadas
- Back-End: [AdonisJS](https://adonisjs.com/) (API RESTful)
- Front-End: [React.js](https://reactjs.org/) + [PrimeReact](https://primereact.org/)
- Gerenciador de Pacotes: npm
- Estilização: TailwindCSS + PrimeReact
- Banco de Dados Simulado:`data.json`
- Servidor de Desenvolvimento: Vite (para o front)

---

##  1. Como Rodar o Projeto?

### 1.1 Pré-requisitos
Antes de começar, certifique-se de ter instalado:
- Node.js (versão 16 ou superior) → [Baixar aqui](https://nodejs.org/)
- npm (vem junto com o Node.js)
- Git (para clonar o repositório)

### 1.2 Clonando o Repositório
```bash
git clone https://github.com/JhenyfferRidieri/marketplace-app.git
cd marketplace-app
```

---

## 2. Rodando a API - AdonisJS

### 2.1 Instalando Dependências
```bash
cd API  
npm install
```

### 2.2 Configurando Variáveis de Ambiente
Renomeie o arquivo `.env.example` para `.env` e configure a porta da API, se necessário:
```
PORT=3333
HOST=127.0.0.1
```

### 2.3 Rodando o Servidor
```bash
adonis serve --dev
```
**A API estará rodando em:** `http://127.0.0.1:3333`

Para testar, acesse `http://127.0.0.1:3333/products` no navegador ou no Postman.

---

## 3. Rodando o Front React.js

### 3.1 Instalando Dependências
```bash
cd Front  
npm install
```

### 3.2 Configurando a URL da API
Verifique se o arquivo `.env` contém:
```
VITE_API_URL=http://127.0.0.1:3333
```

### 3.3 Rodando o Servidor
```bash
npm run dev
```
*O front estará rodando em:* `http://localhost:5173`

---

##  4. Funcionalidades Implementadas
🔹**Exibição de produtos** com nome, preço e imagem 

🔹**Modal de detalhes** ao clicar em um produto e podendo adicioná-lo ao carrinho de compras

🔹**Carrinho de compras**, uma nova página com opção de adicionar e remover itens ou finalizar compra (estoura um alert)

🔹**Filtro por categoria, cor e tamanho** funcionais 

🔹**Ordenação por preço (maior e menor preço)**  funcional

🔹**Barra de busca para encontrar produtos**  funcional

🔹**Paginação dos produtos**  funcional 

🔹**API RESTful em AdonisJS** consumida pelo front-end  

---

 **Desenvolvido por:** [Jhenyffer Ridieri](https://github.com/JhenyfferRidieri)

