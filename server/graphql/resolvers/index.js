// graphql/resolvers/handleGenerators/index.js
// import graphQLSchema from "./graphql/schema";
// import graphQLResolvers from "./graphql/resolvers";
import * as authHandlers from "./handlerGenerators/auth";
export default {
  ...authHandlers
};
require("dotenv").config();
//const app = express();
// app.use(cors(), bodyParser.json());
// app.use(
//   "/graphql",
//   expressGraphQL({
//     schema: graphQLSchema,
//     rootValue: graphQLResolvers,
//     graphiql: true
//   })
// );
