const express = require('express');
const bodyParser = require('body-parser');
const dbModels = require('./API/models');
const mainRoutes = require('./API/routes/main.route');

const PORT = process.env.PORT || 8080;
const app = express();

// ========= MIDDLEWARES START ====
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
// ========= MIDDLEWARES END ====

app.use('/api', mainRoutes);


dbModels.sequelize.sync({
  force: true
}).then(() => {
  app.listen(PORT, function () {
    console.log("Listening on port: ", PORT);
  });
});