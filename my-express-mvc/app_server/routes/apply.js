const express = require("express");
const router = express.Router();
const controllerApply = require("../controllers/controllerApply")

router.get('/', controllerApply.insert);

module.exports = router;