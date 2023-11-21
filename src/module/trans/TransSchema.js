import mongoose from "mongoose";

const TransSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  type: {
    type: String,
    required: true,
  },
  date: {
    type: Date,

    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

//make schema to taable
export default mongoose.model("Transaction", TransSchema); //trans
