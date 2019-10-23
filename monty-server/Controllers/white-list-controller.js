const whiteListDB = require("../Models/white-list-model");

module.exports = {

    saveWhiteList: (req, res) => {
        let whiteListData = new whiteListDB(req.body);
        whiteListData.save((err, data) => {
            if (err) {
                return response.dbError(res, 500, err);


            }
            return response.success(res, data);
        })
    },
    getWhiteList: (req, res) => {
        whiteListDB.find().exec((err, data) => {
            if (err) return response.dbError(res, 500, err);
            return response.success(res, data);
        });
    }
}