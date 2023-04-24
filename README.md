# Automacao-Testes-API-Cat-Facts
Automação de testes de API, na API Cat Facts

## Descrição
Projeto desenvolvido no intuito de ampliar conhecimentos pessoais acerca da automação de testes. 
Foram criados testes de API da API Cat Facts: <https://cat-fact.herokuapp.com/facts/random>, usando o CucumberJS.
Foram usadas as bibliotecas: Joi - para validação do schema; e chai - para fazer alguns asserts.
    
## Para rodar o projeto na sua máquina

Se você deseja rodar o projeto em sua máquina, basta clonar o projeto deste repositório, e, num terminal, instalar as dependências:
>npm i

E para rodar os testes:

>npx codeceptjs run

## Cenário de Teste

- Buscar um fato randômico

## Tecnologias

- nodeJS 
- codeceptJS
- JavaScript
- Git
## Passo a Passo para desenvolver o projeto do zero 
Para instalar o codeceptjs:
>npm i codeceptjs --save-dev

Para iniciar o projeto:
>npx codeceptjs init

Ao iniciar o projeto, são solicitadas algumas informações. Aqui estão minhas escolhas:
- Se eu queria usar typescritp : N
- Local de criação dos testes: deixei default (enter)
- Qual helper : REST
- Se eu queria usar jsonResponse: Y
- Local onde seriam guardados os outputs: deixei default (enter)
- Locate: deixei default -Inglês (enter) 
- Endpoint: https://cat-fact.herokuapp.com/facts/random
- Nome da feature: Facts
- Filename: deixei default (enter)

## Autora

Alice de Fátima Moraes Souza<br>
github: https://github.com/alicefms<br>
linkedIn: https://www.linkedin.com/in/alicefms/