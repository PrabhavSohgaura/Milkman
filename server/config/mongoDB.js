import mongoose from "mongoose";

const CONNECTION_URI =
  "mongodb+srv://prabhav:prabhav333@cluster0.drj09.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    await mongoose.connect(CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongoDB connection successful");
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

export default mongoDB;
