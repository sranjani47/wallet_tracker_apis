// Import required modules
const DAL = require('./dal');

const moduleName = 'Wallet';

/**
 * This function is to add entry in wallet
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
const post = async (req, res, next) => {
  let logJson = {};
  let logData = {};
  try {
    console.log(req)
    let results = await DAL.post(req.body);
    res.send({
      "state": "SUCCESS",
      "message": "Added successfully"
    });
  } catch (err) {
    logData.message = err;
    res.send(err);
  }
}
/**
 * This function is to edit entry in wallet
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
const put = async (req, res, next) => {
  let logJson = {};
  let logData = {};
  try {
    console.log(req)
    let results = await DAL.put(req.body);
    res.send({
      "state": "SUCCESS",
      "message": results
    });
  } catch (err) {
    logData.message = err;
    res.send(err);
  }
}
/**
 * This function is to delete entry in wallet
 * @param {Object} req Request object
 * @param {Object} res Response object
 */
const deleteEntry = async (req, res, next) => {
  let logJson = {};
  let logData = {};
  try {
    console.log(req)
    let results = await DAL.deleteEntry(req.body);
    res.send({
      "state": "SUCCESS",
      "message": results
    });
  } catch (err) {
    logData.message = err;
    res.send(err);
  }
}
/**
 * This function is to get list of wallet entries 
 * @param {Object} req Request object
 * @param {Object} res Response object
 */

const list = async (req, res, next) => {
  let logJson = {};
  let logData = {};
  try {

    let results = await DAL.list({
    });
    res.send({
      "state": "SUCCESS",
      "message": "Got list of records successfully",
      "result": results
    });
  } catch (err) {
    logData.message = err;
    res.send(err);
  }
}


// Exporting modules
module.exports = {
  post,
  put,
  deleteEntry,
  list
}
