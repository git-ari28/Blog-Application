const {Pool}=require("pg");
const pool=new Pool({
    user:"postgres",
    password:"ariba123",
    host:"localhost",
    port:5432,
    database:"blog"
});
module.exports=pool;
