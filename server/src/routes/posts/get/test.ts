// const fs = require('fs');
// const db = require('../db');
// const readFile = util.promisify(fs.readFile);

// router.get('/getList', function (req, res, next) {
//     var fileNames = [];

//     fileNames = readDir.readSync('/NodeWorkspace/uploads/output/', ['**.png']);  // use async function instead of sync
//     var data = {};
//     const files = fileNames.map(function (filename) {
//         filepath = path.join(__dirname, '../../uploads/output') + '/' + filename;
//        return readFile(filepath); //updated here
//     });

//     Promise.all(files).then(fileNames => {
//         response.data = fileNames;
//         res.json(response);
//     }).catch(error => {
//         res.status(400).json(response);
//     });
// });
