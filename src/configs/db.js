const mongoose= require("mongoose");

module.exports= ()=>{
    return mongoose.connect("mongodb+srv://iqbal:iqbal_786@cluster0.daqxb.mongodb.net/SyoftAssignment?retryWrites=true&w=majority")
}