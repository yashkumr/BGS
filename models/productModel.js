import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,      
      trim: true,
    },
    slug: {
      type: String,
      
      unique: true,
    },
    price: {
      type: Number,
      
    },
    quantity: {
      type: Number,
      
    },
    description: {
      type: String,
      
      trim: true,
    },
    offer: { type: Number },

    productPictures: [{ img: { type: String } }],

    reviews: [
      {
        userId: { type: mongoose.ObjectId, ref: "User" },
        review: String,
      },
    ],
    category: {
      type: mongoose.ObjectId,
      ref: "Category",
    },
    createdBy: {
      type: mongoose.ObjectId,
      ref: "User",
      
    },
    updatedAt: Date,

    productPictures: [{ img: { type: String } }],
  },
  { timestamps: true }
);

export default mongoose.model("Products", productSchema);
