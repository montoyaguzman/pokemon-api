const express = require('express');
const app = express();
const port = 3000; // process.ENV.PORT || 3000;
const routerApi = require('./routes/main.routes');

app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

routerApi(app);