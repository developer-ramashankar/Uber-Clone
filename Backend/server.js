const htttp = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;

const server = htttp.createServer(app);

server.listen(port,()=>{
    console.log(`Server running on port ${port}`);
});