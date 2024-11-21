const express = require("express");
const router = express.Router();
const HousingController = require("../controllers/controllerHousing");
// Fungsi dan Rute Index Kita Gunakan Untuk Memanggil Semua Data Dalam Database MongoDB
router.get("/housing", HousingController.Index);
module.exports = router;