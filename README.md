# Painel - Site para Vercel

Site estilo painel com página de login, pronto para hospedar na [Vercel](https://vercel.com).

## Rodar localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000). A página de login está em `/login`.

## Como subir no Git (GitHub)

Se o Git ainda não estiver instalado, baixe em: [git-scm.com](https://git-scm.com/download/win).

### 1. Inicializar o repositório

No terminal, dentro da pasta do projeto:

```bash
cd "c:\Users\Malak\Downloads\Projeto Ebook"
git init
```

### 2. Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login.
2. Clique em **+** (canto superior direito) → **New repository**.
3. Dê um nome (ex: `painel-ebook`), deixe **público** e **não** marque "Add a README".
4. Clique em **Create repository**.

### 3. Conectar e enviar o código

No terminal (troque `SEU-USUARIO` e `painel-ebook` pelo seu usuário e nome do repositório):

```bash
git add .
git commit -m "Primeiro commit - painel com login"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/painel-ebook.git
git push -u origin main
```

Se o GitHub pedir login, use seu usuário e um **Personal Access Token** como senha (em GitHub → Settings → Developer settings → Personal access tokens).

Depois disso, o projeto estará no GitHub e você pode importá-lo na Vercel pelo repositório.

## Deploy na Vercel

1. Crie uma conta em [vercel.com](https://vercel.com) (pode usar GitHub).
2. Clique em **Add New** → **Project**.
3. Importe este repositório (ou faça upload da pasta).
4. A Vercel detecta Next.js automaticamente. Clique em **Deploy**.

Ou use a CLI:

```bash
npm i -g vercel
vercel
```

Siga os passos e seu site ficará online com uma URL como `seu-projeto.vercel.app`.

## Estrutura

- `/` — Página inicial com link para login
- `/login` — Página de login (e-mail, senha, “lembrar de mim”, link “esqueci a senha”)

O formulário de login está preparado para você conectar à sua API de autenticação depois.
