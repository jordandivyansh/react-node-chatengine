const express = require("express");
const cors = require("cors");
const axios = require("axios");
const dotenv = require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors({ origin: true }));
const PAT = process.env.PRIVATE_KEY;

app.post("/authenticate", async (req, res) => {
    console.log(req.body.username);
  const { username } = req.body;
  try{
    const r = await axios.put(
        "https://api.chatengine.io/users/",
        {username: username, secret: username, first_name: username},
        {headers: {"Private-Key": PAT}}
    );
    return res.status(r.status).json(r.data).console.log;
  } catch(error){
    return res.status(error.response.status).json(error.response.data);
    console.log(error)
  }
});


app.listen(3001);