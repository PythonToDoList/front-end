'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile('index.html', {root: './public'})
})

app.listen(port, _ => { console.log(`Serving on port ${ port }`) })
