const Router = require("express");
const router = new Router();
const { signup } = require("../auth/postApartment");
const getApartment = require("../auth/getAprt");

router.post("/signup", signup);
router.get("/getApartment", getApartment);
module.exports = router;
