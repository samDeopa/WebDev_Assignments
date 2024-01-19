
const express = require('express');
const { createTodo, updateTodo } = require('./type');
const { todo } = require('./db');
const cors = require("cors");
const app = express()
const port = 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.post('/todos', async(req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'wrong input parameters',
        })
        return ;
    }
    todo.create({
        title: req.body.title,
        description: req.body.description,
        completed: false,
    })
    res.status(201).json({
        msg: 'data added sucessfully',
    }) ;
    return ;
  
})
app.get('/todos', async (req, res) => {
    const todos  = await todo.find({});
    res.json({
        todos
    });
    
    return ;
})
app.put('/completed', async (req, res) => {
    const updatedPayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatedPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: 'wrong input parameters',
        })
        return ;
    }
    await todo.updateOne({
        _id: req.body.id,
    },{
        updated: true
    })
    res.json({
        msg: 'todo marked as completed'
    })
    return;

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
