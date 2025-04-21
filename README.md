# Netflix Clone 🎬

<p align="center">
    Um clone da Netflix desenvolvido para fins educacionais, com autenticação, integração com a API do TMDB, trailers, busca e muito mais.
</p>

---

## ✨ Funcionalidades

- 🔐 **Autenticação com JWT** – cadastro, login, logout com segurança  
- 📱 **Interface Responsiva** – construída com Tailwind CSS  
- 🎬 **Navegação por filmes/séries populares** – dados da [API TMDB](https://www.themoviedb.org/)  
- 🔎 **Busca por títulos, atores e gêneros**  
- 🎥 **Assistir trailers** diretamente no aplicativo com player embutido  
- 🔥 **Histórico de busca** – salve e visualize suas pesquisas anteriores  
- 🐱‍👤 **Recomendações de conteúdo similar**  
- 💙 **Landing Page de destaque**  
- 🚀 **Preparado para produção**

---

## 🚀 Tecnologias Utilizadas

### Frontend

- **React.js**  
- **Vite**  
- **Tailwind CSS**  
- **React Router DOM**  
- **Axios**  
- **Zustand**  
- **React Player**  
- **React Hot Toast**  
- **Lucide React**

### Backend

- **Node.js**  
- **Express.js**  
- **MongoDB** com **Mongoose**  
- **JWT** e **bcrypt.js** para autenticação  
- **dotenv**, **cookie-parser**, **Nodemon**

### Ferramentas

- **Insomnia** para testes de API  
- **TMDB** como provedor de dados

---

## 📸 Capturas de Tela

<p align="center">
    <img src="/Frontend/public/hero-screenshot.png" alt="Página Inicial" width="300" /> &nbsp;
    <img src="/Frontend/public/home-screenshot.png" alt="Tela Principal" width="300" /> &nbsp;
    <img src="/Frontend/public/signup-screenshot.png" alt="Tela Inscreva-se" width="300" /> &nbsp;
    <img src="/Frontend/public/login-screenshot.png" alt="Tela Login" width="300" /> &nbsp;
    <img src="/Frontend/public/watch-screenshot.png" alt="Assistir Trailer" width="300" /> &nbsp;
    <img src="/Frontend/public/watch2-screenshot.png" alt="Trailer Continuado" width="300" /> &nbsp;
    <img src="/Frontend/public/watch3-screenshot.png" alt="Trailer - Similares" width="300" /> 
</p>

---

## 🏁 Como Executar Localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/) versão 16 ou superior  
- [npm](https://npmjs.com/)
- Conta e chave da API no [TMDB](https://developers.themoviedb.org/3)

---

## 🔧 Configuração de Variáveis de Ambiente

Crie um arquivo `.env` nas pastas correspondentes:

### 📁 Backend

```ini
PORT=5000
MONGO_URI=your_mongo_connection_string
NODE_ENV=development
JWT_SECRET=your_jwt_secret_key
TMDB_API_KEY=your_tmdb_api_key
```

---

### ▶️ Rodando o Projeto

1. Instale as dependências:

     ```bash
     # Na raiz de frontend e backend
     npm install
     ```

2. Inicialize o servidor backend:

     ```bash
     cd backend
     npm run dev
     ```

3. Inicialize o frontend:

     ```bash
     cd frontend
     npm run dev
     ```

---

## 📚 Créditos

Este projeto foi desenvolvido com fins educacionais, inspirado na interface da Netflix e usando dados da API pública do TMDB.
Inspirado também neste vídeo do canal Codelândia:  
📺 [Como criar um clone da Netflix com React \+ Tailwind \+ Node \+ MongoDB](https://www.youtube.com/watch?v=gRroBZczKAU&list=PLNU5tcvE4EcSPOX6vbqrJeEJqV_fG840S&index=27&t=14629s)

---

## 🧑‍💻 Autor

Feito por **Luizin**.