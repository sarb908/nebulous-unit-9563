const express = require('express');



const { ClientModel, TaskModel, ExpenseCategModel, RoleModel, ContactModel } = require('../models/Manage.model');


const manageRoute = express.Router();

manageRoute.post("/client/new" ,async (req,res) =>{

    const {client_name , address , currency , userId} = req.body

    const client = new ClientModel({
        client_name,
        address,
        currency,
        userId
    })

    client.save()
})

manageRoute.get("/client" , async (req,res) =>{

    const {userId} = req.body

    const client = await ClientModel.find({userId});

    res.send(client)
})

manageRoute.patch("/client/:clientId/edit" , async (req,res) =>{

    const {clientId} = req.params;

    const {userId} = req.body;

    const client = await ClientModel.findOne({_id : clientId})

    if(client.userId == userId)
    {
        const updated_client = await ClientModel.findOneAndUpdate({_id : clientId},req.body,{new:true});

        res.send(updated_client)
    }
    else{
        res.send("Not Authorized")
    }
    
})

manageRoute.delete("/client/:clientId/delete" , async (req,res) =>{

    const {clientId} = req.params;

    const {userId} = req.body

    const client = await ClientModel.findOne({_id : clientId})

    if(client.userId == userId)
    {
        await ClientModel.findOneAndDelete({_id : clientId});

        res.send("Deleted Successfully")
    }
    
    
})

manageRoute.post("/contact/new" ,async (req,res) =>{

    const {first_name , last_name , email , userId} = req.body

    const contact = new ContactModel({
       first_name,
       last_name,
       email,
       userId
    })

    contact.save()
})

manageRoute.get("/contact" , async (req,res) =>{

    const {userId} = req.body
    
    const contact = await ContactModel.find({userId});

    res.send(contact)
})

manageRoute.patch("/client/:clientId/edit" , async (req,res) =>{

    const {userId} = req.body

    const {clientId} = req.params;

    const updated_client = await ClientModel.findOneAndUpdate({_id : clientId},req.body,{new:true});

    res.send(updated_client)
})

manageRoute.delete("/client/:clientId/delete" , async (req,res) =>{

    const {userId} = req.body

    const {clientId} = req.params;

    await ClientModel.findOneAndDelete({_id : clientId});

    res.send("Deleted Successfully")
})

manageRoute.post("/task/new" ,async (req,res) =>{

    const {task_name , rate , userId} = req.body

    const task = new TaskModel({
        task_name,
        rate,
        userId
    })

    task.save()
})

manageRoute.get("/task" , async (req,res) =>{

    const {userId} = req.body
    
    const task = await TaskModel.find({userId});

    res.send(task)
})

manageRoute.patch("/task/:taskId/edit" , async (req,res) =>{

    const {userId} = req.body

    const {taskId} = req.params;

    const updated_task = await TaskModel.findOneAndUpdate({_id : taskId},req.body,{new:true});

    res.send(updated_task)
})

manageRoute.delete("/task/:taskId/delete" , async (req,res) =>{

    const {userId} = req.body

    const {taskId} = req.params;

    await TaskModel.findOneAndDelete({_id : taskId});

    res.send("Deleted Successfully")
})

manageRoute.post("/expence_categ/new" ,async (req,res) =>{

    const {category_name , userId} = req.body

    const expence_categ = new ExpenseCategModel({
        category_name,
        userId
    })

    expence_categ.save()
})

manageRoute.get("/expence_categ" , async (req,res) =>{

    const {userId} = req.body
    
    const expence_categ = await ExpenseCategModel.find({userId});

    res.send(expence_categ)
})

manageRoute.patch("/expence_categ/:expence_categId/edit" , async (req,res) =>{

    const {userId} = req.body

    const {expence_categId} = req.params;

    const updated_expence_categ = await ExpenseCategModel.findOneAndUpdate({_id : expence_categId},req.body,{new:true});

    res.send(updated_expence_categ)
})

manageRoute.delete("/expence_categ/:expence_categId/delete" , async (req,res) =>{

    const {userId} = req.body

    const {expence_categId} = req.params;

    await ExpenseCategModel.findOneAndDelete({_id : expence_categId});

    res.send("Deleted Successfully")
})

manageRoute.post("/role/new" ,async (req,res) =>{

    const {role_name , userId} = req.body

    const role = new RoleModel({
        role_name,
        userId
    })

    role.save()
})

manageRoute.get("/role" , async (req,res) =>{

    const {userId} = req.body
    
    const role = await RoleModel.find({userId});

    res.send(role)
})

manageRoute.patch("/role/:roleId/edit" , async (req,res) =>{

    const {userId} = req.body

    const {roleId} = req.params;

    const updated_role = await RoleModel.findOneAndUpdate({_id : roleId},req.body,{new:true});

    res.send(updated_role)
})

manageRoute.delete("/role/:roleId/delete" , async (req,res) =>{

    const {userId} = req.body

    const {roleId} = req.params;

    await RoleModel.findOneAndDelete({_id : roleId});

    res.send("Deleted Successfully")
})


module.exports = manageRoute