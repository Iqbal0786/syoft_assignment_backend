const express= require("express");
const connect= require("./configs/db")
const {register,login}= require("./controllers/auth.controller")
const userController= require("./controllers/user.controller")
const productController= require("./controllers/product.controller")
const cors= require("cors")
const app= express();
app.use(cors())
app.use(express.json());

app.post("/register",register)
app.post("/login",login)
app.use("/users",userController)
app.use("/products",productController)
app.listen(7777,async()=>{
    try {
        await connect();
        console.log("Listening the port number 7777");
    } catch (error) {
        
    }
})