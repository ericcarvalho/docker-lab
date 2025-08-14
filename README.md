# 🐳 Laboratório Docker: Nginx, Redis e MongoDB

Este repositório contém os arquivos e configurações utilizados no laboratório prático de Docker realizado em **14 de agosto de 2025**. O objetivo foi criar um ambiente de desenvolvimento com múltiplos containers utilizando **Docker Compose**, integrando os serviços **Nginx**, **Redis** e **MongoDB**.

## 📦 Tecnologias Utilizadas

- **Docker**: Containerização dos serviços
- **Docker Compose**: Orquestração dos containers
- **Nginx**: Servidor web reverso
- **Redis**: Armazenamento em cache e gerenciamento de sessões
- **MongoDB**: Banco de dados NoSQL

## 📁 Estrutura do Projeto
📦 Projeto Docker Lab

├── docker-compose.yml         
├── nginx/                  
│   └── default.conf           
├── app/                    
│   └── index.js                      

## ⚙️ Como Executar
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   docker-compose up -d
   http://localhost

 🧪 Objetivos do Lab
•  Aprender a configurar múltiplos serviços com Docker Compose

• 	Entender como o Nginx pode atuar como proxy reverso
• 	Integrar Redis para cache e MongoDB como banco de dados
• 	Testar comunicação entre containers

📚 Aprendizados
• 	Criação de redes internas entre containers
• 	Persistência de dados com volumes
• 	Configuração de arquivos  para Nginx
• 	Testes de conexão entre backend e Redis/MongoDB

🧠 Autor
Eric – entusiasta de tecnologia e explorador do mundo Docker.
