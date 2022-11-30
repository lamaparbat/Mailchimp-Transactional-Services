import { Request, Response } from 'express';
const converter = require("json-2-csv");
const reportData = require("../constants/index.js");

const convertHtmlToCSV = (req: Request, res: Response) => {
 // jston to csv library function
 converter.json2csv(reportData, (err:any, csvData:any) => {
  if (err) {
   throw err;
  }

  // generate encoded URI string with UTF-8 encoded data
  const encodedHref = "data:text/csv;charset=utf-8," + encodeURIComponent(csvData);
  res.send(encodedHref);
 });

}

module.exports = convertHtmlToCSV;


// paste the href text to link on 'href' attribute


// URI(Universal Resource Identifier) : allows access of objects available using existing protocols, and may be extended with technology.

// encodeURI(rawData:string) => string             NOTE: it ignores a URL's domain related roots.
// encodeURIComponent(rawData:string) => string    NOTE: it is designed to encode everything incl. queryString parameters