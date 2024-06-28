import { Schema, model } from "mongoose";
import { TMovie, TReview } from "./movie.interface";

const ReviewSchema = new Schema<TReview>({
    email: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
})

const MovieSchema = new Schema<TMovie>({
    title: { type: String, required: true },
    description: { type: String, required: true },
    releaseDate: { type: Date, required: true },
    genre: { type: String, required: true },
    isDeleted: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 },
    reviews: [ReviewSchema]
});

export const Movie = model<TMovie>("Movie", MovieSchema)