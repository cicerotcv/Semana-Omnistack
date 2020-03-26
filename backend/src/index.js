const express = require("express")
const routes = require("./routes")
const cors = require("cors");
const app = express();

/*
 * Rota / Rescurso 
 */
/**
 * Método HTTP:
 * GET: Buscar informação no back-end
 * POST: Criar informação no back-end
 * PUT: atualizar informação no back-end
 * DELETE: deletar informação no back-end
 */
/**
 * Tipos de Parâmetro
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos
 * Request body: Corpo da requisição. Utilizado para criar ou atualizar recurso;
 */
/**
 * Tipos de bancos de dados
 * 
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc 
 */

app.use(cors());
app.use(express.json());
app.use(routes);

console.log("Listening port:3333")
app.listen(3333);

