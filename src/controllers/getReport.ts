import { Request, Response } from "express";
const {models} = require('../utils/timescaledbConnection');

const getReport = async (req: Request, res: Response) => {
  const {limit} = req.query;

  try {
    const result = await models.findAll({raw: true, limit});
    res.status(200).send(result)
  } catch (error) {
    res.status(404).send(error.message)
  } 
}

module.exports = getReport;