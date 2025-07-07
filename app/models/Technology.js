import mongoose, { model, models, Schema } from "mongoose";

let TechSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    imageurl: { type: String, required: true },
    content: { type: mongoose.Schema.Types.Mixed },
  },
  { timestamps: true }
);

let Tech = models.Tech || model("Tech", TechSchema);

export default Tech;
