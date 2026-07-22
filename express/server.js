const express = require("express");

const app = express();
const PORT = 4000;

// app.get("/",(req,res)=>{
//     res.send("Home page...")

// });

// app.get("/about",(req,res)=>{
//     res.send("About page...")
// });

// app.get("/contact",(req,res)=>{
//     res.send("Contact page...")
// });

// app.get("/project",(req,res)=>{
//     res.send("project page...")
// });

// app.listen(PORT,()=>{
//     console.log(`Express Server is running at port http://localhost:${PORT}`);
// });
const userRoutes = require("./routes/userRoute");
const productRoutes = require("./routes/productRoute");
const adminRoutes = require("./routes/adminRoute");
const dashboardRoutes = require("./routes/dashboardRoute");
const detailsRoutes = require("./routes/detailsRoute");

app.use("/user",userRoutes);
app.use("/product",productRoutes);
app.use("/admin",adminRoutes);
app.use("/dashboard",dashboardRoutes);
app.use("/details",detailsRoutes);

app.listen(4000,()=>{
    console.log(`Server is working properly on Port http://localhost:${PORT}`);
});


// using express js show routing of various pages of an Ecommerce portal

// 1.user
// 2.product
// 3.admin
// 4.dashboard
// 5.details


