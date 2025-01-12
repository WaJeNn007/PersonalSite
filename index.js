const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => res.send("THIS IS JUST SOME EXAMPLE TEXT FOR THE LOVE OF GOD"))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
