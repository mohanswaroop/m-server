const productDB = require("../Models/system-config-model");

module.exports = {

    storeProduct: (req, res) => {
        let productData = new productDB(req.body);
        productData.save((err, data) => {
            if (err) {
                return response.dbError(res, 500, err);
            }
            return response.success(res, data);
        })
    },
    getProductList: (req, res) => {
        productDB.find().exec((err, data) => {
            if (err) return response.dbError(res, 500, err);
            return response.success(res, data);
        });
    }
}