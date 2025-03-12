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

## 2. Rodando o Back-End (API - AdonisJS)

### 2.1 Instalando Dependências
```bash
cd API  # Acesse a pasta da API
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

## 3. Rodando o Front-End (React.js)

### 3.1 Instalando Dependências
```bash
cd ../Front  # Acesse a pasta do front-end
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
**Exibição de produtos** com nome, preço e imagem  
**Modal de detalhes** ao clicar em um produto  
**Carrinho de compras** com opção de adicionar e remover itens  
**Filtro por categoria, cor e tamanho**  
**Ordenação por preço (maior e menor preço)**  
**Barra de busca para encontrar produtos**  
**Paginação dos produtos**  
**API RESTful em AdonisJS** consumida pelo front-end  

---

##  5. Estrutura do Projeto
```
marketplace-app/
│── API/                # Back-End (AdonisJS)
│   ├── app/            # Controllers, Models
│   ├── database/       # Simulação de banco de dados (data.json)
│   ├── start/          # Configurações do servidor
│   ├── .env.example    # Arquivo de configuração do ambiente
│   ├── server.js       # Arquivo de inicialização da API
│   ├── README.md       # Documentação da API
│
│── Front/              # Front-End (React.js + Vite)
│   ├── src/            # Código-fonte principal
│   ├── public/         # Assets públicos
│   ├── vite.config.js  # Configuração do Vite
│   ├── README.md       # Documentação do Front-End
│
│── README.md           # Documentação geral do projeto
│── .gitignore          # Arquivos ignorados pelo Git
│── package.json        # Dependências do projeto
```

---

## **6. Endpoints da API**
| Método | Rota                  | Descrição                          |
|--------|----------------------|----------------------------------|
| GET    | `/products`           | Retorna todos os produtos        |
| GET    | `/products/:id`       | Retorna detalhes de um produto   |
| GET    | `/products?category=X` | Filtra produtos por categoria   |
| GET    | `/products?size=X`     | Filtra produtos por tamanho      |
| GET    | `/products?color=X`    | Filtra produtos por cor          |

---

## **7. Melhorias Futuras**
🔹 Implementar persistência do carrinho (`localStorage` ou banco de dados)  
🔹 Criar um painel administrativo para gerenciar produtos  
🔹 Melhorar a responsividade para dispositivos móveis  
🔹 Implementar autenticação de usuários  

---

## 8. Contribuições
Contribuições são bem-vindas! Se quiser sugerir melhorias, abra uma **Issue** ou faça um **Pull Request**.

 **Desenvolvido por:** [Jhenyffer Ridieri](https://github.com/JhenyfferRidieri)
```
