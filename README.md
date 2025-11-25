# App Gestao de Compras Axel

Estrutura inicial para uma SPA vanilla pronta para integrar com Firebase Hosting ou qualquer outra infraestrutura.

```
.
+-- dist/               # saida estatica publicada no Firebase Hosting
+-- src/
|   +-- assets/         # imagens e fontes brutas
|   +-- components/     # componentes reutilizaveis
|   +-- context/        # controle central de estado
|   +-- hooks/          # utilitarios assincronos
|   +-- pages/          # rotas/telas da aplicacao
|   +-- router/         # configuracao e logica de rotas
|   +-- services/       # chamadas a APIs externas
|   +-- styles/         # estilos globais e utilitarios
|   +-- utils/          # helpers gerais
|   +-- main.js         # ponto de entrada da SPA
+-- tests/              # futuros testes automatizados
```

## Proximos passos

1. Inicializar o repositorio com `npm init` ou configurar Vite/React, caso prefira um bundler.
2. Ajustar `dist/index.html` conforme o empacotador escolhido (ou gerar o build apontando para esta pasta).
3. Implementar as paginas reais, rotas e servicos de dados.
