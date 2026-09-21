# API de Produtos

CRUD de produtos com Node.js, Express e Mongoose.

## Estrutura

```text
src/
├── controllers/
│   └── productController.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
└── server.js
```

## Executar

```bash
npm install
cp .env.example .env
npm run dev
```

Configure `MONGODB_URI` no arquivo `.env`. Para usar o MongoDB Atlas, informe a string de conexão fornecida pelo Atlas.

## Rotas

| Método | Rota | Ação |
|---|---|---|
| GET | /produtos | Lista produtos |
| GET | /produtos/:id | Busca um produto |
| POST | /produtos | Cria um produto |
| PUT | /produtos/:id | Atualiza um produto |
| DELETE | /produtos/:id | Exclui um produto |

## Exemplo de JSON

```json
{
  "nome": "Teclado mecânico",
  "categoria": "Periféricos",
  "preco": 249.90,
  "estoque": 12
}
```
