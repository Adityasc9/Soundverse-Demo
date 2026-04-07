const mongoose = require("mongoose");

const audioSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  audioUrl: mongoose.Schema.Types.String,
  isLoopable: mongoose.Schema.Types.Boolean,
  duration: mongoose.Schema.Types.Number,
  isLiked: mongoose.Schema.Types.Boolean,
  muted: mongoose.Schema.Types.Boolean,
  bpm: mongoose.Schema.Types.Number,
  createdAt: mongoose.Schema.Types.Date,
  updatedAt: mongoose.Schema.Types.Date,
  __v: mongoose.Schema.Types.Number,
  likeCount: mongoose.Schema.Types.Number,
  isThread: mongoose.Schema.Types.Boolean,
  threadMessages: [
    {
      id: mongoose.Schema.Types.String,
    },
  ],
  audioType: mongoose.Schema.Types.String,
  messageId: mongoose.Schema.Types.String,
  isPublic: mongoose.Schema.Types.Boolean,
  isRestricted: mongoose.Schema.Types.Boolean, // You can adjust this based on the actual structure of savedBy
});

const Audio = mongoose.model("Audio", audioSchema, "audios");

module.exports = Audio;
