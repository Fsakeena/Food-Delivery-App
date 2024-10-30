import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://afsakeena:6710013@cluster0.6r3giao.mongodb.net/food-del');
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed", error);
    process.exit(1);
  }
};

export default connectDB;
