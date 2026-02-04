# Prime Flix 🎬

Uma aplicação web para descobrir, visualizar e gerenciar seus filmes favoritos utilizando a API do The Movie Database (TMDb).

## 📋 Índice

- [Como Rodar Localmente](#como-rodar-localmente)
- [Bibliotecas Utilizadas](#bibliotecas-utilizadas)
- [Arquitetura do Projeto](#arquitetura-do-projeto)
- [Componentes](#componentes)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Funcionalidades](#funcionalidades)

## 🚀 Como Rodar Localmente

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm (geralmente incluído com Node.js)

### Passos para Instalação

1. **Clone ou extraia o projeto**
   ```bash
   cd Prime-flix
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**
   ```bash
   npm start
   ```

4. **Acesse a aplicação**
   - A aplicação abrirá automaticamente no navegador em `http://localhost:3000`
   - Caso contrário, abra manualmente o endereço acima

### Scripts Disponíveis

#### `npm start`
Executa a aplicação em modo de desenvolvimento. A página recarregará ao detectar alterações no código.

#### `npm run build`
Cria uma versão otimizada da aplicação para produção na pasta `build`. O código será minificado e os nomes de arquivo incluirão hashes para cache.

#### `npm test`
Executa os testes da aplicação em modo interativo.

---

## 📚 Bibliotecas Utilizadas

| Biblioteca | Versão | Descrição |
|-----------|--------|-----------|
| **react** | ^19.2.4 | Biblioteca principal para construção da interface |
| **react-dom** | ^19.2.4 | Renderização de componentes React no DOM |
| **react-router-dom** | ^7.13.0 | Roteamento e navegação entre páginas |
| **axios** | ^1.13.4 | Cliente HTTP para requisições à API |
| **react-toastify** | ^11.0.5 | Notificações toast (alertas) na interface |
| **react-scripts** | 5.0.1 | Scripts e configurações do Create React App |

### Bibliotecas de Teste
- `@testing-library/react` - Testes de componentes React
- `@testing-library/jest-dom` - Matchers customizados para Jest
- `@testing-library/dom` - Utilitários para testes DOM
- `@testing-library/user-event` - Simulação de eventos de usuário

---

## 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura modular baseada em componentes React com a seguinte estrutura:

### Fluxo de Dados

```
App.js (Componente Raiz)
├── ToastContainer (Notificações)
└── RoutesApp (Sistema de Rotas)
    ├── Header (Navegação)
    └── Routes (Páginas)
        ├── Home (Listagem de filmes)
        ├── Filmes/:id (Detalhes do filme)
        ├── Favoritos (Filmes salvos)
        └── Erro (Página 404)
```

### Padrões de Arquitetura

- **Separação por Responsabilidade**: Componentes, páginas e serviços são separados em pastas distintas
- **API Service**: Centralização de requisições HTTP em um único serviço (`api.js`)
- **LocalStorage**: Persistência de dados do lado do cliente para armazenar filmes favoritos
- **React Router**: Navegação entre diferentes páginas/rotas
- **State Management**: Uso de `useState` e `useEffect` para gerenciar estado e efeitos colaterais

---

## 🧩 Componentes

### **Header**
**Localização:** `src/components/Header/`

Componente de navegação principal da aplicação.

**Características:**
- Logo que redireciona para a página inicial
- Link para acessar lista de filmes favoritos
- Navegação usando React Router

**Props:** Nenhuma

---

## 📄 Páginas

### **Home** 📽️
**Localização:** `src/pages/Home/`

Página inicial que exibe uma lista de filmes em cartaz.

**Funcionalidades:**
- Carrega filmes da API TMDb
- Exibe os 15 filmes mais recentes em cartaz
- Estado de carregamento enquanto busca os dados
- Cards clicáveis que levam aos detalhes do filme
- Dados filtrados por idioma português (pt-BR)

**Estados:**
- `filmes` - Array com os filmes carregados
- `loading` - Booleano indicando se está carregando

---

### **Filmes (Detalhes do Filme)** 🎥
**Localização:** `src/pages/Filmes/`

Página de detalhes de um filme específico.

**Funcionalidades:**
- Carrega informações completas do filme via parâmetro de rota (`id`)
- Exibe título, descrição, votação, data de lançamento
- Botão para salvar o filme nos favoritos
- Notificações com avisos/sucessos usando React Toastify
- Tratamento de erros com redirecionamento automático
- Armazenamento em localStorage

**Estados:**
- `filme` - Objeto com dados do filme
- `loading` - Indicador de carregamento

**Comportamento:**
- Valida se o filme já está nos favoritos antes de salvar
- Exibe notificações de sucesso ou aviso
- Redireciona para home se o filme não existir

---

### **Favoritos** ❤️
**Localização:** `src/pages/Favoritos/`

Página que exibe todos os filmes salvos pelo usuário.

**Funcionalidades:**
- Carrega filmes do localStorage
- Exibe lista de filmes favoritos
- Opção para remover filmes da lista
- Mensagem quando nenhum filme está salvo
- Notificações de exclusão com sucesso

**Estados:**
- `filmes` - Array com os filmes salvos

---

### **Erro** ⚠️
**Localização:** `src/pages/Erro/`

Página para rotas não encontradas (404).

**Funcionalidades:**
- Rota coringa (`*`) captura URLs inválidas
- Exibe mensagem amigável de erro

---

## 📁 Estrutura de Pastas

```
Prime-flix/
├── public/                          # Arquivos públicos estáticos
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/                             # Código-fonte principal
│   ├── components/                  # Componentes reutilizáveis
│   │   └── Header/
│   │       ├── index.js
│   │       └── header.css
│   ├── pages/                       # Páginas da aplicação
│   │   ├── Home/
│   │   │   ├── index.js
│   │   │   └── home.css
│   │   ├── Filmes/
│   │   │   ├── index.js
│   │   │   └── filme-info.css
│   │   ├── Favoritos/
│   │   │   ├── index.js
│   │   │   └── favoritos.css
│   │   └── Erro/
│   │       ├── index.js
│   │       └── erro.css
│   ├── services/                    # Serviços de API
│   │   └── api.js
│   ├── App.js                       # Componente raiz
│   ├── index.js                     # Ponto de entrada
│   ├── index.css                    # Estilos globais
│   └── routes.js                    # Configuração de rotas
├── package.json                     # Dependências e scripts
└── README.md                        # Este arquivo
```

---

## ⚙️ Serviços

### **API Service** (`src/services/api.js`)

Centraliza todas as requisições HTTP para a API do TMDb.

**Características:**
- Utiliza `axios` para requisições
- Base URL configurada: `https://api.themoviedb.org/3/`
- Reutilizável em toda a aplicação

**Exemplo de uso:**
```javascript
import api from '../../services/api';

// Buscar filmes em cartaz
api.get("movie/now_playing", {
  params: {
    api_key: "sua_chave_api",
    language: "pt-BR"
  }
})
```

---

## 💾 Persistência de Dados

A aplicação utiliza **localStorage** para armazenar filmes favoritos:

- **Chave:** `@primeflix`
- **Formato:** JSON (array de objetos com dados do filme)
- **Funcionalidade:** 
  - Salvar filmes favoritos
  - Carregar filmes ao abrir a página
  - Remover filmes da lista

---

## 🎯 Funcionalidades Principais

✅ Listar filmes em cartaz
✅ Visualizar detalhes de cada filme
✅ Salvar filmes favoritos
✅ Gerenciar lista de favoritos (adicionar/remover)
✅ Persistência de dados com localStorage
✅ Notificações amigáveis ao usuário
✅ Navegação intuitiva
✅ Tratamento de erros e rotas inválidas
✅ Interface responsiva

---

## 🔗 API Utilizada

**The Movie Database (TMDb)**
- Site: [https://www.themoviedb.org/](https://www.themoviedb.org/)
- Documentação: [https://developer.themoviedb.org/docs](https://developer.themoviedb.org/docs)
- Requisitos: Chave de API (obtida gratuitamente no site)

---

## 📝 Notas Importantes

- A aplicação foi criada com **Create React App**
- A chave de API do TMDb está exposta no código (considere usar variáveis de ambiente em produção)
- Os dados de favoritos são armazenados localmente no navegador (não sincroniza entre dispositivos)

---

## 📄 Licença

Este projeto foi desenvolvido como aplicação educacional.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
