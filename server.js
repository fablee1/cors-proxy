const express = require("express")
const axios = require("axios")
const cors = require("cors")
const app = express()
const port = 3000

app.use(cors())

app.post("/query", async (req, res) => {
  const { data } = await axios.post("https://graphigo.prd.space.id/query", req.body)
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Credentials", "true")
  res.setHeader("Access-Control-Max-Age", "1800")
  res.setHeader("Access-Control-Allow-Headers", "content-type")
  res.setHeader("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH, OPTIONS")
  res.send(data)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
