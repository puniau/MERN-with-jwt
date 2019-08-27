//index.js
import graphQLSchema from "./graphql/schema";
import graphQLResolvers from "./graphql/resolvers";
import express from "express";
import bodyParser from "body-parser";
import expressGraphQL from "express-graphql";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();
const app = express();
app.use(cors(), bodyParser.json());
app.use(
  "/graphql",
  expressGraphQL({
    schema: graphQLSchema,
    rootValue: graphQLResolvers,
    graphiql: true
  })
);

const uri =
  "mongodb+srv://admin:admin@cluster0-t5ohc.mongodb.net/auth_db?retryWrites=true&w=majority";

function main() {
  const port = process.env.PORT || 5000;

  //const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds135852.mlab.com:35852/mern-graphql-jwt`;
  const uri = `mongodb+srv://ushapunia:ushapunia123@mern-graphql-jwt-lrcwp.mongodb.net/test?retryWrites=true&w=majority;`;
  mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => {
      app.listen(port, () =>
        console.log(`Server is listening on port: ${port}`)
      );
    })
    .catch(err => {
      console.log(err);
    });
}
main();
