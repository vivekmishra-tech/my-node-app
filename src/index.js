const express = require('express');
const app = express();
const port = 3000;
const healthRouter = require('./routes/health');

app.use(express.json());
app.use('/health', healthRouter);

app.get('/', (req, res) => {
      res.json({ message: 'Hello from my-node-app!' });
})

if(require.main === module) {
        app.listen(port, () => {
                console.log(`App listening at http://localhost:${port}`);
        });
}

module.exports = app;