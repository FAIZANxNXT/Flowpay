const express = require("express");
const app = express();

app.use(express.json());

// home
app.get("/", (req,res)=>{
  res.send("FlowPay Live 🚀");
});

// register API
app.post("/api/register",(req,res)=>{
  const {name,mobile} = req.body;

  res.json({
    status:"success",
    message:"User Registered",
    user:{name,mobile}
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log("Server running"));
