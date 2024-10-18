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

clonar repositório e acessar a pasta do projeto
```
git clone https://github.com/nixoletas/intranet-govbr
cd intranet-govbr
```

neste repositório você encontrará 3 pastas. 

### 1. assets-server

**assets-server** é a pasta que contém o servidor de assets que irá disponibilizar os ícones do [fontawesome](https://fontawesome.com/) e a fonte [Rawline](https://www.gov.br/saude/pt-br/centrais-de-conteudo/manual-de-marcas/brasil-sorridente/fontes-rawline/view) do padrão de Design do governo. Ele também irá fornecer outros recursos adicionais como previsão do tempo, suporte para chamados do Telegram, suporte para requisições externas, arquivos .md e arquivos de imagem (jpg, png, svg).

### 2. intranet-angular

**intranet-angular** é o nosso front-end feito em [Angular](https://angular.dev/) no modelo Single-Page Application que irá servir nosso HTML, CSS e Javascript, como todos seus componentes personalizáveis e consumo de API's externas.
No caso ele irá consumir o `assets-server` e o `strapi`.

### 2. strapi-new

**strapi** é o nosso Headless-CMS [ver página](https://strapi.io/). Ele irá nos fornecer uma maneira fácil de manipular as publicações dos diversos componentes que sofrem alterações frequentes (carrosel, aniversariantes, notícias, avisos, etc).

# Rodar Strapi

Para rodar o Strapi é necessário ter `node`. Acesse a pasta /strapi-new com `cd strapi-new`. Nela você precisa editar as variáveis de ambiente: 
```
cp .env.example .env
```

esse comando cria o arquivo `.env` necessário para iniciar o strapi sem problemas, nele contém o seguinte:
```
HOST=127.0.0.1
PORT=8080
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
```

>no arquivo de exemplo, o HOST está setado para ser o `localhost`, mas no "valendo" você deve alterar para o IP do seu servidor.
**A porta recomendada é a 80** para não haver problemas de Firewall dos CTA's e VPN.

Após isso pode instalar as dependências e iniciar o servidor

```
npm install
npm run develop
```

Após isso, poderá acessar seu servidor em: [http://localhost:8080](http://localhost:8080)

Será solicitado a criação da conta de administrador

![image](https://github.com/user-attachments/assets/caf7b2a9-2196-4f24-ba19-5fdde3a4f132)

Você poderá acessar o strapi e observar as estruturas de conteúdo:
- Content Manager (para criar as publicações)
- Content-type Builder (para criar estruturas de conteúdo)

Principais tipos de conteúdo:

- Aniversariantes
- aviso
- carrosel
- noticia
- popup


