const mongoose = require("mongoose");

const userActivitiesSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  activity: mongoose.Schema.Types.String,
  value: mongoose.Schema.Types.String,
  page: mongoose.Schema.Types.String,
  createdAt: mongoose.Schema.Types.Date,
  updatedAt: mongoose.Schema.Types.Date,
});

const UserActivities = mongoose.model("userActivities", userActivitiesSchema, "userActivities");

module.exports = UserActivities;
