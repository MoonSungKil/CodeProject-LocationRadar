import express from "express";
import mongoose from "mongoose";
import axios from "axios";

import shareRadar from "../models/shareRadar.js";

const router = express.Router();

const API_KEY = "5d43149db49e499a8946636e73d9fe8f";
const API_URL = "https://api.opencagedata.com/geocode/v1/json";

export const createShare = async (req, res) => {
  const { title, latitude, longitude, timeCreated } = req.body;

  const request_url =
    API_URL +
    "?" +
    "key=" +
    API_KEY +
    "&q=" +
    encodeURIComponent(latitude + "," + longitude) +
    "&pretty=1" +
    "&no_annotations=1";

  const { data } = await axios.get(request_url);
  const location =
    (await data.results[0].components.town) ||
    (await data.results[0].components.village);

  const locationRoad = await data.results[0].components.road;

  let road;

  if (locationRoad) {
    if (locationRoad === "unnamed road") {
      road = `Безимена улица во близина на ${location}`;
    } else {
      road = locationRoad;
    }
  }

  const newShareRadar = new shareRadar({
    latitude,
    longitude,
    timeCreated,
    city: location,
    road,
  });

  try {
    await newShareRadar.save();

    res.status(201).json(newShareRadar);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getShares = async (req, res) => {
  try {
    const getAllShares = await shareRadar.find();

    res.status(200).json(getAllShares);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deleteAll = async (req, res) => {
  try {
    await shareRadar.remove({});
    res.json({ message: "Deleted successfully." });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default router;
