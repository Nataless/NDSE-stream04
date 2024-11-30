const express = require("express")

const app = express()

app.get("/:name", (req, res) => {
    const { name } = req.params

    res.json({ message:`Hello, ${name}!`})
})

app.listen(3000, () => {
    console.log (`Server listening port 3000.`)
})