const fileName = __dirname+"/data/wallet_details.json";
const fs = require("fs");
/** Internal functions */
const readFile = async (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
const writeFile = async (path) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, json, 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}
/**
 * This function is to add
 * @param {object} params variable description.
 */
const post = async (params) => {
  try {
    var data = await readFile(fileName);
    var response = JSON.parse(data);
    var highestSno = response.wallet.reduce(function (prev, current) {
      return (prev.sNo > current.sNo) ? prev : current
   });
    params.sNo = highestSno.sNo + 1;
    response.wallet.push(params);
    json = JSON.stringify(response); 
    var res = writeFile(fileName);
    return true;
  } catch (err) {
    throw err;
  }
}

/**
 * This function is to update
 * @param {object} params variable description.
 */
const put = async (params) => {
  try {
    var data = await readFile(fileName);
    var response = JSON.parse(data);
    const index = response.wallet.findIndex((e) => e.sNo === params.sNo);

    if (index === -1) {
      return "There is no record"
    }else{
      response.wallet[index] = params;
      json = JSON.stringify(response); 
      var res = writeFile(fileName);
      return "updated successfully"
    }
  } catch (err) {
    throw err;
  }
}
/**
 * This function is to delete
 * @param {object} params variable description.
 */
const deleteEntry = async (params) => {
  try {
    var data = await readFile(fileName);
    var response = JSON.parse(data);
    var removeRes = response.wallet.filter(function( obj ) {
      return obj.sNo !== params.sNo;
    });
    json = JSON.stringify({wallet : removeRes }); 
    var res = writeFile(fileName);
    return "deleted Successfully";
  } catch (err) {
    throw err;
  }
}
/**
 * This function is to get list
 * @param {object} params variable description.
 */
const list = async (params) => {
  try {
    var data = await readFile(fileName);
    var response = JSON.parse(data);
    return response;
  } catch (err) {
    throw err;
  }
}
// Exporting modules
module.exports = {
  post,
  put,
  deleteEntry,
  list
}
