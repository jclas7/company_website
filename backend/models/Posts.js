const mongoose = require("mongoose");

const postScheema = new mongoose.Schema(
  {
    number: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: [String],
      trim: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    viewLogs: [
      {
        ip: String,
        userAgent: String,
        timeStatmp: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamp: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
