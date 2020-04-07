const express = require('express');
const app = express();
const options = {
    port: 8080,
    host: '0.0.0.0'
}

app.use(express.json());

app.get('/users', (req, res) => {
    res.status(200);
    res.send([{
        name: 'Mahmoud'
    }]);
    res.end();
});

app.listen(options.port, options.host, () => {
    console.log(`started to listen on port http://${options.host}:${options.port}/`);
});