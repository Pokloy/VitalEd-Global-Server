const express = require('express');
const aboutUsController = require('../controllers/aboutus');
const auth = require("../auth");

const {verify, verifyAdmin } = auth;


const router = express.Router();

router.get("/", aboutUsController.showAboutUs);
router.post("/add", verify, verifyAdmin, aboutUsController.addAboutUs);
router.patch("/:aboutUsId/update", verify, verifyAdmin, aboutUsController.updateAboutUs);
router.delete("/:aboutUsId/delete", verify, verifyAdmin, aboutUsController.deleteAboutUs);


module.exports = router;