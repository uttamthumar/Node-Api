const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  }

});

module.exports = mongoose.model("Todo", TodoSchema);