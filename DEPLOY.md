# Como Fazer o Deploy do Novo App

Siga estes passos para publicar a nova versão do aplicativo (pasta `./site`) no seu domínio Firebase.

## 1. Preparar o Build (Versão de Produção)
Primeiro, precisamos gerar os arquivos otimizados para produção.

1.  Abra o terminal na pasta `site`:
    ```powershell
    cd site
    ```
2.  Instale as dependências (se ainda não fez):
    ```powershell
    npm install
    ```
3.  Gere o build:
    ```powershell
    npm run build
    ```
    *Isso criará uma pasta `dist` dentro de `site` (`site/dist`).*

## 2. Configurar o Firebase
Precisamos avisar ao Firebase que os arquivos do site agora estão em `site/dist`, e não mais na pasta `dist` antiga da raiz.

1.  Volte para a pasta raiz do projeto:
    ```powershell
    cd ..
    ```
2.  Abra o arquivo `firebase.json` na raiz.
3.  Altere a linha `"public": "dist"` para:
    ```json
    "public": "site/dist"
    ```

## 3. Publicar
Agora basta enviar para o servidor.

1.  Na pasta raiz, execute:
    ```powershell
    firebase deploy --only hosting
    ```

## Reverter (Caso algo dê errado)
Se precisar voltar para a versão antiga rapidamente:
1.  No `firebase.json`, mude de volta para `"public": "dist"`.
2.  Rode `firebase deploy --only hosting` novamente.
