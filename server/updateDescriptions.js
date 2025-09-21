import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
import Donation from "./models/Donation.js";

const updateDescriptions = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");

    // condition: description missing OR empty string
    const donations = await Donation.find({
      $or: [
        { description: { $exists: false } },
        { description: "" },
        { description: null }
      ]
    });

    console.log(`Found ${donations.length} donations without description`);

    if (donations.length > 0) {
      const result = await Donation.updateMany(
        {
          $or: [
            { description: { $exists: false } },
            { description: "" },
            { description: null }
          ]
        },
        { $set: { description: "Default description" } }
      );
      console.log(`Updated ${result.modifiedCount} donations with default description`);
    } else {
      console.log("No donations to update");
    }

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
};

updateDescriptions();
