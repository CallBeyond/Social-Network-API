const { Schema, Types, model, get } = require("mongoose");

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Types.ObjectId,
      default: new Types.ObjectId(),
    },
    reactionText: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
      get: (createdAtVal) => new Date(createdAtVal).toLocaleString(),
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false,
  }
);

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 1,
      maxLength: 230,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    userId: {
      type: Types.ObjectId,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: () => Date.now(),
      get: (createdAtVal) => new Date(createdAtVal).toLocaleString(),
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
    versionKey: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("Thought", thoughtSchema);

module.exports = { Thought, thoughtSchema };