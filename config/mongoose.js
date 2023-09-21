const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      console.log(process.env.MONGO_URI)
      const conn = await mongoose.connect("mongodb+srv://gargrishabh7889:Rishabh7889@cluster0.ongg5im.mongodb.net/");

      console.log(` MongoDB Connection Established\n`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

module.exports = connectDB;
