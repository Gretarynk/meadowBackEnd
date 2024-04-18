import mongoose from "mongoose";

const flowerSchema = mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true, min: 3 },
  plantCharacteristic: { type: String, required: true, min: 10 },
  imageURL: { type: String, required: true },
  isAnnual: { type: Boolean, default: true },
  price: { type: String, required: true },
  userId: { type: String, required: true },
});

export default mongoose.model("Flower", flowerSchema);

//   userId: { type: String, required: true },
