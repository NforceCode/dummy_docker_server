const app = require('express')()

app.get('/', (req, res) => {
  res.send('Connected')
})

app.get('/html', (req, res) => {
  res.send(`
    <p>HELLO THERE</p>
  `)
})

const PORT = process.env.PORT || 3000;

app.listen(PORT);
