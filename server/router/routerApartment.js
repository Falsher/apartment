const Router = require("express");
const router = new Router();
const upload = require("../middleware/page");
const postApartment = require("../auth/postApartment");
const getApartment = require("../auth/getAprt");
const postImg = require("../auth/postImg");

router.post("/signup", upload.single("page"), postApartment);
router.post("/postImg", upload.single("page"), postImg);
router.get("/getApartment", getApartment);
module.exports = router;
