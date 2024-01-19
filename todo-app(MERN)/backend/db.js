const mongoose = require('mongoose');
const { boolean } = require('zod');

//type in the server url for the db
mongoose.connect("mongodb+srv://admin_Sam:263387@projects.lvac6nh.mongodb.net/apps");
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todo', todoSchema);

module.exports= {todo};