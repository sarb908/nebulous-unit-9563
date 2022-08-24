
const router = require("express").Router();
const timeController = require('../controller/timeCotroller');

router.post("/", timeController.product_create);
router.get("/", timeController.product_all);
router.get("/:timeId", timeController.product_details);
router.put("/:timeId", timeController.product_update);
router.delete("/:timeId", timeController.product_delete);

module.exports = router;