import mongoose from "mongoose";

const resumeSchema = new mongoose.Schema({
    userId: String,
    resumeData: Object,
    themeData: Object,
    versions: Array
});

export default mongoose.model("Resume", resumeSchema);
