const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRouter = require("./routes/index");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use("/api",indexRouter); // /api/tasks

//DB 연결
const mongoURL = process.env.MONGODB_LOCAL
const PORT = process.env.PORT
mongoose.connect(mongoURL).then(()=>console.log("mongoose connected")).catch((err)=> console.log("err) DB connected error", err));

app.listen(PORT,()=>console.log("server on at 5000"));


