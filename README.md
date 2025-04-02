# 📘 Documentação do Projeto Fullstack - KPMG

## 📌 Descrição

Aplicação fullstack desenvolvida para o desafio técnico da KPMG, com foco em cadastro, listagem, edição e remoção de empresas, utilizando tecnologias modernas e boas práticas de arquitetura, testes e organização de código.

## 🧱 Tecnologias Utilizadas

React 19 + Vite

TypeScript

Material UI

React Router DOM

React Hook Form + Zod

TanStack React Query

Zustand (para loading global e casos pontuais)

Date-fns (com locale ptBR)

## 📁 Estrutura do Projeto

```plaintext
src/
├── pages/
│   └── CompanyListPage.tsx
├── components/
│   ├── ReusableComponents.tsx
│   ├── CustomButton.tsx
│   └── CustomTypography.tsx
├── hooks/
├── stores/
├── helpers/
├── services/
└── types/

```

## 🔄 Funcionalidades

### 📦 Empresas (Companies)

Tabela expansível com informações detalhadas

Busca dinâmica por nome ou nome fantasia

Paginação reativa

Confirmação de remoção com modal

Carregamento de empresas via hook com React Query

### 🛠 Utilitários Relevantes

toBrasiliaTime() – função para ajustar timezone.

useFetchCompanies – hook para integração paginada.

useConfirmDialog – controle de modais reutilizável.

## 🔧 Como Executar o Projeto

```bash
cd client
cp .env.example .env
npm install
npm run dev
```

### *OBS.: Configure as variáveis de ambiente do .env*

O app estará acessível em: http://localhost:5173
