const express = require("express");
const { createUser, updateUser } = require('./types');
const {user} = require('./db');
const cors = require('cors');
app = express();
const port  = 3000;

app.use(express.json());
app.use(cors());
app.post('/add',async (req, res)=>{
    const createdPayload = req.body;
    
    const parsedPayload = createUser.safeParse(createdPayload);
    
    if(!parsedPayload.success){
        
        res.status(411).json({
            msg:"Invalid parameters"
        });
        return ;
    }
    await user.create(createdPayload);
    res.json({
        msg: "User created sucesfully"
    })

});

app.get('/getUsers', async (req,res)=>{
    const users =await user.find({});
    res.json({users});
    return ;
})

app.put('/update', async (req, res)=>{
    const createdPayload = req.body;
    const parsedPayload = updateUser.safeParse(createdPayload);
    if(!parsedPayload.success){
        res.json({
            msg: "Invalid parameters"
        })
        return ;
    }
    await user.findOneAndUpdate({_id: createdPayload.id}, createdPayload );
    res.status(201).json({
        msg: "User Updated Successfully"
    });
    
})

app.listen(port, ()=>{
    console.log('listening to port ${port}');
})