import mongoose from "mongoose";

const d = new Date();

const radarSchema = mongoose.Schema({
  timeCreated: {
    type: String,
  },
  dateCreated: {
    type: String,
    default: new Date().toDateString(),
  },
  latitude: String,
  longitude: String,
  city: String,
  road: String,
});

var shareRadar = mongoose.model("shareRadar", radarSchema);

export default shareRadar;
