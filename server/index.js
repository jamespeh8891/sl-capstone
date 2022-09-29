const { default: axios } = require("axios");
const express = require("express");
const app = express();
const cors = require('cors')
const Sequelize = require("sequelize");
require("dotenv").config();

const { DATABASE_URL } = process.env;
const { PORT } = process.env;

app.use(express.json());
app.use(cors())
const sequelize = new Sequelize(DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

app.post("/register", (req, res) => {
  let { username, email_address, password } = req.body;

  sequelize
    .query(
      `INSERT INTO users (username, email_address, password) VALUES ('${username}', '${email_address}', '${password}') returning username;`
    )
    .then((dbRes) => res.status(200).send(dbRes[0][0]))
    .catch((err) => console.log(err));
});

app.listen(PORT, console.log(`RUNNING @ PORT ${PORT}`));
