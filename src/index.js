import express from "express";
const app = express() ;
const PORT = 3000 ;

app.get("student", (req,res) => {
    res.send("Get all students");
});

app.get("/students/1", (res,req)=>{
        res.send("Get student ID 1");
});

app.post("/students", (res,req) =>{
    res.send("Student created");
});

app.put("students/1", (res,req) =>{
    res.send("Student ID 1 updated");
});

app.patch("students/1", (res,req) => {
    res.send("Student ID 1 partially updated");
});

app.listen(PORT,() => {
        console.log(`Server running on port ${PORT}`);
});