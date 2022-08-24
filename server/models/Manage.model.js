const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    client_name : String,
    address : String,
    currency : String,
    userId  : String
})

const ClientModel = mongoose.model("client" , clientSchema);

const contactSchema = new mongoose.Schema({
    first_name : String,
    last_name : String,
    email : String,
    userId  : String
})

const ContactModel = mongoose.model("contact" , contactSchema)

const taskSchema = new mongoose.Schema({
    task_name : String,
    rate : Number,
    userId  : String
})

const TaskModel = mongoose.model("task" , taskSchema)

const roleSchema = new mongoose.Schema({
    role_name : String,
    userId  : String
})

const RoleModel = mongoose.model("role" , roleSchema)

const expense_categSchema = new mongoose.Schema({
    category_name : String,
    userId  : String
})

const ExpenseCategModel = mongoose.model("expense_categ" , expense_categSchema)



module.exports = { ClientModel , ContactModel , TaskModel , RoleModel , ExpenseCategModel }

