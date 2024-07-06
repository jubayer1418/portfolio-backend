import mongoose from "mongoose";
import app from "./app.js";
import cloudinary from "cloudinary";
import config from "./config/index.js";

cloudinary.v2.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET,
});

async function main() {
  try {
  await  mongoose.connect(config.MONGO_URL);
    app.listen(process.env.PORT, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();
