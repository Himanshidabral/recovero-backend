import  app  from './server';
const cron = require('node-cron');
const server: any = require('http').Server(app);
let port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`server is listening at port ${port}`);
});



