![alt text](https://github.com/goomerdev/job-dev-backend-interview/raw/master/media/logo-azul.png "Goomer")
# Goomer Rango

## Sobre
### Sobre a Goomer
A Goomer é uma startup de Sorocaba (SP) que tem a missão de apoiar bares e restaurantes em sua Transformação Digital, oferecendo uma experiência única para os clientes realizarem seus pedidos tanto de forma online como no próprio estabelecimento. Para isso, a empresa disponibiliza quatro soluções específicas com esse objetivo: GoomerGo (plataforma de delivery sem taxas ou comissões), Goomer Na Loja (sistema que permite ao cliente captar o QR Code e acessar o cardápio digital), Cardápio Digital no Tablet e o Totem de Autoatendimento. Atualmente, a companhia possui presença em todos os estados do País, atuando em cerca de 2.700 cidades

### O Serviço
Criar uma API REST capaz de gerenciar os restaurantes e os produtos do seu cardápio.
- Informações detalhadas quanto aos requisitos <a href="https://github.com/goomerdev/job-dev-backend-interview" target="_blank">aqui</a>.

## Desafios/Problemas 
- Maior desafio, foi voltar a trabalhar sem a utilização de um ORM utilizando NodeJs.

## Melhorias Posteriores
- Utilização de ORM typeORM ou Sequelize.
- Injeção de dependencia.

## Iniciando serviço (Uma das opções abaixo) 
Para iniciar o projeto está disponivel duas opções, na qual fica optativo. Basta abrir o terminal e executar um dos comando abaixo.

### Pré Requesitos
- Node: v12.16.3^
- PostgreSQL
- Docker (Caso utilize docker, ele já terá um banco de dados sendo levantado)



Iniciamos realizando o checkout do projeto
```bash
git clone https://github.com/lcastadeu/goomer-rango.git
```
- Instalar as dependencias. No terminal executar o comando abaixo.
```bash
npm i
```
- Posteriormente no terminal executar o comando abaixo.
```bash
npm run start
```
#### Docker
```bash
docker-compose up --b
#Quando iniciado pelo Docker já é levantado um banco de dados PostgreSQL
```

# Swagger
- Basta acessar: http://localhost:3000/api-docs
