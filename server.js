const express = require("express");
const bp = require("body-parser");
const yearRange = require("year-range");
const app = express();
const title = "n33dful 🇹🇷"
const footer = "limon"
const  googleIt = require('google-it')

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.render(process.cwd() + "/public/index.ejs", { year: yearRange(), ress: req.method, title: title, footer: footer })
})

app.post("/search", (req, res) => {
  googleIt({'query': `${req.body.query}`}).then(results => {
  console.log(results)
  res.render(process.cwd() + "/public/search.ejs", { results: results, ress: req.method, year: yearRange(), title: title, footer: footer, search: req.body.query  })
    }).catch(e => {
  console.log(e)
})
})

app.listen(3000, () => {
  console.log("server aktif")
})