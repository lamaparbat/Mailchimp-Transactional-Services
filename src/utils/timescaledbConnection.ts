require('dotenv').config();
const Sequelize = require('sequelize');

const sequelizeInstance = new Sequelize(process.env.TIMESCALE_URL, {
  dailect: 'postgres',
  protocol: 'postgres',
  dailectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

const models = sequelizeInstance.define('newDatabase', {
    sender: { type: Sequelize.STRING },
    to: { type: Sequelize.STRING },
    subject: { type: Sequelize.STRING },
    message: { type: Sequelize.STRING },
    datetime: { type: Sequelize.DATE },
    status: { type: Sequelize.STRING },
});


async function init () {
 await models.sync({alter: true});
}
init()

const initTimescaleDBConnection = async (): Promise<void> => {
  try {
    await sequelizeInstance.authenticate();
    console.log('DB Connection successfull.');
  } catch (error) {
    console.log('DB Connection Error: ' + error.message);
  }
}

module.exports = { initTimescaleDBConnection, models };