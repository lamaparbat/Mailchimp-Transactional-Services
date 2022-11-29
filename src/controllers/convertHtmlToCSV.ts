import { Request, Response } from 'express';
const converter = require("json-2-csv");
const reportData = require("../constants/index.js");

const convertHtmlToCSV = (req: Request, res: Response) => {
 // jston to csv library function
 converter.json2csv(reportData, (err:any, csvData:any) => {
  if (err) {
   throw err;
  }

  // print CSV string
  const encodedHref = "data:text/csv;charset=utf-8," + encodeURI(csvData);
  res.send(encodedHref);

 });

}

module.exports = convertHtmlToCSV;




// paste the href text to link on 'href' attribute