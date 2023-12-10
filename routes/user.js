const express = require('express');
const userController = require('../controllers/user');
const auth = require("../auth");

const {verify, verifyAdmin } = auth;

const router = express.Router();


router.get("/" , verify, verifyAdmin, userController.showUsers);
router.post("/login" , userController.userLogin);
router.post("/add", userController.addUser);
router.delete("/:userId/delete", verify, verifyAdmin, userController.deleteUser);
router.patch("/:userId/update", verify, verifyAdmin, userController.updateUser);
router.get("/:userId/details", verify, verifyAdmin, userController.getSpecificUser);
router.get("/details", verify, userController.usergetProfile);

module.exports = router;