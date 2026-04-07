const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
  email: { type: String },
  image: { type: String },
  authType: { type: String },
  password: { type: String },
  emailVerified: { type: Date },
  createdAt: { type: Date },
  updatedAt: { type: Date },
  inviteCodeId: { type: mongoose.Schema.Types.ObjectId },
  tokens: { type: Number },
  role: { type: String },
  stripeCheckoutSession: {
    id: { type: String },
    amount_total: { type: Number },
    currency: { type: String },
    customer: { type: String },
    payment_status: { type: String },
  },
  desc: {
    identity: { type: String },
    proficiency: { type: String },
    content: { type: String },
  },
  renewTokens: { type: Date },
  cancelled: { type: Date },
  audiosLiked: { type: Number },
  preferences: {
    privatePrompts: { type: Boolean },
  },
  notifications: [
    {
      notificationId: { type: mongoose.Schema.Types.ObjectId },
      read: { type: Boolean },
      new: { type: Boolean },
      _id: { type: mongoose.Schema.Types.ObjectId },
    },
  ],
  onboarding: {
    studioTourViewed: { type: Boolean },
  },
  appsumo_user: { type: Boolean },
  additionalTokens: { type: Number },
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
