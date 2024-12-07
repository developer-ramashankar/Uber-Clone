const mongoose = require("mongoose");

const BlacklistTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400,
  },
});

BlacklistTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const BlacklistToken = mongoose.model("BlacklistToken", BlacklistTokenSchema);

module.exports = BlacklistToken;
