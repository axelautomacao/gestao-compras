# Mapa de Arquivos - Novo App (./site)

## Raiz
*   `package.json`: Dependências (vite, tailwindcss, firebase, chart.js).
*   `vite.config.js`: Configuração do Vite.
*   `tailwind.config.js`: Configuração do Tailwind (Cores, Fontes).
*   `postcss.config.js`: Configuração do PostCSS.
*   `index.html`: Entry point HTML.

## src/config
*   `firebase.js`: Inicialização do Firebase (Auth, Firestore, Storage).
*   `constants.js`: Constantes globais (Roles, Status, Tipos).

## src/core
*   `store.js`: Gerenciamento de estado global (Usuário, Obra Atual, Tema).
*   `router.js`: Gerenciamento de navegação (Hash based).
*   `events.js`: Sistema de Pub/Sub para eventos globais (se necessário).

## src/utils
*   `formatters.js`: Formatação de Moeda, Data, CPF/CNPJ.
*   `validators.js`: Validações de formulário.
*   `helpers.js`: Funções auxiliares diversas.

## src/services
*   `auth.service.js`: Wrapper para Firebase Auth.
*   `firestore.service.js`: Wrapper genérico para Firestore.
*   `storage.service.js`: Wrapper para Firebase Storage.
*   `api.service.js`: Integrações externas (se houver).

## src/modules
### auth
*   `auth.controller.js`: Lógica de Login/Signup.
*   `auth.view.js`: Renderização das telas de Auth.

### dashboard
*   `dashboard.controller.js`: Lógica do Dashboard.
*   `dashboard.view.js`: Renderização dos Gráficos e KPIs.

### compras
*   `compras.controller.js`: Lógica de Cadastro/Edição.
*   `compras.view.js`: Renderização dos Formulários e Listas.
*   `compras.model.js`: Definição do objeto Compra.

### obras
*   `obras.controller.js`: Lógica de Gestão de Obras.
*   `obras.view.js`: Renderização.

### reports
*   `reports.controller.js`: Lógica de Relatórios.
*   `reports.view.js`: Renderização de Tabelas/Kanban.

### settings
*   `settings.controller.js`: Configurações de Usuário/Sistema.
*   `settings.view.js`: Renderização.

## src/ui
*   `components.js`: Componentes reutilizáveis (Botões, Modais, Inputs).
*   `layout.js`: Gerenciamento do Layout Principal (Sidebar, Header).
*   `icons.js`: Ícones SVG centralizados.
*   `theme.js`: Gerenciamento de Tema (Dark/Light).

## src/assets
*   `logo.png`
*   `favicon.png`
