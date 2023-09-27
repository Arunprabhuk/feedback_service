const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/feedback");

const Feedback = mongoose.model("Feedback", {
  id: Number,
  Feedback: {},
});
module.exports = {
  Feedback,
};
