const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const authRoutes = require('./src/routes/auth.routes');
const logger = require('./src/utils/logger.utils');
const db = require('./src/models');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const PROTOCOL = process.env.PROTOCOL || 'http://localhost';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);

// Sync models and start the server
db.sequelize
  .sync({ force: false })
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`=================================`);
      logger.info(`🚀 App running on this port ${PORT}`);
      logger.info(`🎮 ${PROTOCOL}:${PORT}`);
      logger.info(`=================================`);
    });
  })
  .catch((err) => {
    logger.error('Error syncing the database:', err);
  });

module.exports = app;
