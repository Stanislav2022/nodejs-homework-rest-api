const express = require("express");

const ctrl = require("../../controllers/contacts");

const {
  validateBody,
  isValidId,
  isBodyFavorite,
} = require("../../middlewares");

const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", ctrl.getAll);

router.get("/:contactId", isValidId, ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.delete("/:contactId", isValidId, ctrl.deleteById);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  ctrl.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isBodyFavorite,
  validateBody(schemas.ubdateFavoriteSchema),
  ctrl.updateStatusContact
);
module.exports = router;
