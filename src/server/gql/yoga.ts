import { createYoga } from "graphql-yoga"
import { schema } from "./schema"

export const yoga = createYoga({
	graphqlEndpoint: "/gql",
	landingPage: false,
	graphiql: process.env.NODE_ENV === "development",
	schema: schema,
})
