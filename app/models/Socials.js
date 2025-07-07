import { model, models, Schema } from "mongoose";

const SocialSchema = new Schema(
  {
    social: { type: String, required: true },
    socialurl: { type: String, required: true },
  },
  { timestamps: true }
);

const Social = models.Social || model("Social", SocialSchema);

export default Social;
