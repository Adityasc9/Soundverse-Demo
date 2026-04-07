const mongoose = require("mongoose");

const audioTypesSchema = new mongoose.Schema({
  isStem: mongoose.Schema.Types.Boolean,
  stemType: mongoose.Schema.Types.String,
  audioType: mongoose.Schema.Types.String,
});

const AudioTypes = mongoose.model(
  "audioType",
  audioTypesSchema,
  "audiotypes"
);

module.exports = AudioTypes;
