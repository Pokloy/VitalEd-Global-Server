const express = require('express');
const forSchoolsController = require('../controllers/forschools');
const auth = require("../auth");

const {verify, verifyAdmin } = auth;


const router = express.Router();


router.get("/", forSchoolsController.showForSchools);
router.post("/add", verify, verifyAdmin, forSchoolsController.addForSchools);
router.patch("/:forSchoolsId/update", verify, verifyAdmin, forSchoolsController.updateForSchools);
router.delete("/:forSchoolsId/delete", verify, verifyAdmin, forSchoolsController.deleteForSchools);


module.exports = router;