import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    main: String,
    aurthor: String,
    price: Number,
    views: Number,
    rating : String,
    image: String,
    title: String,
});
const courses = mongoose.model("course", courseSchema);

export default courses;