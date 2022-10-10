const config = require('./app/config/config');
const express = require('express');
const cors = require('cors');
const app = express();
const db = require('./app/config/db-con');
const port = config.PORT;
const routes = require('./app/routes/index.routes');

app.use(cors());
app.use(express.json());
// routing
app.use('/api', routes);

db.authenticate().then(() => {
    console.log('Connected to database');
    app.listen(port, () => {
        console.log(`App is running on ${config.Url}${port}`);
    });
});

