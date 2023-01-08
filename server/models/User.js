import mongoose from "mongoose";
import geojson from "mongoose-geojson-schema";

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ["Point"],
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

const userSchema = new mongoose.Schema(
  {
    userName: String,
    location: {
      type: pointSchema,
      index: "2dsphere", // Create a special 2dsphere index on `User.location`
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
