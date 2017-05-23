import express from 'express'

let app = express()
app.set('view engine', 'pug')
app.get('/',  (req, res) => {
    
    res.render('index')
})

app.use(express.static('./'))

app.listen(3000, '0.0.0.0')
