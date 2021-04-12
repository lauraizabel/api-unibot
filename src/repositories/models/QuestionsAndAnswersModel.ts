import mongoose from "mongoose";

const QuestionsAndAnswersModel = new mongoose.Schema({
  topic: {
    type: String,
    required: true,
  },
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
  QuestionsAndAnswersModel,
  "qaReddit"
);

export default QuestionsAndAnswers;
