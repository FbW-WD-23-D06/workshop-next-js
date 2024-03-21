import mongoose from "mongoose";

const mongodbConnection = async () => {
  try {
    // const client = new MongoClient(process.env.MONGODB_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    // await client.connect();
    // return client.db(process.env.MONGODB_DB);
    await mongoose.connect("mongodb://localhost:27017/nextjs?readPreference=primary&appname=MongoDB%20Compass&ssl=false");
    console.log("DB connected");
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    const collectionsNames = collections.map(async (collection) => {
      const documentsAmount = await mongoose.connection.db
        .collection(collection.name)
        .countDocuments();
      return { name: collection.name, documentsAmount };
    });
    console.log("collections infos:", await Promise.all(collectionsNames));
  } catch (error) {
    console.error(error);
  }
};

mongodbConnection();
