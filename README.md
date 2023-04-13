<h1 align="center">UBOTS Desafio Back-end</h1>


## ❓ O que é:
API REST na qual seja possível: Criar, Atualizar, Listar, Deletar e Avaliar filmes


## 🚘 Inicialização:
Para instalar todas as dependências da aplicação use o seguinte comando no console:

```sh
 npm install
```
Após a instalação para iniciar a aplicação use o seguinte comando no console:
```sh
 npm run dev
```

## 🗺️ Funcionamento:
- **Back-end** -> Se tudo ocorrer como o planejado o servidor estará rodando na porta **8080**
- **.env** -> as variáveis de ambiente estarão no arquivo **.env_example**, lembrando que o banco escolhido foi o **Postgresql**🐘
- **Banco e tabelas** -> Utilize o comando abaixao para criação das tabelas: 
```sh
 npx prisma migrate dev
```

## 🛣️ ROTAS:
- **localhost:8080/movie (POST)** -> Criação de um filme
  - name, description
- **localhost:8080/movie?page=0&perPage=10 (GET)** -> Listar Todos os filmes (Com paginacao de 10 produtos por pagina)
- **localhost:8080/movie/:id (GET)** -> Listar um filme especifico
- **localhost:8080/movie/:id (PUT)** -> Atualiza um filme existente
  - name, description
- **localhost:8080/movie/:id (DELETE)** -> Deleta um filme existente
- **localhost:8080/movie/indicate (GET)** -> O sistema irá te recomendar um filme que ainda n foi avaliado
- **localhost:8080/movie/avaliation (POST)** -> Rota de avaliação de um filme


<br></br>
