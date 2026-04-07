const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://EasyShop1859:easyshop0206@ac-ih91m5t-shard-00-00.axfqjjy.mongodb.net:27017,ac-ih91m5t-shard-00-01.axfqjjy.mongodb.net:27017,ac-ih91m5t-shard-00-02.axfqjjy.mongodb.net:27017/?ssl=true&replicaSet=atlas-mxr0y7-shard-0&authSource=admin&appName=Aryan");
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;