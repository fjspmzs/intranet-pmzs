<div align="center">

# Intranet GovBR (novo modelo)
Com Angular & Strapi. Tutorial completo ⭐

![Captura de tela 2024-10-17 164734](https://github.com/user-attachments/assets/1767a101-3ce4-472e-9034-bad553b6db25)

</div>

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

### Crie a conta de administrador

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

### Altere as permissões de acesso da API

Acessando "User & Permissions Plugin" e marcando "find" e "find one" dos Content-Types

![image](https://github.com/user-attachments/assets/bd7f2eeb-2548-4e77-a8d7-4e107883def8)

### Strapi configurado! ✅

Pronto! Agora é só começar a criar as postagens, notícias, carrosel, e cadastro de aniversariantes.

# Rodar Assets Server

Para iniciar o servidor de assets é quase a mesma coisa do strapi. Acesse a pasta /assets-server com `cd assets-server`. Nela você precisa editar as variáveis de ambiente também: 
```
cp .env.example .env
```

esse comando cria o arquivo `.env` necessário para iniciar o strapi sem problemas, nele contém o seguinte:
```
PORT=3000
BOT_ID=""
CHAT_ID=
SERVER_IP=127.0.0.1
```

A porta selecionada é 3000 mas para produção recomenda-se a 80, sempre para evitar bloqueios de VPN e Firewall.

Ignore por enquanto o "BOT_ID" e "CHAT_ID", eles serão usados para a função de Chamados - STI. Será ensinado futuramente!

### Instalar dependências e rodar projeto

```
npm install
npm run dev
```

### Servidor de assets configurado ✅

Pronto, seu servidor de assets deverá estar configurado e sua intranet pronta para consumir, tanto o Strapi quanto o Assets.

# Rodar Intranet Angular

Para iniciar o servidor angular, basta instalar as dependências e rodar. Acesse a pasta /intranet-angular com `cd intranet-angular`:

### Instalar dependências e rodar projeto

```
npm install
npm start
```

### Intranet pronta e acessível em [http://localhost:4200](http://localhost:4200) ✅ Porém...

Fique atento para algumas variáveis e endereços IP!

Primeiro, acesse a pasta /src e verifique o arquivo `index.html`, ele deve conter em seu corpo, referências aos IP's dos servidores de **Strapi** e **Assets**:

```html
<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Intranet</title>
    <link rel="icon" type="image/x-icon" href="http://localhost:3000/assets/pics/logo9bcom2.png" />
    <link
      rel="stylesheet"
      href="http://localhost:3000/assets/rawline/rawline.css"
      media="print" onload="this.media='all'" />
    <link rel="stylesheet" href="http://localhost:3000/assets/font-awesome/css/all.min.css" media="print" onload="this.media='all'"/>
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>
```

Depois acesse as variáveis de ambiente em /environments: 

PRODUÇÃO -> `environment.prod.ts` | DESENVOLVIMENTO -> `environment.ts`

Tente manter as duas sempre cópias uma da outra para evitar confusão. Mas o ideal é ter o desenvolvimento na sua máquina local e quando seu código estiver legal, usar produção. O Angular usa automaticamente cada uma das variáveis conforme o método de rodar o projeto.

Servidor | Desenvolvimento         | Produção          |
|-------------------------|-------------------|
Assets | localhost:3000 | IP do servidor de assets |
Angular | localhost:4200 | IP do servidor Angular |
Strapi | localhost:1337 | IP do servidor Strapi |

Como dito anteriormente, tente sempre rodar os 3 servidores em máquinas separadas com seu próprio IP e na porta 80.
