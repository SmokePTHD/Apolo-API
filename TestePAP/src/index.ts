import "reflect-metadata";

import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { AppointmentsResolver } from "./resolver/appointments-resolver";
import { DentistResolver } from "./resolver/dentist-resolver";
import { CustomerResolver } from "./resolver/customer-resolver";

async function bootstrap() {
  const schema = await buildSchema({
    resolvers: [AppointmentsResolver, DentistResolver, CustomerResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await server.listen();

  console.log("Yup --> http://localhost:4000");
}

bootstrap();
