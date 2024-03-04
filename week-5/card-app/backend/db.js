const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin_Sam:263387@projects.lvac6nh.mongodb.net/apps");
const schema = mongoose.Schema({
    name: String,
    summary: String,
    interests: [String],
    linkedin: String, 
    twitter: String
})

const user = mongoose.model('users', schema);
module.exports ={user};