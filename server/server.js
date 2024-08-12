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
console.log(error.message)
}
})
app.get("/blogs",async(req,res)=>{
    try{
        const allblogs=await pool.query("SELECT * FROM writeblog");
        res.json(allblogs.rows)
    }
    catch(error){
    console.log(error.message)
    }
    })

 app.get("/blogs/:id",async(req,res)=>{
    try{
const {id}=req.params;
const blog=await pool.query("SELECT * FROM WRITEBLOG WHERE blog_id=$1",[id]);
res.json(blog.rows)
    }
    catch(error){
 console.error(error.message);
    }
 })   
 app.put("/blogs/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;

        const updateBlog = await pool.query(
            "UPDATE writeblog SET title = $1, description = $2 WHERE blog_id = $3",
            [title, description, id]
        );

        res.json("Blog title and description were updated");
    } catch (err) {
        console.error(err.message);
    }
});

app.delete("/blogs/:id",async(req,res)=>{
   try{
const {id}=req.params;
const deleteblog=await pool.query("DELETE FROM writeblog where blog_id=$1",[id]);
res.json("Blog was deleted");
   } 
   catch(error){
console.error(err.message);
   }
})








app.listen(5000,()=>{
    console.log("server has started on port 5000")
});
