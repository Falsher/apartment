const Router = require("express");
const router = new Router();
const postApartment = require("../auth/postApartment");
const getApartment = require("../auth/getAprt");
router.post("/signup", postApartment);
router.get("/getApartment", getApartment);
module.exports = router;
