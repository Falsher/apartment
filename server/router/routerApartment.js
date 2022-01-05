const Router = require("express");
const router = new Router();
const upload = require("../middleware/upload");
const { signup, updateAvatar } = require("../auth/postApartment");
const getApartment = require("../auth/getAprt");

router.post("/signup", signup);
router.post("/postImg", upload.single("page"), updateAvatar);
router.get("/getApartment", getApartment);
module.exports = router;
