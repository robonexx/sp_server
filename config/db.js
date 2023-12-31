const mongoose = require('mongoose');

const db = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false)
   const con = await mongoose.connect(db);
    console.log(`DB connected ${con.connection.host}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
