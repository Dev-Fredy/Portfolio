import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, unique: true },
  description: { type: String, required: true },
  technologies: { type: [String], required: true },
  content: { type: mongoose.Schema.Types.Mixed },
  imageurl: { type: String, required: true },
});

projectSchema.pre("save", function (next) {
  if (!this.isModified("title")) return next();

  this.slug = this.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  next();
});

// ✅ Fix OverwriteModelError:
const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
