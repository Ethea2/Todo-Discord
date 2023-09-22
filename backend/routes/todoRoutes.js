const express = require('express')
const { create_todo, get_todos, get_todos_by_date, get_todos_sorted, get_todos_today, update_todo } = require('../controllers/todoController')

const todoRouter = express.Router()

todoRouter.post('/', create_todo)

todoRouter.get('/', get_todos)

todoRouter.get('/date', get_todos_by_date)

todoRouter.get('/sorted', get_todos_sorted)

todoRouter.get('/today', get_todos_today)

todoRouter.patch('/', update_todo)

module.exports = todoRouter