import express from 'express'

const app = express()


app.get('/', (request, response) => response.json('what?'))

app.listen(3333, () => {
  console.log('UP ALL NIGHT')
})
