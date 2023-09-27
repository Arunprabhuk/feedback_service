// Import db.js
const db = require("./db");

const submitFeedback = (Feedback) => {
  console.log("Inside the submitFeedback function");
  console.log(Feedback.id);
  // Check if feedback for the provided ID already exists
  return db.Feedback.findOne({ id: Feedback.id }).then((response) => {
    console.log("response", response);

    if (response) {
      return {
        statusCode: 401,
        message: "Feedback already submitted for this ID",
      };
    } else {
      const newFeedback = new db.Feedback({
        id: Feedback.id,
        Feedback,
      });

      newFeedback.save();

      return {
        statusCode: 200,
        message: "Feedback submitted successfully",
      };
    }
  });
};

module.exports = {
  submitFeedback,
};
