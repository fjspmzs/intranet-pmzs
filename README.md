# Intranet GovBR (novo modelo)
Com Angular & Strapi. Tutorial completo ⭐

![Captura de tela 2024-10-17 164734](https://github.com/user-attachments/assets/1767a101-3ce4-472e-9034-bad553b6db25)

## Boas-vindas! 👋

Olá pessoal! Sou o Tenente Daisuke. Nesse repositório vou explicar como subir a sua nova intranet de maneira simples e descomplicada. 

Devo começar dizendo sobre os recursos que serão possíveis subir com esse repositório, pois muitas OM's usam maneiras diferentes de disponibilizar boletins, escala de serviço, aba institucional, notícia, links úteis etc.

- Header personalizável ✅
- Links úteis ✅
- Links principais ✅
- Carrosel ✅
- Anversariantes ✅
- Notícias ✅
- Footer ✅
- Ramais ✅
- Chamado STI ✅
- Livro de saída da guarnição ✅
- Arranchamento ❌
- Sistema de combustível ❌

## Requisitos de sistema

- git [instalar git](https://git-scm.com/) | linux: `sudo apt install git`
- docker [instalar docker](https://docs.docker.com/engine/install/)
- node [instalar node](https://nodejs.org/en/download/package-manager)

## Requisito de conhecimento

- conhecimento básico em git e versionamento de código
- conhecimento básico em docker
- conhecimento básico em node
- conhecimento básico de rede (DNS, protocolo HTTP, Proxy)

# Começando

clonar repositório
```
git clone https://github.com/nixoletas/intranet-govbr
```

neste repositório você encontrará 3 pastas. 

#### assets-server

**assets-server** é a pasta que contém o servidor de assets que irá disponibilizar os ícones do [fontawesome](https://fontawesome.com/) e a fonte [Rawline](https://www.gov.br/saude/pt-br/centrais-de-conteudo/manual-de-marcas/brasil-sorridente/fontes-rawline/view) do padrão de Design do governo. Ele também irá fornecer outros recursos adicionais como previsão do tempo, suporte para chamados do Telegram, suporte para requisições externas, arquivos .md e arquivos de imagem (jpg, png, svg).
