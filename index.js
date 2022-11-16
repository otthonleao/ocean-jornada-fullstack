const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World');
});

/*
Lista de Endpoints da aplicação CRUD de mensagens
CRUD: Create, Read (single & all), Update and Delete
- [GET] /mensagens - Retorna a lista de mensagens
- [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
- [POST] /mensagens - Cria uma nova mensagem
- [PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
- [DELETE] /mensagens/{id} - Remover uma mensagem pelo ID
*/

const mensagens = [
	"Essa é a primeira mensagem",
	"Essa é a segunda mensagem"
]

// - [GET] /mensagens - Retorna a lista de mensagens
app.get("/mensagens", function (req, res) {
	res.send(mensagens);
	console.info(`Mensagens: \"${mensagens}\" foram retornadas pelo GET`)
});

// - [GET] /mensagens/{id} - Retorna apenas uma única mensagem pelo ID
app.get("/mensagens/:id", function (req, res) {
	const id = req.params.id - 1; //Subtrai 1 na requisição para ficar de acordo com o que o usuário quer na posição da lista que começa em 0. Então se o usuário quer a posição 2, na array vai ser 1.
	const mensagem = mensagens[id];
	res.send(mensagem);
});

// - [POST] /mensagens - Cria uma nova mensagem
app.post("/mensagens", function (req, res) {
	const mensagem = req.body.mensagem;
	console.log(mensagem);
	res.send(mensagem);
});

app.listen(port, function () {
	console.info(`App rodando em http://localhost:${port}`);
});