const express=require("express");
const router=express.Router();
const blackCtrl=require("../Controllers/black-list-controller");

router.post("/storeBlackList",blackCtrl.saveBlackList);
router.get('/',blackCtrl.getBlackList);


module.exports=router;