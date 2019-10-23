const express=require("express");
const router=express.Router();
const configCtrl=require("../Controllers/system-config-controller");

router.post("/storeConfig",configCtrl.storeProduct);
router.get('/',configCtrl.getProductList);


module.exports=router;