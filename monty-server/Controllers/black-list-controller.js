const blackListDB = require("../Models/black-list-model");

module.exports = {

    saveBlackList: (req, res) => {
        let blackListData = new blackListDB(req.body);
        blackListData.save((err, data) => {
            if (err) {
                return response.dbError(res, 500, err);


            }
            return response.success(res, data);
        })
    },
    getBlackList: (req, res) => {
        blackListDB.find().exec((err, data) => {
            if (err) return response.dbError(res, 500, err);
            return response.success(res, data);
        });
    }
}