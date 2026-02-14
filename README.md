# 🌤️ Weather API – OpenWeatherMap

API REST desenvolvida em **Node.js + TypeScript** que fornece informações de previsão do tempo utilizando a **OpenWeatherMap API**.  
Projeto criado com foco em boas práticas, separação de responsabilidades, DTOs e documentação automática com Swagger.

---

## 🚀 Tecnologias Utilizadas

- Node.js
- TypeScript
- Express
- Axios
- dotenv
- Swagger (OpenAPI)
- OpenWeatherMap API

---

## 📦 Funcionalidades

- Consulta de clima atual por cidade
- Consulta de previsão do tempo por data específica
- DTOs separados para entrada e saída
- Documentação automática via Swagger

---

## 🔧 Pré-requisitos

- Node.js >= 18
- Conta na OpenWeatherMap (para obter API Key)

---

## ⚙️ Configuração do Projeto

### 1️⃣ Clone o repositório
git clone https://github.com/dayapaline/Climate_API.git
cd SEU_REPO
### 2️⃣ Instale as dependências
npm install

### 3️⃣ Crie o arquivo .env
PORT=3000
OPENWEATHER_API_KEY=YOUR_API_KEY_HERE


⚠️ O arquivo .env não deve ser versionado.

### ▶️ Executando o Projeto
Ambiente de desenvolvimento
npm run dev


A API ficará disponível em:

http://localhost:3000

### 📄 Documentação da API (Swagger)

Após subir a aplicação, acesse:

http://localhost:3000/api-docs

### 🌎 Exemplos de Endpoints
🔹 Clima atual por cidade
GET /weather?city=Sao Paulo

🔹 Previsão por data específica
GET /weather/date?city=Sao Paulo&date=15/02/2026

### 🧪 Exemplo de Resposta
{
  "city": "São Paulo",
  "date": "2026-02-15",
  "temperature": 26.4,
  "description": "céu limpo",
  "humidity": 65
}

### ☁️ Deploy

A aplicação pode ser facilmente hospedada utilizando:

Railway

Render

Vercel

Servidor próprio com ngrok

As variáveis de ambiente devem ser configuradas diretamente na plataforma de deploy.

📁 Estrutura do Projeto
src/
 ├── docs/
 ├── services/
 ├── dtos/
 ├── routes/
 ├── config/
 └── server.ts

### 🛡️ Boas Práticas Aplicadas

Separação de DTOs de entrada e saída

Variáveis sensíveis protegidas via .env

Código tipado com TypeScript

Organização por camadas


📄 Licença

Este projeto está sob a licença MIT.

👩‍💻 Autora

Dayane Apaline Madeira
Engenheira da Computação
[LinkedIn](https://www.linkedin.com/in/dayane-apaline-madeira-898940120)
