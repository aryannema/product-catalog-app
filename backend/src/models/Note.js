import mongoose from "mongoose";

// 1 - creating a schema
// 2 - create a model based of the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, // gives the createdAt and updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
