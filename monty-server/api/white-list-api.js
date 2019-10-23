const express=require("express");
const router=express.Router();
const whiteCtrl=require("../Controllers/white-list-controller");

router.post("/storeWhiteList",whiteCtrl.saveWhiteList);
router.get('/',whiteCtrl.getWhiteList);


module.exports=router;