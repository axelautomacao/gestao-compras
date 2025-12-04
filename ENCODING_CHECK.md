# Verificação de Encoding (UTF-8)

Para evitar regressões de caracteres corrompidos, execute estes checks antes de commitar:

- Procurar sentinelas de corrupção (�):  
  ```bash
  rg "�" site/src
  ```

- Procurar “?” suspeitos em textos (ignora JS `?.`/`??`):  
  ```bash
  rg '"[^"]*\\?[^"]*"' site/src
  ```

- Opcional: bloquear arquivos não UTF-8 regravando em UTF-8 (sem BOM) se encontrar resultados.

Boas práticas:
- Salvar sempre em UTF-8 (sem BOM).
- Evitar abrir/salvar em ANSI/Windows-1252.
- Se precisar converter um arquivo, regrave com `Set-Content -Encoding utf8` (PowerShell) ou `iconv -f ISO-8859-1 -t UTF-8`.
