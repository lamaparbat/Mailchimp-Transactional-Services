import {createTablesProps}  from '../interfaces/index';
const {models} = require('../utils/timescaledbConnection')

const createTable = async (props: createTablesProps) : Promise<boolean | Object> => {
  try {
   const result = await models.create(props);
   console.log('inserted ',result)
   return true;
  } catch (error) {
    console.log(error)
    return error;
  }
}

module.exports = {createTable}

