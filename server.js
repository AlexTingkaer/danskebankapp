import apollo from 'apollo-server'
const { ApolloServer, gql } = apollo

const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  type Person {
    val1: String
    val2: String
  }
  type Facility {
    val3: String
    val4: String
  }
  type Exposure {
    val5: String
    val6: String
  }
  
  type Query {
    person: Person
    facility: Facility
    exposure: Exposure
  }
`;

const person = 
    {
        val1: "",
        val2: "",
    };
    const facility = 
    {
        val3: "",
        val4: "",
    };

    const exposure = 
    {
        val5: "",
        val6: "",
    };


// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
    Query: {
        person: () => {
          console.log("resolver:person")
          return person
        },
        facility: () => {
          console.log("resolver:facility")
          return facility
        },
        exposure: () => {
          console.log("resolver:exposure")
          return exposure
        },
    },
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});