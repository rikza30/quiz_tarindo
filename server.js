const express = require('express');
const cors = require('cors');
const app = express();
const port = 7000;
const quizRoute = require ('./router/quiz')
const jobsheetRoute = require ('./router/jobsheet')
const contentRoute = require ('./router/content')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const db = require('./models');
db.sequelize.sync()

app.get('/',(req, res)=> {
    res.send('Quiz by RVe');
});

app.use('/api/quizzes', quizRoute)
app.use('/api/jobsheet',jobsheetRoute)
app.use('/api/content', contentRoute)
app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`));