const mongoose = require("mongoose");

const promptsSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  activity: mongoose.Schema.Types.String,
  value: mongoose.Schema.Types.String,
  page: mongoose.Schema.Types.String,
  createdAt: mongoose.Schema.Types.Date,
  updatedAt: mongoose.Schema.Types.Date,
  author: mongoose.Schema.Types.String,
  prompt: mongoose.Schema.Types.String,
  aiReply: mongoose.Schema.Types.String,
  audioData: mongoose.Schema.Types.Array,
  isThread: mongoose.Schema.Types.Boolean,
  threadMessages: mongoose.Schema.Types.Array,
});

const Prompts = mongoose.model(
  "promptsSchema",
  promptsSchema,
  "messages"
);

module.exports = Prompts;
