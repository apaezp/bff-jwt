const express = require("express");
const app = express();
require("dotenv").config();

const cors = require("cors");
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
