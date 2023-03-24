const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const routerApi = require('./routes/main.routes');
const dotenv = require("dotenv")
doteenv.config()

app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

routerApi(app);