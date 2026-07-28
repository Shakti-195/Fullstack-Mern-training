const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoute = require("./routes/productRoute");

dotenv.config();



const app = express();

connectDB();


app.use(express.json());

app.use("/api/products", productRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});