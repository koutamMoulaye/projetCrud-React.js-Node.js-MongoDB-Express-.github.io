const express = require("express");

const mongoose = require("mongoose");
require("dotenv").config();

const routes = require("./routes/fonctRoute")

const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 4006;

app.use(express.json());
app.use(cors());

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB à bien été connecter..."))
    .catch(error => console.error(error));


    app.use("/api",routes);

app.listen(PORT, () => console.log(`Accès est au port ${PORT}`));