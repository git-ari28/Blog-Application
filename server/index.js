const express=require("express");
const app=express();
const cors=require("cors");
const pool=require("./db");


app.use(cors());
app.use(express.json());

app.post("/blogs",async(req,res)=>{
try{
    const {title,description}=req.body;
    const newBlog=await pool.query("INSERT INTO writeblog(title,description)VALUES($1,$2) returning *",[title,description])

res.json(newBlog.rows[0]);
}
catch(error){
console.log(err.message)
}
})
app.get("/blogs",async(req,res)=>{
    try{
        const allblogs=await pool.query("SELECT * FROM writeblog");
        res.json(allblogs.rows)
    
    res.json(newBlog.rows[0]);
    }
    catch(error){
    console.log(error.message)
    }
    })

 app.put(":/id")   









app.listen(5000,()=>{
    console.log("server has started on port 5000")
});
