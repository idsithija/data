const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const createPage = require("./routes/pages");

dotenv.config();

main().then(()=> console.log("Db Connected")).catch(err => console.log(err));

app.use(express.json());

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}

app.use("/api/auth", authRoute);
app.use("/api/pages", createPage);

app.listen(8800, () => {
    console.log("Backend server is running!")
});