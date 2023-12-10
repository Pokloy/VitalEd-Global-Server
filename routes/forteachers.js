const express = require('express');
const forTeachersController = require('../controllers/forteachers');
const auth = require("../auth");

const {verify, verifyAdmin } = auth;

const router = express.Router();

router.get("/", forTeachersController.showForTeachers);
router.post("/add",  verify, verifyAdmin, forTeachersController.addForTeachers);
router.patch("/:forTeachersId/update",  verify, verifyAdmin, forTeachersController.updateForTeachers);
router.delete("/:forTeachersId/delete",  verify, verifyAdmin, forTeachersController.deleteForTeachers);


module.exports = router;