const express = require("express")
const axios = require("axios")
const app = express()
const port = 3000

app.post("/query", async (req, res) => {
  const { data } = await axios.post("https://graphigo.prd.space.id/query", req.body)
  res.send(data)
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})
