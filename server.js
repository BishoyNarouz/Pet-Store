const app = require("./app");
const config =require('./Config')
app.listen(config.BackendPort, () => console.log(`the app listening on port ${config.BackendPort}`))