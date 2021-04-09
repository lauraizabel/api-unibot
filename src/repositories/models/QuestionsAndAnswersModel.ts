import mongoose from "mongoose";

const QuestionsAndAnswersModel = new mongoose.Schema({
  q: {
    type: Array,
    required: true,
  },
  a: {
    type: Array,
    required: true,
  },
});

const QuestionsAndAnswers = mongoose.model(
  "QuestionsAndAnswers",
  QuestionsAndAnswersModel
);

export default QuestionsAndAnswers;
