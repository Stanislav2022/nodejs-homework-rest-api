const Contact = require("../models/contact");
const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Contact.find();
  res.json(result);
};

const getById = async (req, res) => {
  console.log(req.params);
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);

  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

// const updateById = async (req, res) => {
//   const id = req.params.contactId;
//   const result = await contacts.updateContact(id, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const deleteById = async (req, res) => {
//   const id = req.params.contactId;
//   const result = await contacts.removeContact(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({ message: "contact deleted" });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
