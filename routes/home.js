const express = require('express');
const homeController = require('../controllers/home');
const auth = require("../auth");

const {verify, verifyAdmin } = auth;


const router = express.Router();


router.get("/", homeController.showHome);
router.post("/add", verify, verifyAdmin, homeController.addHome);
router.patch("/:homeId/update", verify, verifyAdmin, homeController.updateHome);
router.delete("/delete", verify, verifyAdmin, homeController.deleteHome);

module.exports = router;