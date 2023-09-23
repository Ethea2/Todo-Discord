const Todo = require('../models/todo')
const Day = require('../models/day')
const { formatDate, formatDateToReadable, getPhilippineTime } = require('../utils/dateFormat')

const create_todo = async (req, res) => {
    const { when, what } = req.body;
    try {
        let tempDate = when;

        if (!when) {
            tempDate = new Date();
        } else {
            tempDate = new Date(when)
        }
        const formattedDate = formatDate(tempDate);
        let day = await Day.findOne({ date: formattedDate });

        if (!day) {
            const todo = await Todo.create({ when: formattedDate, what });
            day = await Day.create({ date: formattedDate, todos: [todo._id] });

            return res.status(200).json({ newDay: day, todo });
        }

        const todo = await Todo.create({ when: formattedDate, what });
        day.todos.push(todo._id);
        await day.save();

        res.status(200).json(todo);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const get_todos = async (req, res) => {
    const todos = await Todo.find({}).sort({ when: -1 })
    res.status(200).json(todos)
}

const get_todos_by_date = async (req, res) => {
    const { when } = req.body
    const tempDate = new Date(when)
    const formattedDate = formatDate(tempDate)
    const todos = await Todo.find({ "when": formattedDate })
    if (!todos) res.status(404).json({ message: "No todos that day!" })
    res.status(200).json(todos)
}

const get_todos_sorted = async (req, res) => {
    const days = await Day.find({})
    const todos = await Todo.find({})
    let sortedDays = []
    days.map((day) => {
        const todosDay = todos.filter((todo) => day.date === todo.when)
        sortedDays.push({ day: formatDateToReadable(day.date), todos: todosDay })
    })

    sortedDays.sort((a, b) => new Date(a.day) - new Date(b.day))
    res.status(200).send(sortedDays)
}

const get_todos_today = async (req, res) => {
    try {
        const todosToday = await Todo.find({ when: formatDate(new Date(getPhilippineTime())) })
        console.log(formatDate(new Date(getPhilippineTime())))
        console.log(todosToday)
        if (!todosToday) return res.status(404).json({ message: "No todos today!" })
        res.status(200).json(todosToday)
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

const update_todo = async (req, res) => {
    const { status, id } = req.body
    try {
        const updatedTodo = await Todo.findOneAndUpdate({ _id: id }, { status })
        res.status(200).json(updatedTodo)
    } catch (error) {
        console.log(error)
        res.status(400).json({message: error})
    }

}

module.exports = {
    create_todo,
    get_todos,
    get_todos_by_date,
    get_todos_sorted,
    get_todos_today,
    update_todo
}